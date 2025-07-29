import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, Clock, Award, ChevronRight, GraduationCap } from "lucide-react";

const StudentPortal = () => {
  const navigate = useNavigate();

  const studentTypes = [
    {
      id: "medical",
      title: "Medical Students",
      description: "Comprehensive medical curriculum with anatomy, physiology, pathology, and clinical skills",
      modules: 24,
      students: "2,847",
      icon: "🩺",
      color: "bg-red-50 text-red-600 border-red-200",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: "nursing",
      title: "Nursing Students",
      description: "Patient care, nursing theory, clinical procedures, and healthcare management",
      modules: 18,
      students: "1,923",
      icon: "👩‍⚕️",
      color: "bg-green-50 text-green-600 border-green-200",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "pharmacy",
      title: "Pharmacy Students",
      description: "Pharmacology, drug interactions, pharmaceutical care, and clinical pharmacy",
      modules: 16,
      students: "1,456",
      icon: "💊",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "masters",
      title: "Masters Students",
      description: "Advanced research, specialized topics, and graduate-level medical studies",
      modules: 12,
      students: "892",
      icon: "🎓",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const userProgress = {
    medical: 68,
    nursing: 0,
    pharmacy: 0,
    masters: 0
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              🎯 Choose Your Learning Path
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student Learning
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Portal
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Select your program to access tailored curriculum, modules, and learning resources
              designed specifically for your field of study.
            </p>
          </div>
        </div>
      </section>

      {/* Student Types Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Program</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access specialized learning modules designed for your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentTypes.map((type) => (
              <Card key={type.id} className="medical-card group cursor-pointer h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-4xl p-4 rounded-xl ${type.color}`}>
                      {type.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{type.modules} modules</Badge>
                      {userProgress[type.id as keyof typeof userProgress] > 0 && (
                        <div className="flex items-center gap-2">
                          <Progress value={userProgress[type.id as keyof typeof userProgress]} className="w-16" />
                          <span className="text-sm text-muted-foreground">
                            {userProgress[type.id as keyof typeof userProgress]}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {type.students} students
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {type.modules} modules
                    </span>
                  </div>
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    variant="outline"
                    onClick={() => navigate(`/student/${type.id}`)}
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

export default StudentPortal;