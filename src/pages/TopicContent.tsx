import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Brain, Download, BookOpen, ExternalLink, Play, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const TopicContent = () => {
  const { studentType, moduleId, topicId } = useParams();
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const topicData = {
    "cardiovascular-system": {
      title: "Cardiovascular System",
      description: "Heart anatomy, blood vessels, and circulation",
      duration: "2 hours",
      difficulty: "Beginner",
      article: {
        content: `
# Cardiovascular System Overview

The cardiovascular system consists of the heart, blood vessels, and blood. This system is responsible for circulating blood throughout the body to deliver oxygen and nutrients to tissues.

## Heart Anatomy

The heart is a four-chambered muscular organ:
- **Right Atrium**: Receives deoxygenated blood from the body
- **Right Ventricle**: Pumps blood to the lungs
- **Left Atrium**: Receives oxygenated blood from the lungs  
- **Left Ventricle**: Pumps blood to the body

## Blood Vessels

### Arteries
- Carry blood away from the heart
- Have thick, muscular walls
- Carry oxygenated blood (except pulmonary artery)

### Veins
- Carry blood toward the heart
- Have thinner walls with valves
- Carry deoxygenated blood (except pulmonary veins)

### Capillaries
- Smallest blood vessels
- Site of gas and nutrient exchange
- Connect arteries and veins

## Cardiac Cycle

The cardiac cycle consists of two main phases:
1. **Systole**: Contraction phase - ventricles pump blood
2. **Diastole**: Relaxation phase - ventricles fill with blood

## Clinical Relevance

Understanding cardiovascular anatomy is essential for:
- Interpreting ECGs
- Understanding heart diseases
- Performing physical examinations
- Understanding drug actions
        `,
        readingTime: "15 min"
      },
      videos: [
        {
          title: "Heart Anatomy 3D Animation",
          duration: "12:34",
          thumbnail: "🫀",
          url: "#"
        },
        {
          title: "Blood Circulation Pathway",
          duration: "8:45", 
          thumbnail: "🔄",
          url: "#"
        }
      ],
      flashcards: [
        {
          question: "What are the four chambers of the heart?",
          answer: "Right atrium, right ventricle, left atrium, left ventricle"
        },
        {
          question: "Which chamber pumps blood to the lungs?", 
          answer: "Right ventricle"
        },
        {
          question: "What is the difference between systole and diastole?",
          answer: "Systole is the contraction phase when ventricles pump blood. Diastole is the relaxation phase when ventricles fill with blood."
        }
      ],
      references: [
        {
          title: "Gray's Anatomy - Chapter 3: Cardiovascular System",
          authors: "Standring, S.",
          year: "2020",
          type: "Textbook",
          url: "#"
        },
        {
          title: "Cardiovascular Physiology Concepts",
          authors: "Klabunde, R.",
          year: "2021", 
          type: "Reference",
          url: "#"
        }
      ],
      pdfs: [
        {
          title: "Cardiovascular System Study Guide",
          size: "2.4 MB",
          pages: 24,
          url: "#"
        },
        {
          title: "Heart Anatomy Diagrams",
          size: "1.8 MB", 
          pages: 12,
          url: "#"
        }
      ]
    }
  };

  const topic = topicData[topicId as keyof typeof topicData];

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const nextFlashcard = () => {
    setShowAnswer(false);
    setCurrentFlashcard((prev) => (prev + 1) % topic.flashcards.length);
  };

  const prevFlashcard = () => {
    setShowAnswer(false);
    setCurrentFlashcard((prev) => (prev - 1 + topic.flashcards.length) % topic.flashcards.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to={`/student/${studentType}`} className="hover:text-primary">
              Modules
            </Link>
            <span>/</span>
            <Link to={`/student/${studentType}/${moduleId}`} className="hover:text-primary">
              {moduleId}
            </Link>
            <span>/</span>
            <span className="text-foreground">{topic.title}</span>
          </div>
        </div>
      </section>

      {/* Topic Header */}
      <section className="py-12 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/10 text-white border-white/20">
                📖 Learning Topic
              </Badge>
              <Badge 
                variant="outline"
                className={`${
                  topic.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                  topic.difficulty === 'Intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                  'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                {topic.difficulty}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {topic.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              {topic.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-blue-200">⏱️ {topic.duration}</span>
              <Button className="bg-white/10 hover:bg-white/20 border-white/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark Complete
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="article" className="space-y-8">
              <TabsList className="grid grid-cols-5 w-full">
                <TabsTrigger value="article" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Article
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="flashcards" className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Flashcards
                </TabsTrigger>
                <TabsTrigger value="references" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  References
                </TabsTrigger>
                <TabsTrigger value="downloads" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Downloads
                </TabsTrigger>
              </TabsList>

              {/* Article Tab */}
              <TabsContent value="article">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Learning Article
                    </CardTitle>
                    <CardDescription>
                      Estimated reading time: {topic.article.readingTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-line">
                      {topic.article.content}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="space-y-6">
                  {topic.videos.map((video, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{video.thumbnail}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                            <p className="text-muted-foreground">Duration: {video.duration}</p>
                          </div>
                          <Button>
                            <Play className="w-4 h-4 mr-2" />
                            Watch
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Flashcards Tab */}
              <TabsContent value="flashcards">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        Flashcards
                      </span>
                      <Badge variant="outline">
                        {currentFlashcard + 1} of {topic.flashcards.length}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="min-h-[200px] flex items-center justify-center mb-6">
                      <div className="text-center">
                        <div className="text-lg font-medium mb-4">
                          {showAnswer ? "Answer:" : "Question:"}
                        </div>
                        <div className="text-xl">
                          {showAnswer 
                            ? topic.flashcards[currentFlashcard].answer
                            : topic.flashcards[currentFlashcard].question
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline" 
                        onClick={prevFlashcard}
                        disabled={topic.flashcards.length <= 1}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button 
                        onClick={() => setShowAnswer(!showAnswer)}
                        variant={showAnswer ? "secondary" : "default"}
                      >
                        {showAnswer ? "Show Question" : "Show Answer"}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={nextFlashcard}
                        disabled={topic.flashcards.length <= 1}
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* References Tab */}
              <TabsContent value="references">
                <div className="space-y-4">
                  {topic.references.map((ref, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{ref.title}</h3>
                            <p className="text-muted-foreground mb-2">
                              {ref.authors} ({ref.year})
                            </p>
                            <Badge variant="outline">{ref.type}</Badge>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Downloads Tab */}
              <TabsContent value="downloads">
                <div className="space-y-4">
                  {topic.pdfs.map((pdf, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-2xl">📄</div>
                            <div>
                              <h3 className="font-semibold">{pdf.title}</h3>
                              <p className="text-muted-foreground text-sm">
                                {pdf.size} • {pdf.pages} pages
                              </p>
                            </div>
                          </div>
                          <Button>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopicContent;