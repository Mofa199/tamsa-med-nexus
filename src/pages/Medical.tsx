import { useState } from "react";
import { Search, Filter, BookOpen, GraduationCap, Users, Clock, Star, ChevronRight, Play, Download } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Medical = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = [
    {
      title: "Anatomy & Physiology",
      description: "Human body structure and function",
      modules: 12,
      topics: 156,
      icon: "🫀",
      color: "bg-red-50 text-red-600 border-red-200",
      href: "/medical/anatomy"
    },
    {
      title: "Pathology",
      description: "Disease mechanisms and diagnosis",
      modules: 8,
      topics: 98,
      icon: "🔬",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      href: "/medical/pathology"
    },
    {
      title: "Pharmacology",
      description: "Drug actions and interactions",
      modules: 10,
      topics: 234,
      icon: "💊",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      href: "/medical/pharmacology"
    },
    {
      title: "Clinical Medicine",
      description: "Patient care and diagnosis",
      modules: 15,
      topics: 187,
      icon: "🩺",
      color: "bg-green-50 text-green-600 border-green-200",
      href: "/medical/clinical"
    },
    {
      title: "Surgery",
      description: "Surgical procedures and techniques",
      modules: 9,
      topics: 112,
      icon: "⚕️",
      color: "bg-orange-50 text-orange-600 border-orange-200",
      href: "/medical/surgery"
    },
    {
      title: "Diagnostic Imaging",
      description: "Radiology and medical imaging",
      modules: 6,
      topics: 78,
      icon: "📸",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      href: "/medical/imaging"
    }
  ];

  const recentModules = [
    {
      title: "Cardiovascular System",
      specialty: "Anatomy",
      progress: 75,
      totalTopics: 24,
      completedTopics: 18,
      duration: "6 weeks",
      difficulty: "Intermediate",
      rating: 4.8,
      thumbnail: "🫀"
    },
    {
      title: "Infectious Diseases",
      specialty: "Pathology",
      progress: 45,
      totalTopics: 18,
      completedTopics: 8,
      duration: "4 weeks",
      difficulty: "Advanced",
      rating: 4.9,
      thumbnail: "🦠"
    },
    {
      title: "Neurological Disorders",
      specialty: "Clinical Medicine",
      progress: 30,
      totalTopics: 32,
      completedTopics: 10,
      duration: "8 weeks",
      difficulty: "Advanced",
      rating: 4.7,
      thumbnail: "🧠"
    }
  ];

  const featuredTopics = [
    {
      title: "ECG Interpretation Made Simple",
      module: "Cardiovascular System",
      type: "Interactive Guide",
      duration: "45 min",
      resources: ["Article", "Videos", "Flashcards", "Quiz"],
      difficulty: "Beginner",
      views: "12.5k"
    },
    {
      title: "Antibiotic Resistance Mechanisms",
      module: "Infectious Diseases",
      type: "Research Review",
      duration: "30 min",
      resources: ["Article", "References", "Case Studies"],
      difficulty: "Advanced",
      views: "8.3k"
    },
    {
      title: "Stroke Diagnosis & Management",
      module: "Neurological Disorders",
      type: "Clinical Protocol",
      duration: "60 min",
      resources: ["Guidelines", "Videos", "Calculations"],
      difficulty: "Intermediate",
      views: "15.2k"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              🎓 Medical Education Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Medical Student
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Learning Center
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Comprehensive medical education resources with structured modules, 
              interactive content, and progress tracking for aspiring doctors.
            </p>
            
            {/* Search and filters */}
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-4 rounded-2xl mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search modules, topics, or specialties..."
                      className="pl-10 bg-transparent border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger className="w-48 bg-transparent border-white/30 text-white">
                      <SelectValue placeholder="All Specialties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      <SelectItem value="anatomy">Anatomy</SelectItem>
                      <SelectItem value="pathology">Pathology</SelectItem>
                      <SelectItem value="clinical">Clinical Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specialties" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specialties">Medical Specialties</TabsTrigger>
              <TabsTrigger value="modules">Recent Modules</TabsTrigger>
              <TabsTrigger value="topics">Featured Topics</TabsTrigger>
            </TabsList>

            {/* Specialties Tab */}
            <TabsContent value="specialties" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Medical Specialties</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore comprehensive modules organized by medical specialties
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialties.map((specialty) => (
                  <Card key={specialty.title} className="medical-card group cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`text-3xl p-3 rounded-lg ${specialty.color}`}>
                          {specialty.icon}
                        </div>
                        <Badge variant="outline">{specialty.modules} modules</Badge>
                      </div>
                      <CardTitle className="text-xl">{specialty.title}</CardTitle>
                      <CardDescription>{specialty.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{specialty.topics} topics</span>
                        <span>Updated weekly</span>
                      </div>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                        variant="outline"
                      >
                        Explore Modules
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recent Modules Tab */}
            <TabsContent value="modules" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Continue Learning</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pick up where you left off or start a new module
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentModules.map((module) => (
                  <Card key={module.title} className="medical-card h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{module.thumbnail}</div>
                        <Badge variant="secondary">{module.specialty}</Badge>
                      </div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {module.rating}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${module.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{module.completedTopics} of {module.totalTopics} topics</span>
                          <Badge variant="outline" className="text-xs">{module.difficulty}</Badge>
                        </div>
                        <Button className="w-full">
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Featured Topics Tab */}
            <TabsContent value="topics" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Featured Topics</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Popular and trending medical topics with comprehensive resources
                </p>
              </div>

              <div className="space-y-6">
                {featuredTopics.map((topic, index) => (
                  <Card key={topic.title} className="medical-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline">{topic.module}</Badge>
                            <Badge variant="secondary">{topic.type}</Badge>
                            <Badge className={`text-xs ${
                              topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {topic.difficulty}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {topic.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {topic.views} views
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {topic.resources.map((resource) => (
                              <Badge key={resource} variant="outline" className="text-xs">
                                {resource}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-48">
                          <Button className="w-full">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Start Learning
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Medical;