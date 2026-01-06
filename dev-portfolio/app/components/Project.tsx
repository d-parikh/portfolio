"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

// import HayyacomLogo from "./public/images/hayyacom_logojpg";
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  projectLink?: string
}

const projects: Project[] = [
  {
    title: "Hayyacom Admin Panel",
    description:
      "Multilingual event and guest management platform with role-based access, real-time analytics, and automated WhatsApp invitations.",
    image: "/images/hayyacom.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
    projectLink: "https://hayyacom.com/"
  },
  {
    title: "Menusnap Admin Panel",
    description:
      "AI Food Photo Enhancement Tool.Remove backgrounds, enhance visuals, and resize food images instantly for any platform.",
    image: "/images/menusnap.jpg",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    github: "#",
    demo: "#",
    featured: true,
    projectLink: "https://www.menusnap.app/"
  },
  {
    title: "2BNChill Admin Panel and Filmmaker Admin Panel",
    description:
      "A Social Platform for Filmmakers & Movie Enthusiasts A centralized platform where filmmakers publish movies, track audience engagement, and connect with viewers-managed through a powerful admin system.",
    image: "/images/filmmaker.jpg",
    tags: ["Go", "Docker", "Kubernetes", "Prometheus"],
    github: "#",
    projectLink: "https://2bnchill.com/"
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer project-card hover-card rounded-lg group border border-border  ${
          project.featured ? "" : ""
        }`}
        // style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className={project.featured ? "" : ""}>
          <div
            className={`${
              project.featured ? "aspect-[16/10]" : "aspect-video"
            } relative overflow-hidden`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg hover:rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={project.featured}
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <a
                href={project.projectLink}
                className="w-6 h-6 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="View demo"
                onClick={(e)=>e.stopPropagation()}
                target="_blank"
              >
                <ExternalLink className="w-4 h-4"  />
              </a>
            </div>
            <p className="text-muted-foreground text-base">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-background rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
            >
              <X />
            </button>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">
              Portfolio
            </span>
            <h2 className="section-heading">Featured Projects</h2>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
