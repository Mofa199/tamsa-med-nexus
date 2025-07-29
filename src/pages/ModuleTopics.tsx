import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Video, Brain, Download, Clock, Search, CheckCircle, Circle, Play } from "lucide-react";

const ModuleTopics = () => {
  const { studentType, moduleId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const topicsByModule = {
    anatomy: [
      {
        id: "cardiovascular-system",
        title: "Cardiovascular System",
        description: "Heart anatomy, blood vessels, and circulation",
        duration: "2 hours",
        difficulty: "Beginner",
        completed: true,
        resources: ["Article", "Videos", "Flashcards", "Quiz"]
      },
      {
        id: "respiratory-system", 
        title: "Respiratory System",
        description: "Lungs, airways, and gas exchange mechanisms",
        duration: "1.5 hours",
        difficulty: "Beginner",
        completed: true,
        resources: ["Article", "Videos", "3D Models"]
      },
      {
        id: "nervous-system",
        title: "Nervous System",
        description: "Brain, spinal cord, and peripheral nerves",
        duration: "3 hours",
        difficulty: "Intermediate",
        completed: false,
        resources: ["Article", "Videos", "Flashcards", "Quiz", "References"]
      }
    ],
    physiology: [
      {
        id: "cardiac-physiology",
        title: "Cardiac Physiology",
        description: "Heart function, cardiac cycle, and ECG interpretation",
        duration: "2.5 hours",
        difficulty: "Intermediate",
        completed: false,
        resources: ["Article", "Videos", "Calculations", "Quiz"]
      }
    ]
  };

  const moduleInfo = {
    anatomy: {
      title: "Human Anatomy",
      description: "Complete study of human body systems and structures",
      totalTopics: 24,
      completedTopics: 18
    },
    physiology: {
      title: "Human Physiology", 
      description: "Understanding body functions and processes",
      totalTopics: 20,
      completedTopics: 9
    }
  };

  const topics = topicsByModule[moduleId as keyof typeof topicsByModule] || [];
  const module = moduleInfo[moduleId as keyof typeof moduleInfo];
  
  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResourceIcon = (resource: string) => {
    switch (resource) {
      case "Article": return <FileText className="w-4 h-4" />;
      case "Videos": return <Video className="w-4 h-4" />;
      case "Flashcards": return <Brain className="w-4 h-4" />;
      case "Quiz": return <CheckCircle className="w-4 h-4" />;
      case "References": return <BookOpen className="w-4 h-4" />;
      case "3D Models": return <Play className="w-4 h-4" />;
      case "Calculations": return <Download className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="relative py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link to={`/student/${studentType}`} className="text-blue-200 hover:text-white text-sm">
                Back to Modules
              </Link>
              <span className="text-blue-200">/</span>
              <Badge className="bg-white/10 text-white border-white/20">
                📖 {module?.title}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {module?.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              {module?.description}
            </p>
            
            {module && (
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <Progress value={(module.completedTopics / module.totalTopics) * 100} className="w-32 h-2" />
                  <p className="text-sm text-blue-200 mt-1">
                    {module.completedTopics} of {module.totalTopics} topics completed
                  </p>
                </div>
              </div>
            )}
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="pl-10 bg-white/10 border-white/30 text-white placeholder-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredTopics.map((topic, index) => (
              <Card key={topic.id} className="medical-card group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      {topic.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Topic {index + 1}
                        </Badge>
                        <Badge 
                          variant="outline"
                          className={`text-xs ${
                            topic.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                            topic.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          {topic.difficulty}
                        </Badge>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {topic.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {topic.resources.map((resource) => (
                          <Badge key={resource} variant="outline" className="text-xs flex items-center gap-1">
                            {getResourceIcon(resource)}
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Link to={`/student/${studentType}/${moduleId}/${topic.id}`}>
                        <Button 
                          className={topic.completed ? "bg-green-500 hover:bg-green-600" : ""}
                        >
                          {topic.completed ? "Review" : "Start"}
                        </Button>
                      </Link>
                    </div>
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

export default ModuleTopics;