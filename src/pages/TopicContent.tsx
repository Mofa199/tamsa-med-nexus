import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Brain, Download, BookOpen, ExternalLink, Play, CheckCircle, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TopicContent = () => {
  const { studentType, moduleId, topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchTopic = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get(`topics/${topicId}`);
        setTopic(data);
      } catch (err) {
        setError("Failed to fetch topic content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (topicId) {
      fetchTopic();
    }
  }, [topicId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-12 w-2/3 mb-4" />
          <Skeleton className="h-8 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Alert variant="destructive" className="w-1/2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

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

  // The 'content' from db.json is the article.
  const articleContent = Array.isArray(topic.content) ? topic.content.map(c => `## ${c.instrument}\n**Definition:** ${c.definition}\n**Uses:** ${c.uses}`).join('\n\n') : topic.content;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to={`/student/${studentType}`} className="hover:text-primary">Modules</Link>
            <span>/</span>
            <Link to={`/student/${studentType}/${moduleId}`} className="hover:text-primary">{moduleId}</Link>
            <span>/</span>
            <span className="text-foreground">{topic.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{topic.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{topic.description}</p>
            <div className="flex items-center gap-4">
              <Button><CheckCircle className="w-4 h-4 mr-2" /> Mark Complete</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="article" className="space-y-8">
              <TabsList className="grid grid-cols-5 w-full">
                <TabsTrigger value="article">Article</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="references">References</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>

              <TabsContent value="article">
                <Card>
                  <CardHeader><CardTitle>Learning Article</CardTitle></CardHeader>
                  <CardContent className="prose prose-lg max-w-none whitespace-pre-line">
                    {articleContent}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="videos">
                {topic.videos && topic.videos.map((video, index) => (
                  <Card key={index} className="mb-4">
                    <CardContent className="p-6 flex items-center justify-between">
                      <p>{video}</p>
                      <Button asChild><a href={video} target="_blank" rel="noopener noreferrer">Watch</a></Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="flashcards">
                {topic.flashcards && topic.flashcards.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Flashcards</CardTitle>
                      <CardDescription>{currentFlashcard + 1} of {topic.flashcards.length}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="min-h-[200px] flex items-center justify-center text-center text-xl mb-6">
                        {showAnswer ? topic.flashcards[currentFlashcard].answer : topic.flashcards[currentFlashcard].question}
                      </div>
                      <div className="flex justify-between">
                        <Button onClick={prevFlashcard}><ArrowLeft className="w-4 h-4 mr-2" /> Prev</Button>
                        <Button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Show Question' : 'Show Answer'}</Button>
                        <Button onClick={nextFlashcard}>Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="references">
                {topic.references && topic.references.map((ref, index) => (
                  <Card key={index} className="mb-4">
                    <CardContent className="p-6 flex items-center justify-between">
                      <p>{ref}</p>
                      <Button asChild variant="outline"><a href="#" target="_blank" rel="noopener noreferrer">View</a></Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="downloads">
                <Card>
                  <CardHeader><CardTitle>Downloads</CardTitle></CardHeader>
                  <CardContent>
                    <p>No downloads available for this topic yet.</p>
                  </CardContent>
                </Card>
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