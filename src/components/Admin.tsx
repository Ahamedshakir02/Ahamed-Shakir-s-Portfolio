import { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User, signOut } from 'firebase/auth';
import { Plus, Trash2, Edit3, LogIn, LogOut, Loader2, Save } from 'lucide-react';
import { dataService } from '../services/dataService';
import type { BlogPost, Project, Experience } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'experience'>('posts');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  // Form states
  const [newPost, setNewPost] = useState({ title: '', content: '', excerpt: '', tags: '', coverImage: '' });
  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '', image: '', link: '', github: '' });
  const [newExp, setNewExp] = useState({ role: '', company: '', period: '', description: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.email === 'ahamedshakir02@gmail.com') {
      const unsubPosts = dataService.subscribeToPosts(setPosts);
      const unsubProj = dataService.subscribeToProjects(setProjects);
      const unsubExp = dataService.subscribeToExperience(setExperiences);
      return () => {
        unsubPosts();
        unsubProj();
        unsubExp();
      }
    }
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = () => signOut(auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        if (activeTab === 'posts') {
            await dataService.addPost({
                ...newPost,
                publishedAt: new Date().toISOString(),
                authorId: user?.uid || 'admin',
                tags: newPost.tags.split(',').map(t => t.trim())
            });
            setNewPost({ title: '', content: '', excerpt: '', tags: '', coverImage: '' });
        } else if (activeTab === 'projects') {
            await dataService.addProject({
                ...newProject,
                technologies: newProject.technologies.split(',').map(t => t.trim()),
                order: projects.length + 1
            });
            setNewProject({ title: '', description: '', technologies: '', image: '', link: '', github: '' });
        } else if (activeTab === 'experience') {
            await dataService.addExperience({
                ...newExp,
                order: experiences.length + 1
            });
            setNewExp({ role: '', company: '', period: '', description: '' });
        }
        setIsModalOpen(false);
    } catch (err) {
        console.error(err);
        alert('Failed to add content. Check permissions.');
    }
  };

  if (loading) return <div className="pt-32 flex justify-center"><Loader2 className="animate-spin" /></div>;

  if (!user || user.email !== 'ahamedshakir02@gmail.com') {
    return (
      <div className="pt-48 min-h-screen flex flex-col items-center px-6">
        <h1 className="text-4xl font-display font-bold mb-8">Admin Access</h1>
        <p className="text-zinc-500 mb-12 text-center max-w-md">
          This area is restricted to the administrator. Please log in with the authorized account.
        </p>
        <button 
          onClick={handleLogin}
          className="flex items-center gap-3 px-8 py-4 bg-zinc-950 text-white rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
        >
          <LogIn size={20} />
          Login with Google
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold">Dashboard</h1>
          <p className="text-zinc-500">Manage your dynamic content</p>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {['posts', 'projects', 'experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
              activeTab === tab ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Simplified Management View */}
      <div className="bg-zinc-50 rounded-[2rem] p-8 border border-zinc-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-display font-bold capitalize">{activeTab}</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest"
          >
            <Plus size={16} /> Add New
          </button>
        </div>

        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            title={`Add New ${activeTab.slice(0, -1)}`}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {activeTab === 'posts' && (
                    <>
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} required />
                        <textarea className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 h-40" placeholder="Content (Markdown)" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Excerpt" value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Tags (comma separated)" value={newPost.tags} onChange={e => setNewPost({...newPost, tags: e.target.value})} />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Cover Image URL" value={newPost.coverImage} onChange={e => setNewPost({...newPost, coverImage: e.target.value})} />
                    </>
                )}
                {activeTab === 'projects' && (
                    <>
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
                        <textarea className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Technologies (comma separated)" value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Live Link" value={newProject.link} onChange={e => setNewProject({...newProject, link: e.target.value})} />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="GitHub Link" value={newProject.github} onChange={e => setNewProject({...newProject, github: e.target.value})} />
                    </>
                )}
                {activeTab === 'experience' && (
                    <>
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Role" value={newExp.role} onChange={e => setNewExp({...newExp, role: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Company" value={newExp.company} onChange={e => setNewExp({...newExp, company: e.target.value})} required />
                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Period (e.g. 2022 - Present)" value={newExp.period} onChange={e => setNewExp({...newExp, period: e.target.value})} required />
                        <textarea className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3" placeholder="Description" value={newExp.description} onChange={e => setNewExp({...newExp, description: e.target.value})} required />
                    </>
                )}
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-950 text-white rounded-xl font-bold uppercase tracking-widest text-xs">
                    <Save size={18} /> Save Content
                </button>
            </form>
        </Modal>

        <div className="grid gap-4">
            {activeTab === 'posts' && posts.map(post => (
                <div key={post.id} className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100">
                    <span className="font-medium">{post.title}</span>
                    <div className="flex gap-2">
                        <button className="p-2 text-zinc-400 hover:text-zinc-950 transition-colors"><Edit3 size={18} /></button>
                        <button className="p-2 text-zinc-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                </div>
            ))}
            {activeTab === 'projects' && projects.map(proj => (
                <div key={proj.id} className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100">
                    <span className="font-medium">{proj.title}</span>
                    <div className="flex gap-2">
                        <button className="p-2 text-zinc-400 hover:text-zinc-950 transition-colors"><Edit3 size={18} /></button>
                        <button className="p-2 text-zinc-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                </div>
            ))}
            {activeTab === 'experience' && experiences.map(exp => (
                <div key={exp.id} className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100">
                    <div>
                        <div className="font-medium">{exp.role}</div>
                        <div className="text-xs text-zinc-400">{exp.company}</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-zinc-400 hover:text-zinc-950 transition-colors"><Edit3 size={18} /></button>
                        <button className="p-2 text-zinc-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
