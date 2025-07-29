import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Medical Library", href: "/medical" },
    { name: "Nursing Resources", href: "/nursing" },
    { name: "Pharmacy", href: "/pharmacy" },
    { name: "Pharmacology", href: "/pharmacology" },
    { name: "Books & Journals", href: "/books" }
  ];

  const resources = [
    { name: "Study Guides", href: "/study-guides" },
    { name: "Practice Questions", href: "/practice" },
    { name: "Clinical Guidelines", href: "/guidelines" },
    { name: "Drug Database", href: "/drugs" },
    { name: "Medical Calculators", href: "/calculators" },
    { name: "Case Studies", href: "/cases" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "News & Updates", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Feedback", href: "/feedback" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient">TAMSA Library</span>
                <span className="text-sm text-muted-foreground">Smart Digital Medical Library</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering medical education through comprehensive digital resources, 
              interactive learning tools, and AI-powered search capabilities for students, 
              doctors, and healthcare professionals.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>University of Ibadan, Ibadan, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>library@tamsa.org</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+234 (0) 123 456 7890</span>
              </div>
            </div>

            {/* Newsletter signup */}
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get updates on new resources and medical education content
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="space-y-3">
              {resources.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <nav className="space-y-3">
              {support.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            {/* Admin login */}
            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/admin"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Lock className="w-4 h-4" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 TAMSA Library. All rights reserved. | 
            <Link to="/privacy" className="hover:text-foreground ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-foreground ml-1">Terms of Service</Link>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};