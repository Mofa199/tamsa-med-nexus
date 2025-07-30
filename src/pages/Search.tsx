import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Pill, BookOpen, AlertCircle } from "lucide-react";
import { apiClient } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState({ drugs: [], topics: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const performSearch = async () => {
      const q = searchParams.get("q");
      if (!q) {
        setResults({ drugs: [], topics: [] });
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const [drugData, topicData] = await Promise.all([
          apiClient.get(`drugs?q=${q}`),
          apiClient.get(`topics?q=${q}`),
        ]);
        setResults({ drugs: drugData, topics: topicData });
      } catch (err) {
        setError("Failed to perform search. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Search Results</h1>
            <form onSubmit={handleSearch} className="flex gap-2 mb-12">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for drugs, topics, and more..."
                className="flex-grow"
              />
              <Button type="submit">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>

            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center"><Pill className="w-6 h-6 mr-2" />Drugs ({results.drugs.length})</h2>
                  <div className="space-y-4">
                    {results.drugs.length > 0 ? (
                      results.drugs.map(drug => (
                        <Link to={`/pharmacology/${drug.id}`} key={drug.id}>
                          <Card className="hover:bg-accent">
                            <CardHeader>
                              <CardTitle>{drug.name}</CardTitle>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground">No drugs found matching your query.</p>
                    )}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center"><BookOpen className="w-6 h-6 mr-2" />Topics ({results.topics.length})</h2>
                  <div className="space-y-4">
                    {results.topics.length > 0 ? (
                      results.topics.map(topic => (
                        <Link to={`/student/medical/${topic.module_id}/${topic.id}`} key={topic.id}>
                          <Card className="hover:bg-accent">
                            <CardHeader>
                              <CardTitle>{topic.title}</CardTitle>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground">No topics found matching your query.</p>
                    )}
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchPage;
