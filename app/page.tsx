"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  ExternalLink,
  ArrowRight,
  Code2,
  Briefcase,
  GraduationCap,
  Star,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:gezahegngulilat1@gmail.com?subject=${subject}&body=${body}`;
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Flutter", level: 75 },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/files/Gezahegn-Gulilat-Resume.pdf";
    link.download = "Gezahegn-Gulilat-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Artistic Logo Component
  const ArtisticLogo = ({ size = "w-10 h-10" }: { size?: string }) => (
    <div className={`${size} relative flex items-center justify-center`}>
      {/* Background geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 rounded-2xl transform rotate-12 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl transform -rotate-12 opacity-60"></div>

      {/* Main logo container */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl w-full h-full flex items-center justify-center shadow-lg">
        {/* Letter G with artistic styling */}
        <div className="relative">
          <span className="text-white font-bold text-lg tracking-tight">G</span>
          {/* Small accent dot */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute -top-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
      <div
        className="absolute -bottom-1 -right-1 w-1 h-1 bg-purple-400 rounded-full opacity-70 animate-pulse"
        style={{ animationDelay: "0.5s" }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm transition-all ${
          isScrolled ? "py-2" : "py-4"
        }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ArtisticLogo size="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-black text-2xl sm:text-3xl tracking-tighter leading-none drop-shadow-sm">
                Gezahegn
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-sm sm:text-base relative group tracking-wide">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg py-2">
                  {item}
                </button>
              ))}
              <Button
                size="lg"
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}>
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Text Content - Now always comes first in DOM order */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-cyan-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                    <Star className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wide">
                      SOFTWARE ENGINEER
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                      Gezahegn
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    I love writing clean, reliable code and turning ideas into
                    apps that solve real problems and make life a little easier.
                    I'm always excited to learn, grow, and create things that
                    matter.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r cursor-pointer from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8"
                    onClick={() => scrollToSection("contact")}>
                    Let's Talk
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="cursor-pointer border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 px-6 sm:px-8 bg-transparent"
                    onClick={downloadResume}>
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-6 pt-2 sm:pt-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Projects
                    </div>
                  </div>
                  <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Satisfaction
                    </div>
                  </div>
                  <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Image - Now comes after text in DOM but will position right on desktop */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Fancy border elements */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-l-4 border-t-4 border-indigo-500 rounded-tl-2xl lg:rounded-tl-3xl"></div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-r-4 border-b-4 border-cyan-500 rounded-br-2xl lg:rounded-br-3xl"></div>

                  {/* Decorative corner curves */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tl from-cyan-400 to-blue-400 rounded-full opacity-80"></div>

                  <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-4 border-white relative">
                    <Image
                      src="/profile-professional.jpg"
                      alt="Gezahegn Gulilat"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                About Me
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate software engineer with a love for creating impactful
                solutions
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I'm a Software Engineering graduate from{" "}
                  <span className="font-semibold text-indigo-600">
                    Adama Science and Technology University
                  </span>
                  . I specialize in full-stack development with a passion for
                  creating scalable web applications and mobile solutions.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  My experience spans across backend development, API design,
                  and collaborative team environments. I love solving complex
                  problems through clean, efficient code.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Education
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Software Engineering
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Focus</div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Full-Stack Development
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Tech Stack
                </h3>
                <div className="relative">
                  {/* Floating skill bubbles */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {[
                      {
                        name: "React",
                        color: "bg-blue-500",
                        textColor: "text-white",
                      },
                      {
                        name: "Laravel",
                        color: "bg-red-500",
                        textColor: "text-white",
                      },
                      {
                        name: "Python",
                        color: "bg-green-500",
                        textColor: "text-white",
                      },
                      {
                        name: "TypeScript",
                        color: "bg-blue-600",
                        textColor: "text-white",
                      },
                      {
                        name: "Node.js",
                        color: "bg-green-600",
                        textColor: "text-white",
                      },
                      {
                        name: "Flutter",
                        color: "bg-sky-500",
                        textColor: "text-white",
                      },
                      {
                        name: "MySQL",
                        color: "bg-orange-500",
                        textColor: "text-white",
                      },
                      {
                        name: "Firebase",
                        color: "bg-yellow-500",
                        textColor: "text-white",
                      },
                      {
                        name: "Git",
                        color: "bg-gray-700",
                        textColor: "text-white",
                      },
                      {
                        name: "Docker",
                        color: "bg-blue-400",
                        textColor: "text-white",
                      },
                      {
                        name: "AWS",
                        color: "bg-orange-400",
                        textColor: "text-white",
                      },
                      {
                        name: "REST APIs",
                        color: "bg-purple-500",
                        textColor: "text-white",
                      },
                    ].map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`${skill.color} ${skill.textColor} px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: "fadeInUp 0.6s ease-out forwards",
                        }}>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl border border-indigo-100">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🎨</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Frontend
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      React, TypeScript, Tailwind
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl border border-green-100">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚙️</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Backend
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Laravel, Node.js, Python
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-blue-100">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📱</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Mobile
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Flutter, Firebase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Experience
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Building solutions that matter
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <Card className="border-0 shadow-lg sm:shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Backend Developer
                      </h3>
                      <p className="text-lg text-indigo-600 font-semibold">
                        Omishtu-Joy Tech-Solutions
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <Badge className="bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 border-0 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                        Jun 2024 - Sep 2024
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                    <p>
                      • Developed scalable backend services for e-learning
                      platform with team of 5 developers
                    </p>
                    <p>
                      • Built RESTful APIs for authentication, course
                      management, and progress tracking
                    </p>
                    <p>
                      • Collaborated with frontend and UI/UX teams for seamless
                      user experience
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg sm:shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Backend Developer
                      </h3>
                      <p className="text-lg text-cyan-600 font-semibold">
                        KurazTech
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <Badge className="bg-gradient-to-r from-cyan-100 to-indigo-100 text-cyan-700 border-0 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                        Jun 2023 - Sep 2023
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                    <p>
                      • Built RESTful API for e-commerce platform handling
                      10,000+ daily transactions
                    </p>
                    <p>
                      • Implemented JWT authentication and caching strategies
                      for optimal performance
                    </p>
                    <p>
                      • Enhanced security and scalability of the platform
                      architecture
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Featured Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Showcasing my latest work and innovations
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg sm:shadow-xl bg-gradient-to-br from-indigo-50 to-cyan-50 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Quick-Post
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                        Social media management platform enabling content
                        creators to schedule and publish across multiple
                        platforms with real-time analytics.
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {["Laravel", "React", "Tailwind CSS", "APIs"].map(
                          (tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-white/80 text-indigo-700 border-0 text-xs sm:text-sm">
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg sm:shadow-xl bg-gradient-to-br from-cyan-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Travel Guide
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                        Mobile travel application for exploring destinations
                        with location details, reviews, and personalized
                        recommendations for enhanced trip planning.
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {["Flutter", "Firebase", "Google Maps"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/80 text-cyan-700 border-0 text-xs sm:text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 to-cyan-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Let's Create Something Amazing
              </h2>
              <p className="text-lg sm:text-xl text-indigo-200">
                Ready to bring your ideas to life
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <Link
                    href="mailto:gezahegngulilat1@gmail.com"
                    className="flex items-center space-x-3 sm:space-x-4 text-white hover:text-cyan-300 transition-colors group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Email
                      </div>
                      <div className="text-indigo-200 text-sm sm:text-base">
                        gezahegngulilat1@gmail.com
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="tel:+251985761808"
                    className="flex items-center space-x-3 sm:space-x-4 text-white hover:text-cyan-300 transition-colors group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Phone
                      </div>
                      <div className="text-indigo-200 text-sm sm:text-base">
                        +251985761808
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center space-x-3 sm:space-x-4 text-white">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Location
                      </div>
                      <div className="text-indigo-200 text-sm sm:text-base">
                        Addis Ababa, Ethiopia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Connect With Me
                  </h3>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 bg-transparent w-full sm:w-auto"
                      asChild>
                      <Link
                        href="http://linkedin.com/in/geze296"
                        className="flex items-center space-x-2 justify-center">
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>LinkedIn</span>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 bg-transparent w-full sm:w-auto"
                      asChild>
                      <Link
                        href="https://github.com/Geze296"
                        className="flex items-center space-x-2 justify-center">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Send me a message
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4">
                    <div>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:border-white/40 transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:border-white/40 transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:border-white/40 transition-all resize-none text-sm sm:text-base"></textarea>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="cursor-pointer w-full bg-white text-indigo-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                  onClick={downloadResume}>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2025 Gezahegn Gulilat.
        </p>
      </footer>
    </div>
  );
}
