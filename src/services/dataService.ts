import { 
  collection, 
  getDocs, 
  getDoc,
  doc,
  query, 
  orderBy, 
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  type DocumentData 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { BlogPost, Project, Experience } from '../types';

export const dataService = {
  // Real-time listeners
  subscribeToPosts(callback: (posts: BlogPost[]) => void) {
    const q = query(collection(db, 'posts'), orderBy('publishedAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost)));
    });
  },

  subscribeToProjects(callback: (projects: Project[]) => void) {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
    return onSnapshot(q, (snapshot) => {
      callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project)));
    });
  },

  subscribeToExperience(callback: (experience: Experience[]) => void) {
    const q = query(collection(db, 'experience'), orderBy('order', 'desc'));
    return onSnapshot(q, (snapshot) => {
      callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Experience)));
    });
  },

  async getPostById(id: string): Promise<BlogPost | null> {
    const docRef = doc(db, 'posts', id);
    const snap = await getDoc(docRef);
    return snap.exists() ? ({ id: snap.id, ...snap.data() } as BlogPost) : null;
  },

  // Mutations
  async addPost(post: Omit<BlogPost, 'id'>) {
    return addDoc(collection(db, 'posts'), post);
  },

  async addProject(project: Omit<Project, 'id'>) {
    return addDoc(collection(db, 'projects'), project);
  },

  async addExperience(exp: Omit<Experience, 'id'>) {
    return addDoc(collection(db, 'experience'), exp);
  },

  // Helper to seed initial data if empty
  async seedInitialDataIfNeeded() {
    const projSnap = await getDocs(collection(db, 'projects'));
    if (projSnap.empty) {
      const sampleProjects = [
        {
          title: "AI-Based FIR Analysis",
          description: "NLP-based system to extract structured information from unstructured FIR documents using Python and Regex.",
          technologies: ["Python", "NLP", "Regex", "PDF Processing"],
          link: "https://github.com/ahamedshakir02",
          github: "https://github.com/ahamedshakir02",
          order: 1
        },
        {
          title: "Real-Time GPS Safety App",
          description: "React Native mobile app connected to an ESP32 for real-time tracking and accident detection.",
          technologies: ["React Native", "Firebase", "ESP32", "WebSockets"],
          link: "https://github.com/ahamedshakir02",
          github: "https://github.com/ahamedshakir02",
          order: 2
        },
        {
          title: "Disease Prediction ANN",
          description: "Artificial Neural Network model achieving 98%+ accuracy in disease diagnosis using medical datasets.",
          technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
          link: "https://github.com/ahamedshakir02",
          github: "https://github.com/ahamedshakir02",
          order: 3
        }
      ];
      for (const p of sampleProjects) {
        await addDoc(collection(db, 'projects'), p);
      }
    }

    const expSnap = await getDocs(collection(db, 'experience'));
    if (expSnap.empty) {
      const sampleExp = [
        {
          company: "GTech µLearn | MES College",
          role: "Campus Lead",
          period: "July 2025 - April 2026",
          description: "Led the campus community, increasing participation by 40%. Organized AI and Web Dev workshops for 100+ students.",
          order: 1
        }
      ];
      for (const e of sampleExp) {
        await addDoc(collection(db, 'experience'), e);
      }
    }

    const postSnap = await getDocs(collection(db, 'posts'));
    if (postSnap.empty) {
      const samplePosts = [
        {
          title: "The Future of Web Interactivity",
          content: "Web interactivity is evolving rapidly...",
          excerpt: "How motion and gestural design are changing the way we interact with digital products.",
          publishedAt: new Date().toISOString(),
          authorId: "admin",
          tags: ["Design", "Web Dev"],
          coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "Scaling React Applications in 2026",
          content: "Scaling large projects requires discipline...",
          excerpt: "Best practices for maintaining clean architecture in complex React ecosystems.",
          publishedAt: new Date().toISOString(),
          authorId: "admin",
          tags: ["React", "Architecture"],
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
        }
      ];
      for (const p of samplePosts) {
        await addDoc(collection(db, 'posts'), p);
      }
    }
  }
};
