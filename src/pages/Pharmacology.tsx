import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Pill, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Pharmacology = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrugs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get("drugs");
        setDrugs(data);
      } catch (err) {
        setError("Failed to fetch drugs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchDrugs();
  }, []);

  const filteredDrugs = drugs.filter(
    (drug) =>
      drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSkeletons = () => (
    Array.from({ length: 6 }).map((_, i) => (
      <Card key={i}>
        <CardHeader>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/4" />
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

      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">💊 Pharmacology Hub</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pharmacology
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                & Drug Information
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Comprehensive drug database with mechanisms, interactions, calculations, and clinical applications.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a drug by name or category..."
                    className="pl-10 bg-transparent border-white/30 text-white placeholder-white/70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderSkeletons()}
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrugs.map((drug) => (
                <Card key={drug.id} className="medical-card group cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>{drug.name}</CardTitle>
                    <CardDescription>{drug.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{drug.mechanism}</p>
                    <Link to={`/pharmacology/${drug.id}`} className="block">
                      <Button className="w-full">
                        <Pill className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
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

export default Pharmacology;