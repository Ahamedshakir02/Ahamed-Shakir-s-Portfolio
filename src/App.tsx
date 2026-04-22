/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Blog from './components/Blog';
import Resume from './components/Resume';
import BlogPostView from './components/BlogPostView';
import Admin from './components/Admin';
import CustomCursor from './components/CustomCursor';
import { dataService } from './services/dataService';

import { VibeProvider } from './contexts/VibeContext';

export default function App() {
  useEffect(() => {
    // Seed initial data if needed for display
    dataService.seedInitialDataIfNeeded().catch(console.error);
  }, []);

  return (
    <VibeProvider>
      <Router>
        <div className="min-h-screen bg-white cursor-none">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostView />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </VibeProvider>
  );
}

