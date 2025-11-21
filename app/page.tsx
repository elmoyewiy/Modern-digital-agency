"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Sparkles, Menu, X, TrendingUp, Eye } from "lucide-react";

export default function AgencyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            INFINITE
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#community"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Community
            </a>
            <a
              href="#portfolio"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Portfolio
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-white text-black hover:bg-gray-100">
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a
                href="#home"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#features"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#community"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Community
              </a>
              <a
                href="#portfolio"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Portfolio
              </a>
              <Button className="bg-white text-black hover:bg-gray-100 w-full">
                Get in touch
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-950/60 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent"></div>

        {/* Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Client Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-black">
                <AvatarFallback className="bg-purple-600 text-white text-xs">
                  A
                </AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-black">
                <AvatarFallback className="bg-pink-600 text-white text-xs">
                  B
                </AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-black">
                <AvatarFallback className="bg-indigo-600 text-white text-xs">
                  C
                </AvatarFallback>
              </Avatar>
            </div>
            <span className="text-sm font-medium">15k+ Satisfied Clients</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-none">
            <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              POWER OF
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              INFINITE DESIGN
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences that push boundaries and redefine
            what&apos;s possible. Modern, impactful design that resonates with
            your audience.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              className="group text-white border border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Explore Our Work
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-purple-500/30 rounded-full hidden lg:block"></div>
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-pink-400 rounded-full hidden lg:block"></div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-purple-400" size={24} />
                <h2 className="text-5xl font-bold">About Us</h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We are a team of passionate designers and developers dedicated
                to creating exceptional digital experiences. With years of
                expertise and a commitment to innovation, we transform ideas
                into stunning realities that captivate and inspire.
              </p>

              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-full px-8"
              >
                Read More
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">90%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-pink-900/30 to-black border-pink-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <Sparkles className="text-pink-400" size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">150+</div>
                    <div className="text-gray-400">Successful Projects</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-900/30 to-black border-indigo-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <Eye className="text-indigo-400" size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">7M+</div>
                    <div className="text-gray-400">Social Media Views</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute right-20 top-1/2 w-32 h-32 border-2 border-purple-500/20 rounded-full hidden xl:block"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            INFINITE
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Infinite Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
