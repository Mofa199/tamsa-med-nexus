import { useState } from "react";
import { Search, ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const stats = [
    { icon: BookOpen, label: "Digital Resources", value: "5,000+" },
    { icon: Users, label: "Active Students", value: "12,000+" },
    { icon: Award, label: "Medical Journals", value: "500+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" }
  ];

  const quickSearchSuggestions = [
    "Anatomy", "Pharmacology", "Pathology", "Surgery", "Medicine", "Nursing"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              🎓 Welcome to the Future of Medical Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Digital
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Medical Library
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering medical students, doctors, researchers, and educators with comprehensive 
              digital resources, interactive learning tools, and AI-powered search capabilities.
            </p>
          </div>

          {/* Advanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="glass-card p-2 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <Search className="w-6 h-6 text-white/70 ml-4" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for medical resources, topics, or specialties..."
                    className="flex-1 bg-transparent border-none text-white placeholder-white/70 text-lg focus:ring-0"
                  />
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick search suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-white/70 text-sm">Quick search:</span>
              {quickSearchSuggestions.map((suggestion) => (
                <Badge
                  key={suggestion}
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 cursor-pointer transition-all"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hero-button group">
              Explore Library
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card p-6 rounded-xl text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-white/90" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};