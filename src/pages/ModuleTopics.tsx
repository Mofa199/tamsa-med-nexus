import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Video, Brain, Clock, Search, CheckCircle, Circle, Play, AlertCircle } from "lucide-react";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ModuleTopics = () => {
  const { studentType, moduleId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [module, setModule] = useState(null);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [moduleData, topicsData] = await Promise.all([
          apiClient.get(`modules/${moduleId}`),
          apiClient.get(`topics?module_id=${moduleId}`),
        ]);
        setModule(moduleData);
        setTopics(topicsData);
      } catch (err) {
        setError("Failed to fetch module data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (moduleId) {
      fetchData();
    }
  }, [moduleId]);

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (topic.description && topic.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getResourceIcon = (resource: string) => {
    switch (resource.toLowerCase()) {
      case "article": return <FileText className="w-4 h-4" />;
      case "videos": return <Video className="w-4 h-4" />;
      case "flashcards": return <Brain className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const renderSkeletons = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="relative py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <>
                <Skeleton className="h-6 w-1/4 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-full mb-6" />
              </>
            ) : module ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Link to={`/student/${studentType}`} className="text-blue-200 hover:text-white text-sm">
                    Back to Modules
                  </Link>
                  <span className="text-blue-200">/</span>
                  <Badge className="bg-white/10 text-white border-white/20">
                    📖 {module.name}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{module.name}</h1>
                <p className="text-xl text-blue-100 mb-6">{module.description}</p>
                {/* Progress bar can be added here if progress data is available */}
              </>
            ) : null}
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
          {loading ? (
            renderSkeletons()
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
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
                              topic.difficulty === "Beginner"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : topic.difficulty === "Intermediate"
                                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                : "bg-red-50 text-red-700 border-red-200"
                            }`}
                          >
                            {topic.difficulty || "N/A"}
                          </Badge>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {topic.duration || "N/A"}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                        <p className="text-muted-foreground mb-4">{topic.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(topic.resources || Object.keys(topic).filter(k => ['flashcards', 'videos', 'mnemonics'].includes(k))).map((resource) => (
                            <Badge key={resource} variant="outline" className="text-xs flex items-center gap-1">
                              {getResourceIcon(resource)}
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Link to={`/student/${studentType}/${moduleId}/${topic.id}`}>
                          <Button className={topic.completed ? "bg-green-500 hover:bg-green-600" : ""}>
                            {topic.completed ? "Review" : "Start"}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModuleTopics;