import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, X } from "lucide-react";
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  content: {
    overview: string;
    features: string[];
    techStack: string[];
  };
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project[];
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer project-card hover-card group ${
          project.featured ? "md:col-span-2" : ""
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div
          className={`${
            project.featured ? "aspect-[16/10]" : "aspect-video"
          } relative overflow-hidden`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {project.description}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center">
          {/* Scrollable container */}
          <div
            className="relative bg-background w-full max-w-3xl my-10 rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary"
              >
                <X />
              </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto p-6 space-y-6 max-h-[75vh]">
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overview */}
              <section>
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">
                  {project.content.overview}
                </p>
              </section>

              {/* Features */}
              <section>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {project.content.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack */}
              <section>
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.content.techStack.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="p-5 border-t flex gap-3">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg border hover:bg-secondary flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
