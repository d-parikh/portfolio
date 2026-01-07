"use client"; // required if using App Router and component has interactivity

import { Code2, Database, Globe, Zap } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: ["Javascript", "Typescript", "Python"],
  },
  {
    category: "Database",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    items: [
      "React",
      "Next.js",
      "React-Native",
      "Javascript",
      "TypeScript",
      "Tailwind CSS",
      "Orval(Api Generation)",
      "GraphQL",
      "Django",
      "Node.js(Foundation)",
      "MySQL",
      "MongoDB",
      "Firebase",
      "AWS",
      "Docker",
      "Git",
      "Github",
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* About text */}
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">
              About Me
            </span>
            <h2 className="section-heading mb-6">
              Turning Ideas Into
              <br />
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&#39;m Dhara Parikh, a Software Developer with 2+ years of
                experience building production-ready web applications and admin
                dashboards. I specialize in converting complex requirements and
                Figma designs into clean, scalable, high-performance frontend
                solutions.
              </p>
              <p>
                I&#39;ve delivered multiple live projects end-to-end while
                managing 4-5 projects in parallel, maintaining a 95% on-time
                delivery rate. I collaborate closely with clients, designers,
                and backend teams to align workflows and timelines.{" "}
              </p>
              <p>
                I focus on clean, maintainable code, reliable API integration,
                and intuitive user experiences, driven by clear communication,
                strong documentation, and continuous learning.{" "}
              </p>{" "}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="tech-badge">
                <Zap className="w-4 h-4 text-primary" />
                <span>Fast Learner</span>
              </div>
              <div className="tech-badge">
                <Code2 className="w-4 h-4 text-primary" />
                <span>Clean Code Advocate</span>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div id="skills">
            <span className="text-sm font-medium text-primary mb-2 block">
              Tech Stack
            </span>
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid  gap-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.category}
                  className="p-5 rounded-2xl border border-border bg-card hover-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${skill.bgColor} flex items-center justify-center mb-4`}
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  </div>
                  <h4 className="font-semibold mb-3">{skill.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
