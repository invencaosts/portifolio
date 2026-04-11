"use client";

import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GitHubProject } from "@/lib/github";

interface ProjectCarouselProps {
  projects: GitHubProject[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full group">
      <div className="flex items-center justify-between mb-6">
        <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
          PROJETOS QUE QUERO DESTACAR
        </div>
        <div className="flex gap-2">
           <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"></div>
           <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4 snap-x">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-64 md:w-80 bento-card p-6 group/item hover:border-primary/50 transition-all snap-start relative overflow-hidden"
          >
            {/* Index indicator */}
            <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-foreground/20 group-hover/item:text-primary/40 transition-colors">
              PRJ_{String(index + 1).padStart(2, '0')}
            </div>

            <div className="flex items-start justify-between mb-4">
              <FiGithub className="text-primary w-5 h-5" />
              <FiExternalLink className="text-foreground/20 group-hover/item:text-primary transition-colors w-4 h-4" />
            </div>
            
            <h3 className="font-headline font-bold text-lg mb-2 text-foreground group-hover/item:text-primary transition-colors truncate">
              {project.name}
            </h3>
            
            <p className="font-sans text-xs text-foreground/50 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>

      <div className="font-mono text-[8px] text-foreground/20 mt-2 uppercase tracking-tight text-right">
        Scroll_to_explore {">>"}
      </div>
    </div>
  );
}
