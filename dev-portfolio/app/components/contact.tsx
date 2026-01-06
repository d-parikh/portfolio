// app/components/Contact.tsx  (or pages/components/Contact.tsx)
'use client'; // Add this if using App Router and this component has interactivity

import { Mail, MapPin, Calendar, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">Contact</span>
            <h2 className="section-heading mb-6">
              Let&#39;s Build Something
              <br />
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Have a project in mind or want to discuss opportunities? I&#39;m always excited to hear about new ideas and challenges.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=parikhdhara151@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Dhara,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors group"
                target='_blank'
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">parikhdhara151@gmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-800" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>

              {/* <a 
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Schedule a call</p>
                  <p className="font-medium group-hover:text-primary transition-colors">Book a meeting</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a> */}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/d-parikh', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dhara-parikhh/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:bg-secondary hover:border-primary/50 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Card */}
          <div className="relative">
            <div className="glass-card p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4">
                  <span className="text-3xl">👋</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                <p className="text-muted-foreground text-sm">
                  Let`&#39;`s discuss your project and see how I can help bring your vision to life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-dashed">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm text-primary font-medium">~24h</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-secondary">
                    <div className="w-4/5 h-full rounded-full bg-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <p className="text-2xl font-bold text-primary">95%</p>
                    <p className="text-xs text-muted-foreground">On Time Delivery</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 text-center">
                    <p className="text-2xl font-bold text-accent">10+</p>
                    <p className="text-xs text-muted-foreground">Projects Done</p>
                  </div>
                </div>
              </div>

              {/* <a
                href="mailto:hello@yourname.dev"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Send a Message
                <Mail className="w-4 h-4" />
              </a> */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border-2 border-dashed border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
