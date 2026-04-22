import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { dataService } from '../services/dataService';
import type { BlogPost } from '../types';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPostView() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dataService.getPostById(id).then(data => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return (
    <div className="pt-32 min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zinc-950"></div>
    </div>
  );

  if (!post) return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-display font-bold">Post not found</h1>
      <Link to="/blog" className="text-blue-600 hover:underline flex items-center gap-2">
        <ArrowLeft size={18} /> Back to Blog
      </Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6"
    >
      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors mb-12 uppercase text-[10px] font-bold tracking-widest">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {post.coverImage && (
          <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 mb-6">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
          </div>
          <div className="flex items-center gap-1.5">
            <User size={14} />
            Admin
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-8 leading-[0.9]">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
}
