import { ArrowRight, BookOpen, FileText, Search, Microscope, Pill, Heart, Brain, Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeaturedCategories = () => {
  const categories = [
    {
      title: "Medical Student Resources",
      description: "Comprehensive study materials for medical students",
      icon: BookOpen,
      color: "medical-blue",
      count: "1,200+ Resources",
      subcategories: ["Anatomy", "Physiology", "Pathology", "Pharmacology"],
      href: "/medical"
    },
    {
      title: "Nursing Education",
      description: "Essential resources for nursing students and professionals",
      icon: Heart,
      color: "medical-green",
      count: "800+ Resources",
      subcategories: ["Fundamentals", "Clinical Skills", "Patient Care", "Ethics"],
      href: "/nursing"
    },
    {
      title: "Pharmacy & Drug Information",
      description: "Complete pharmaceutical knowledge database",
      icon: Pill,
      color: "medical-orange",
      count: "2,000+ Drugs",
      subcategories: ["Drug Interactions", "Dosing", "Mechanisms", "Side Effects"],
      href: "/pharmacy"
    },
    {
      title: "Research & Journals",
      description: "Latest medical research and peer-reviewed articles",
      icon: FileText,
      color: "medical-purple",
      count: "500+ Journals",
      subcategories: ["Clinical Trials", "Case Studies", "Reviews", "Guidelines"],
      href: "/research"
    },
    {
      title: "Diagnostic Tools",
      description: "Interactive diagnostic resources and case studies",
      icon: Microscope,
      color: "medical-blue",
      count: "300+ Cases",
      subcategories: ["Radiology", "Lab Results", "Clinical Signs", "DDx"],
      href: "/diagnostics"
    },
    {
      title: "Specialty Medicine",
      description: "Advanced resources for medical specialties",
      icon: Brain,
      color: "medical-green",
      count: "400+ Topics",
      subcategories: ["Cardiology", "Neurology", "Surgery", "Pediatrics"],
      href: "/specialties"
    }
  ];

  const features = [
    {
      title: "Interactive Courses",
      description: "Structured learning paths with progress tracking",
      icon: Users,
      stats: "50+ Courses"
    },
    {
      title: "Pharmacology Hub",
      description: "Drug calculations, interactions, and mechanisms",
      icon: Pill,
      stats: "2,000+ Drugs"
    },
    {
      title: "Assessment Tools",
      description: "Flashcards, quizzes, and practice exams",
      icon: Search,
      stats: "10,000+ Questions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-light/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">📚 Comprehensive Collection</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-gradient">Medical Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access curated medical resources organized by specialty, level, and learning objectives
          </p>
        </div>

        {/* Main categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="medical-card group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.map((sub) => (
                      <Badge key={sub} variant="outline" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Explore Resources
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-2">{feature.description}</p>
                <Badge variant="outline">{feature.stats}</Badge>
              </div>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto bg-primary/5">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of medical professionals advancing their knowledge with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-button">
                <Download className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
              <Button variant="outline" size="lg">
                Create Free Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};