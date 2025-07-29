import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Clock, Search, Play, CheckCircle, Circle } from "lucide-react";

const StudentModules = () => {
  const { studentType } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const modulesByType = {
    medical: [
      {
        id: "anatomy",
        title: "Human Anatomy",
        description: "Complete study of human body systems and structures",
        topics: 24,
        duration: "12 weeks",
        difficulty: "Beginner",
        progress: 75,
        completedTopics: 18,
        image: "🫀"
      },
      {
        id: "physiology",
        title: "Human Physiology",
        description: "Understanding body functions and processes",
        topics: 20,
        duration: "10 weeks",
        difficulty: "Intermediate",
        progress: 45,
        completedTopics: 9,
        image: "🧬"
      },
      {
        id: "pathology",
        title: "General Pathology",
        description: "Disease mechanisms and cellular changes",
        topics: 18,
        duration: "8 weeks",
        difficulty: "Advanced",
        progress: 30,
        completedTopics: 5,
        image: "🔬"
      },
      {
        id: "pharmacology",
        title: "Medical Pharmacology",
        description: "Drug actions, interactions, and therapeutic uses",
        topics: 26,
        duration: "14 weeks",
        difficulty: "Advanced",
        progress: 0,
        completedTopics: 0,
        image: "💊"
      }
    ],
    nursing: [
      {
        id: "fundamentals",
        title: "Nursing Fundamentals",
        description: "Basic nursing skills and patient care principles",
        topics: 16,
        duration: "8 weeks",
        difficulty: "Beginner",
        progress: 60,
        completedTopics: 10,
        image: "👩‍⚕️"
      },
      {
        id: "medical-surgical",
        title: "Medical-Surgical Nursing",
        description: "Care of adult patients with medical and surgical conditions",
        topics: 22,
        duration: "12 weeks",
        difficulty: "Intermediate",
        progress: 25,
        completedTopics: 5,
        image: "🏥"
      }
    ],
    pharmacy: [
      {
        id: "pharmaceutics",
        title: "Pharmaceutics",
        description: "Drug formulation and delivery systems",
        topics: 20,
        duration: "10 weeks",
        difficulty: "Intermediate",
        progress: 40,
        completedTopics: 8,
        image: "💊"
      },
      {
        id: "pharmacotherapy",
        title: "Pharmacotherapy",
        description: "Drug therapy for specific diseases and conditions",
        topics: 24,
        duration: "12 weeks",
        difficulty: "Advanced",
        progress: 15,
        completedTopics: 4,
        image: "💉"
      }
    ],
    masters: [
      {
        id: "research-methods",
        title: "Research Methodology",
        description: "Advanced research design and statistical analysis",
        topics: 14,
        duration: "10 weeks",
        difficulty: "Advanced",
        progress: 80,
        completedTopics: 11,
        image: "📊"
      }
    ]
  };

  const modules = modulesByType[studentType as keyof typeof modulesByType] || [];
  const studentTypeNames = {
    medical: "Medical Student",
    nursing: "Nursing Student", 
    pharmacy: "Pharmacy Student",
    masters: "Masters Student"
  };

  const filteredModules = modules.filter(module =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="relative py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              📚 {studentTypeNames[studentType as keyof typeof studentTypeNames]}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learning Modules
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Select a module to start your learning journey with comprehensive topics and resources.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules..."
                className="pl-10 bg-white/10 border-white/30 text-white placeholder-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module) => (
              <Card key={module.id} className="medical-card group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{module.image}</div>
                    <Badge variant="outline">{module.topics} topics</Badge>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          module.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                          module.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-red-50 text-red-700 border-red-200'
                        }`}
                      >
                        {module.difficulty}
                      </Badge>
                    </div>
                    
                    {module.progress > 0 ? (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>{module.completedTopics} of {module.topics} topics completed</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <Circle className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Not started</p>
                      </div>
                    )}
                    
                    <Link to={`/student/${studentType}/${module.id}`} className="block">
                      <Button className="w-full">
                        {module.progress > 0 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Start Module
                          </>
                        )}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentModules;