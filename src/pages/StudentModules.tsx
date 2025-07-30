import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Search, Play, Circle, AlertCircle } from "lucide-react";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const StudentModules = () => {
  const { studentType } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get(`modules?student_type=${studentType}`);
        setModules(data);
      } catch (err) {
        setError("Failed to fetch modules. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (studentType) {
      fetchModules();
    }
  }, [studentType]);

  const studentTypeNames = {
    medical: "Medical Student",
    nursing: "Nursing Student",
    pharmacy: "Pharmacy Student",
    masters: "Masters Student",
  };

  const filteredModules = modules.filter(
    (module) =>
      module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (module.description && module.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderSkeletons = () => (
    Array.from({ length: 3 }).map((_, i) => (
      <Card key={i}>
        <CardHeader>
          <Skeleton className="h-8 w-8 mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    ))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="relative py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              📚 {studentTypeNames[studentType as keyof typeof studentTypeNames] || "Student"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Modules</h1>
            <p className="text-xl text-blue-100 mb-8">
              Select a module to start your learning journey with comprehensive topics and resources.
            </p>
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
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderSkeletons()}
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredModules.map((module) => (
                <Card key={module.id} className="medical-card group cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{module.image || "📚"}</div>
                      <Badge variant="outline">{module.topics_count || 0} topics</Badge>
                    </div>
                    <CardTitle className="text-xl">{module.name}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration || "N/A"}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            module.difficulty === "Beginner"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : module.difficulty === "Intermediate"
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {module.difficulty || "N/A"}
                        </Badge>
                      </div>

                      {module.progress > 0 ? (
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
                          </div>
                          <Progress value={module.progress} className="h-2" />
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentModules;