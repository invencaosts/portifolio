'use client';

import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { GitHubProject } from '@/lib/github';

interface ProjectCarouselProps {
  projects: GitHubProject[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="group w-full">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-foreground/40 font-mono text-[10px] tracking-widest uppercase">
          PROJETOS QUE QUERO DESTACAR
        </div>
        <div className="flex gap-2">
          <div className="bg-primary/20 h-1.5 w-1.5"></div>
          <div className="bg-primary/40 h-1.5 w-1.5 animate-pulse"></div>
          <div className="bg-primary/20 h-1.5 w-1.5"></div>
        </div>
      </div>

      <div className="scrollbar-hide flex snap-x gap-4 overflow-x-auto pb-4">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card group/item hover:border-primary/50 relative w-64 flex-shrink-0 snap-start overflow-hidden p-6 transition-all md:w-80"
          >
            {/* Index indicator */}
            <div className="text-foreground/20 group-hover/item:text-primary-text/40 absolute top-0 right-0 p-3 font-mono text-[8px] transition-colors">
              PRJ_{String(index + 1).padStart(2, '0')}
            </div>

            <div className="mb-4 flex items-start justify-between">
              <FiGithub className="text-primary-text h-5 w-5" />
              <FiExternalLink className="text-foreground/20 group-hover/item:text-primary-text h-4 w-4 transition-colors" />
            </div>

            <h3 className="font-headline text-foreground group-hover/item:text-primary-text mb-2 truncate text-lg font-bold transition-colors">
              {project.name}
            </h3>

            <p className="text-foreground/50 line-clamp-2 font-sans text-xs leading-relaxed">
              {project.description}
            </p>

            {/* Subtle glow background */}
            <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity group-hover/item:opacity-100"></div>
          </a>
        ))}
      </div>

      <div className="text-foreground/20 mt-2 text-right font-mono text-[8px] tracking-tight uppercase">
        Scroll_to_explore {'>>'}
      </div>
    </div>
  );
}
