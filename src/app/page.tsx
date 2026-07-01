'use client';

import {IconBrandLinkedin, IconBrandGithub, IconBrandX, IconMail,IconExternalLink ,IconArrowUpRight, IconMenu2, IconX, IconArrowNarrowDown, IconCode} from '@tabler/icons-react';
import { useState } from 'react';

const skills = [
  {
    title: 'Frontend',
    items: ['HTML, CSS, JavaScript', 'React, Next.js', 'Tailwind CSS, Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js, Express.js', 'REST APIs', 'MongoDB, Appwrite'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git & GitHub', 'Postman', 'Vercel'],
  },
];

const projects = [
  
  {
    title: 'E-commerce Platform',
    screenshot: '/techshop.png',
    link: 'https://techstore.appwrite.network/',
    githubLink: 'https://github.com/Surajit1610/TechStore',
    description: 'A full-featured e-commerce platform built with React and Appwrite, allowing users to browse products, add to cart, and complete purchases.',
    stack: ['React', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Doctor Appointment Booking',
    screenshot: '/medicure.png',
    link: 'https://medicure.appwrite.network/',
    githubLink: 'https://github.com/Surajit1610/Medicure',
    description: 'A healthcare management system for booking doctor appointments with a user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Appwrite'],
  },
  {
    title: 'Portfolio Website',
    screenshot: '/portfolio.png',
    link: 'https://surajitmondal.com/',
    githubLink: 'https://github.com/Surajit1610/Portfolio',
    description: 'A modern one-page portfolio built with Next.js and Tailwind CSS to showcase personal work and contact details.',
    stack: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-[#011C40]/70 backdrop-blur-sm z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#hero" className="text-xl font-semibold text-[#A7EBF2] flex items-center gap-2"><IconCode size={30} /> SM</a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#A7EBF2] transition-all duration-300 hover:text-[#54ACBF] active:scale-95">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex rounded-md border border-[#54ACBF] p-2 text-[#A7EBF2] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>

        <div className={`flex flex-col gap-3 border-t border-[#54ACBF]/40 bg-[#011C40]/80 px-4 py-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#A7EBF2] transition-all duration-300 hover:text-[#54ACBF] border backdrop:blur-sm border-[#54ACBF]/40 rounded-md px-3 py-2 active:scale-97"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="flex flex-col w-full items-center justify-center flex-1 transition-all duration-300">
        <div id="hero" className="flex min-h-screen w-full flex-col items-center justify-center gap-5 px-4 py-24 text-center sm:px-6 sm:py-20 lg:px-8 bg-linear-150 from-[#54ACBF] via-[#26658C] to-[#023859]">
          <h2 className="animate-fade-in-down text-3xl font-bold text-[#42a2de] sm:text-4xl">Hi I'm</h2>
          <h1 className="animate-fade-in-down max-w-5xl sm:p-2 text-5xl font-bold leading-tight bg-linear-90 from-[#47b7fd] to-[#b5def8] bg-clip-text text-transparent sm:text-6xl lg:text-8xl">Surajit Mondal</h1>
          <p className="animate-fade-in-up-delay text-2xl font-semibold text-[#A7EBF2] sm:text-3xl lg:text-4xl">A Full Stack Web Developer</p>
          <p className="animate-fade-in-up-delay rounded-full border px-3 py-1 text-base text-[#2ae2a8] sm:text-xl">Available for work</p>
          <div className=" mt-3 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a href="#projects" className="rounded-2xl border p-4 text-lg font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1 hover:border-[#A7EBF2] hover:text-[#A7EBF2] sm:text-xl animate-fade-in-left">View My Work</a>
            <a href="#contact" className="rounded-2xl border p-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#A7EBF2] hover:text-[#A7EBF2] sm:text-xl animate-fade-in-right">Get In Touch</a>
          </div>
          <IconArrowNarrowDown size={50} className="animate-float mt-10 rounded-full border border-[#54ACBF] p-2 text-[#A7EBF2]" />
        </div>

        <div id="about" className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-[#023859]">
          <h2 className="text-2xl font-bold text-[#A7EBF2] sm:text-3xl border border-[#A7EBF2] px-4 py-2 rounded-full">About Me</h2>
          <div className="max-w-4xl text-center">
            <p className="mt-4 text-base leading-relaxed text-[#dff7fa] sm:text-lg">
              I’m currently pursuing my MCA and have been learning and building in web development for more than 1 year.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#dff7fa] sm:text-lg">
              Over this time, I’ve worked on more than 5 projects, creating responsive and user-friendly web applications while continuously improving my skills in modern web technologies.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#54ACBF] bg-[#011C40]/50 p-4">
                <p className="text-xl font-semibold text-[#47b7fd] sm:text-2xl">MCA</p>
                <p className="mt-2 text-sm text-[#A7EBF2]">Currently pursuing my master’s degree</p>
              </div>
              <div className="rounded-2xl border border-[#54ACBF] bg-[#011C40]/50 p-4">
                <p className="text-xl font-semibold text-[#47b7fd] sm:text-2xl">1+ Years</p>
                <p className="mt-2 text-sm text-[#A7EBF2]">Hands-on experience in web development</p>
              </div>
              <div className="rounded-2xl border border-[#54ACBF] bg-[#011C40]/50 p-4 sm:col-span-2 lg:col-span-1">
                <p className="text-xl font-semibold text-[#47b7fd] sm:text-2xl">5+ Projects</p>
                <p className="mt-2 text-sm text-[#A7EBF2]">Built practical projects with real-world value</p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-[#26658C]">
          <h2 className="text-2xl font-bold text-[#A7EBF2] sm:text-3xl border border-[#A7EBF2] mt-3 px-4 py-2 rounded-full">My Skills</h2>
          <div className="w-full max-w-6xl">
            <div className="text-center">
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#dff7fa] sm:text-lg">
                I enjoy building modern web experiences with a strong focus on clean UI, performance, and practical problem-solving.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-3xl border border-[#54ACBF] bg-[#011C40]/50 p-6 shadow-lg shadow-[#011C40]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-[#47b7fd]">{skill.title}</h3>
                  <ul className="mt-4 space-y-2 text-[#dff7fa]">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-[#2ae2a8]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-[#023859]">
          <h2 className="text-2xl font-bold text-[#A7EBF2] sm:text-3xl border border-[#A7EBF2] mt-3 px-4 py-2 rounded-full">My Projects</h2>
          <div className="w-full max-w-6xl">
            
              
            <div className="text-center"> 
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#dff7fa] sm:text-lg">
                Here are a few projects that reflect my interest in building practical, visually appealing web applications.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="rounded-3xl border border-[#54ACBF] bg-[#011C40]/50 p-6 shadow-lg shadow-[#011C40]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-[#47b7fd]">{project.title}</h3>
                  {project.screenshot && (
                    <img src={project.screenshot} alt={project.title} className="mt-4 w-full rounded-lg border border-[#54ACBF]" />
                  )}
                  <p className="mt-3 text-[#dff7fa]">{project.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded-lg border border-[#54ACBF] px-3 py-1 font-semibold text-[#2ae2a8] transition-all duration-300 hover:bg-[#54ACBF] hover:text-[#011C40]">
                        Live Demo <IconExternalLink size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded-lg border border-[#54ACBF] px-3 py-1 font-semibold text-[#2ae2a8] transition-all duration-300 hover:bg-[#54ACBF] hover:text-[#011C40]">
                        GitHub <IconBrandGithub size={16} />
                      </a>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-[#54ACBF] px-3 py-1 text-sm text-[#A7EBF2]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-2 px-4 py-16 text-center sm:px-6 lg:px-8 bg-[#26658C]">
          <h2 className="rounded-full border border-[#A7EBF2] px-4 py-2 sm:text-3xl text-2xl font-semibold text-[#A7EBF2] animate-fade-in-down">Get In Touch</h2>
          <h1 className="p-2 text-3xl font-bold bg-linear-90 from-[#47b7fd] to-[#b5def8] bg-clip-text text-transparent sm:text-4xl lg:text-5xl animate-fade-in-left-delay">Let's Work Together</h1>
          <p className="mx-auto max-w-2xl text-base text-[#A7EBF2] sm:text-xl animate-fade-in-right-delay">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!.
          </p>
          <p className="mt-6 text-xl font-semibold text-[#47b7fd] sm:text-2xl animate-fade-in-up">Contact Information</p>
          <a href="mailto:surajitmondal2130@gmail.com" className="mt-2 flex items-center gap-2 rounded-lg border-2 p-4 text-[#A7EBF2] transition-all duration-300 hover:scale-105 hover:text-[#ffffff] flex-row sm:gap-4 animate-fade-in-up"><IconMail size={24} /> <span className="font-semibold">surajitmondal2130@gmail.com</span> <IconArrowUpRight size={24}/></a>
          <p className="mt-6 text-xl font-semibold text-[#47b7fd] sm:text-2xl animate-fade-in-up-delay">Follow me</p>
          <div className="flex space-x-4 animate-fade-in-up-delay">
            <a href="https://www.linkedin.com/in/surajit-mondal-a0542b3b1/" target="_blank" rel="noopener noreferrer" className="text-[#A7EBF2] transition-all duration-300 hover:scale-110 hover:text-[#ffffff]">
              <IconBrandLinkedin size={40} />
            </a>
            <a href="https://github.com/Surajit1610" target="_blank" rel="noopener noreferrer" className="text-[#A7EBF2] transition-all duration-300 hover:scale-110 hover:text-[#ffffff]">
              <IconBrandGithub size={40} />
            </a>
            <a href="https://twitter.com/surajitmondal" target="_blank" rel="noopener noreferrer" className="text-[#A7EBF2] transition-all duration-300 hover:scale-110 hover:text-[#ffffff]">
              <IconBrandX size={40} />
            </a>
          </div>
        </div>
      </main>

      <footer className="flex w-full flex-col items-center justify-center bg-[#023859] px-4 py-2 sm:px-6">
        <div className="flex w-full max-w-6xl flex-col items-center justify-around gap-5 px-5 py-5 text-center md:flex-row md:items-start md:text-left md:space-y-0">
          <div>
            <p className="text-xl font-semibold text-[#A7EBF2]">Surajit Mondal</p>
            <p className="mt-2 text-sm text-[#54ACBF]">Building digital experiences that matter. Building digital experiences that make a difference.</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#A7EBF2]">Quick Links</p>
            <div className="mt-2 flex flex-col space-y-2">
              <a href="#hero" className="text-sm text-[#54ACBF]">Home</a>
              <a href="#about" className="text-sm text-[#54ACBF]">About</a>
              <a href="#skills" className="text-sm text-[#54ACBF]">Skills</a>
              <a href="#projects" className="text-sm text-[#54ACBF]">Projects</a>
              <a href="#contact" className="text-sm text-[#54ACBF]">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#A7EBF2]">Connect</p>
            <a href="mailto:surajitmondal2130@gmail.com" className="mt-2 block text-sm text-[#54ACBF] transition-all duration-300 hover:text-[#A7EBF2]">
              surajitmondal2130@gmail.com
            </a>
            <div className="mt-2 flex justify-center gap-4 md:justify-start">
              <a href="https://www.linkedin.com/in/surajit-mondal-a0542b3b1/" target="_blank" rel="noopener noreferrer" className="text-[#54ACBF] transition-all duration-300 hover:scale-110 hover:text-[#A7EBF2]">
                <IconBrandLinkedin size={24} />
              </a>
              <a href="https://github.com/Surajit1610" target="_blank" rel="noopener noreferrer" className="text-[#54ACBF] transition-all duration-300 hover:scale-110 hover:text-[#A7EBF2]">
                <IconBrandGithub size={24} />
              </a>
              <a href="https://x.com/Surajit910" target="_blank" rel="noopener noreferrer" className="text-[#54ACBF] transition-all duration-300 hover:scale-110 hover:text-[#A7EBF2]">
                <IconBrandX size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-around gap-2 border-t border-[#54ACBF] py-4 text-center sm:flex-row">
          <p className="text-sm text-[#54ACBF]">&copy; {new Date().getFullYear()} Surajit Mondal.</p>
          <p className="text-sm text-[#54ACBF]">Made with ❤️ by Surajit Mondal</p>
        </div>
      </footer>
    </div>
  );
}
