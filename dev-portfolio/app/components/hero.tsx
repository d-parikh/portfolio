"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 mesh-gradient">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Available for work
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="hero-heading animate-fade-up">
                Hi, I&apos;m a
                <br />
                <span className="text-gradient">Software Developer</span>
              </h1>

              <p className="body-large text-muted-foreground max-w-lg animate-fade-up-delay-1">
                I build exceptional digital experiences with clean code and
                modern technologies. Passionate about creating scalable
                solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border font-medium rounded-xl hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center gap-4 animate-fade-up-delay-3">
              <span className="text-sm text-muted-foreground">Find me on</span>

              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/d-parikh" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/dhara-parikhh/",
                  },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Terminal */}
          <div className="relative animate-fade-up-delay-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  developer.js
                </span>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="space-y-2">
                  <p>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400"> developer</span>
                    <span className="text-gray-300"> = {"{"}</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-amber-400">
                      &#34;Dhara Parikh&#34;
                    </span>
                    <span className="text-gray-300">,</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-green-400">role</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-amber-400">
                      &#34;Software Developer&#34;
                    </span>
                    <span className="text-gray-300">,</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-green-400">skills</span>
                    <span className="text-gray-300">: [</span>
                    <span className="text-amber-400">&#34;ReactJS&#34;</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-amber-400">&#34;NextJS&#34;</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-amber-400">&#34;Javascript&#34;</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-amber-400">&#34;Typescript&#34;</span>
                    <span className="text-gray-300">,</span>
                    <span className="text-amber-400">
                      &#34;React-Native&#34;
                    </span>
                    <span className="text-gray-300">,</span>
                    <span className="text-amber-400">&#34;Python&#34;</span>
                    <span className="text-gray-300">,</span>
                    <span className="text-amber-400">&#34;Django&#34;</span>
                    <span className="text-gray-300">, </span>
                    <span className="text-amber-400">&#34;Mysql&#34;</span>
                    <span className="text-gray-300">],</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-green-400">passion</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-amber-400">
                      &#34;Building great software&#34;
                    </span>
                  </p>

                  <p>
                    <span className="text-gray-300">{"}"}</span>
                    <span className="text-gray-300">;</span>
                  </p>

                  <p className="mt-4 flex items-center gap-2">
                    <span className="text-green-400">▶</span>
                    <span className="text-gray-300 typing-cursor">
                      Ready to code...
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float">
              <span className="text-sm font-medium">⚡ 2+ Years Exp</span>
            </div>

            {/* <div
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <span className="text-sm font-medium">🚀 10+ Projects</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
