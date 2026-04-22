import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import type { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    return dataService.subscribeToPosts(setPosts);
  }, []);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
            Writing & Insights
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter mb-8">
            The <span className="italic font-serif text-zinc-400">Journal</span>.
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
            Sharing thoughts on design, engineering, and the future of digital products.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-[4rem] border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-display italic text-2xl">No stories published yet. Stay tuned.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100 mb-8">
                  <img 
                    src={post.coverImage || `https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop`} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-950">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    5 min read
                  </div>
                </div>

                <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-zinc-950 font-bold uppercase tracking-widest text-[10px]">
                  Read Story
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
