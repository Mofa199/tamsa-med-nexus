import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Pill, AlertTriangle, Clock, Calculator, AlertCircle } from "lucide-react";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DrugDetails = () => {
  const { drugId } = useParams();
  const [drug, setDrug] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrug = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get(`drugs/${drugId}`);
        setDrug(data);
      } catch (err) {
        setError("Failed to fetch drug details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (drugId) {
      fetchDrug();
    }
  }, [drugId]);

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

  if (!drug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Drug not found</h1>
          <Link to="/pharmacology">
            <Button>Back to Pharmacology</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/pharmacology" className="text-muted-foreground hover:text-primary flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Pharmacology
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{drug.name}</span>
          </div>
        </div>
      </section>

      <section className="py-12 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">💊</div>
              <div>
                <Badge className="mb-2 bg-white/10 text-white border-white/20">{drug.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold">{drug.name}</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100">{drug.mechanism}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Category:</strong> {drug.category}</p>
                <p><strong>Indications:</strong> {drug.indications}</p>
                <p><strong>Contraindications:</strong> {drug.contraindications}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrugDetails;