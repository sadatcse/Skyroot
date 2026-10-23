import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

export const Projects = () => {
  // Removed the type annotation <'All' | 'Upcoming' | 'Ongoing' | 'Completed' | 'Consultancy'>
  const [filter, setFilter] = useState('All');

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // You can change this to 9 or 12 if you want more items per page!

  // Reset to page 1 whenever the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // 1. Filter the projects
  const filteredProjects = projects.filter(p => filter === 'All' || p.status === filter);

  // 2. Calculate Pagination variables
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 3. Helper to generate page numbers with '...'
  // Removed the ': number' type annotations from the parameters
  const generatePageNumbers = (current, total) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, '...', total];
    if (current >= total - 2) return [1, '...', total - 3, total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Our Portfolio" description="Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects." />
      {/* Page Header */}
      <section className="relative bg-neutral py-24 px-6 lg:px-10 overflow-hidden">
        {/* Header background: drop the image at public/headers/projects.jpg (falls back to solid colour) */}
        <img
          src="/headers/projects.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/80 to-neutral/60 md:via-neutral/70 md:to-neutral/30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Our Portfolio</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-base-content/5 pb-8">
          <div className="flex flex-wrap gap-4">
            {['All', 'Upcoming', 'Ongoing', 'Completed', 'Consultancy'].map((f) => (
              <button
                key={f}
                // Removed the 'as any' assertion
                onClick={() => setFilter(f)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  filter === f
                    ? "bg-primary text-white shadow-lg shadow-secondary/20"
                    : "bg-base-content/5 text-base-content/60 hover:bg-base-content/10"
                )}
              >
                {f === 'All' ? 'All Projects' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - USING paginatedProjects instead of filteredProjects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 min-h-150">
          {paginatedProjects.length === 0 ? (
            <div className="col-span-full flex items-center justify-center py-20 text-gray-400 font-bold uppercase tracking-widest">
              No projects found for this category.
            </div>
          ) : (
            paginatedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative aspect-3/4 overflow-hidden bg-neutral cursor-pointer"
              >
                <Link to={`/project/${project.id}`} aria-label={project.title} className="absolute inset-0">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className={cn(
                    "bg-[#1a1a1a] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest",
                    project.status === 'Completed' ? "bg-neutral" :
                      project.status === 'Upcoming' ? "bg-neutral" :
                        project.status === 'Consultancy' ? "bg-secondary" : "bg-primary"
                  )}>
                    {project.status === 'Completed' ? 'HANDED OVER' :
                      project.status === 'Upcoming' ? 'SOLD OUT' :
                        project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black text-white uppercase leading-none mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider">
                    {project.location}
                  </p>
                </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 mb-16">
            <div className="join shadow-sm">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="join-item btn bg-base-100 border-base-200 hover:bg-base-200 disabled:bg-base-100 disabled:text-base-content/30"
              >
                «
              </button>

              {pageNumbers.map((num, idx) => (
                <button
                  key={idx}
                  disabled={num === '...'}
                  // Removed the 'as number' assertion
                  onClick={() => num !== '...' && setCurrentPage(num)}
                  className={`join-item btn border-base-200 ${num === '...' ? 'bg-base-100 disabled:bg-base-100 disabled:text-base-content cursor-default' :
                      num === currentPage ? 'text-white border-none hover:brightness-110' : 'bg-base-100 hover:bg-base-200'
                    }`}
                  style={num === currentPage ? { backgroundColor: "rgb(102,204,0)" } : {}}
                >
                  {num}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="join-item btn bg-base-100 border-base-200 hover:bg-base-200 disabled:bg-base-100 disabled:text-base-content/30"
              >
                »
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-base-100 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 space-y-8">
            <div className="space-y-2">
              <div className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Ongoing Flagship</div>
              <h2 className="text-4xl font-black text-neutral">Skyroot Horizon</h2>
            </div>
            <p className="text-base-content/70 leading-relaxed">
              Experience the pinnacle of luxury living in our most ambitious project yet. Skyroot Horizon brings ultra-luxury apartments with panoramic views of the Gulshan Lake and smart home integration.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span className="font-bold text-neutral">Gulshan 2, Dhaka</span>
              </div>
              <div className="text-base-content/40">Est. Completion: 2026</div>
            </div>
            <Link
              to="/project/fp1"
              className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary transition-all shadow-xl shadow-secondary/20"
            >
              Explore Exclusive Access
            </Link>
          </div>
          <div className="h-full min-h-100">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
              alt="Skyroot Horizon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};