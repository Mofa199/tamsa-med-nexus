import { Target, Users, Lightbulb, Award, CheckCircle, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "TAMSA Library was established to digitize medical education resources"
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched online platform with 1,000+ digital resources"
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Introduced AI-powered search and recommendation system"
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Expanded to serve medical institutions across West Africa"
    },
    {
      year: "2023",
      title: "Interactive Learning",
      description: "Added interactive modules, flashcards, and assessment tools"
    },
    {
      year: "2024",
      title: "Smart Library",
      description: "Launched comprehensive smart library with 5,000+ resources"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to providing the highest quality medical education resources and maintaining academic standards."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making medical knowledge accessible to all students regardless of background or location."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to enhance learning experiences and educational outcomes."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Upholding the highest standards of academic integrity and evidence-based medical education."
    }
  ];

  const team = [
    {
      name: "Dr. Adunni Olowolagba",
      role: "Director of Medical Education",
      specialty: "Internal Medicine",
      image: "👩‍⚕️",
      bio: "Leading medical education initiatives with 15+ years of clinical and academic experience."
    },
    {
      name: "Dr. Taiwo Adebayo",
      role: "Head of Digital Resources",
      specialty: "Medical Informatics",
      image: "👨‍⚕️",
      bio: "Pioneering digital transformation in medical education and library sciences."
    },
    {
      name: "Dr. Funmi Olajide",
      role: "Curriculum Development Lead",
      specialty: "Medical Education",
      image: "👩‍🎓",
      bio: "Designing innovative curricula and assessment tools for modern medical education."
    },
    {
      name: "Dr. Olu Fashola",
      role: "Technology Director",
      specialty: "Software Engineering",
      image: "👨‍💻",
      bio: "Building robust platforms that support seamless access to medical knowledge."
    }
  ];

  const achievements = [
    { number: "5,000+", label: "Digital Resources" },
    { number: "12,000+", label: "Active Users" },
    { number: "50+", label: "Partner Institutions" },
    { number: "95%", label: "User Satisfaction" }
  ];

  const features = [
    "Comprehensive medical textbook collection",
    "Peer-reviewed journal access",
    "Interactive learning modules",
    "AI-powered search capabilities",
    "Progress tracking and analytics",
    "Mobile-responsive design",
    "Offline reading capabilities",
    "Regular content updates"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              🏛️ About TAMSA Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Medical
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Education in Africa
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Empowering the next generation of healthcare professionals through 
              innovative digital learning solutions and comprehensive medical resources.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="medical-card h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to high-quality medical education resources across Africa 
                  by providing a comprehensive digital library platform that supports medical students, 
                  healthcare professionals, and educators in their pursuit of excellence. We are 
                  committed to bridging the gap between traditional medical education and modern 
                  learning technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card h-full">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading digital medical library in Africa, fostering a new generation 
                  of competent healthcare professionals who are equipped with the knowledge and skills 
                  needed to address contemporary health challenges. We envision a future where every 
                  medical student has access to world-class educational resources regardless of their 
                  geographic or economic circumstances.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission and shape our approach to medical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="medical-card text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform medical education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start gap-6">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to advancing medical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="medical-card text-center h-full">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <p className="font-medium">{member.role}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.specialty}
                      </Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed for modern medical education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    University of Ibadan<br />
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    library@tamsa.org<br />
                    support@tamsa.org
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +234 (0) 123 456 7890<br />
                    +234 (0) 123 456 7891
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-button">
                Visit Our Campus
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;