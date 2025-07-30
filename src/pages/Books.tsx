import { useState } from "react";
import { Search, Download, Star, BookOpen, FileText, Calendar, Eye, Filter, Grid, List } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("recent");

  const books = [
    {
      title: "Gray's Anatomy for Students",
      authors: ["Richard Drake", "Wayne Vogl", "Adam Mitchell"],
      edition: "4th Edition",
      year: 2023,
      category: "Anatomy",
      pages: 1168,
      rating: 4.8,
      downloads: "25.3k",
      format: ["PDF", "EPUB"],
      size: "156 MB",
      description: "Comprehensive anatomy textbook with clinical correlations and imaging.",
      isbn: "978-0323793934",
      cover: "📘"
    },
    {
      title: "Robbins Basic Pathology",
      authors: ["Vinay Kumar", "Abul Abbas", "Jon Aster"],
      edition: "10th Edition", 
      year: 2022,
      category: "Pathology",
      pages: 928,
      rating: 4.9,
      downloads: "18.7k",
      format: ["PDF"],
      size: "142 MB",
      description: "Essential pathology text covering disease mechanisms and clinical manifestations.",
      isbn: "978-0323790888",
      cover: "📗"
    },
    {
      title: "Katzung's Basic & Clinical Pharmacology",
      authors: ["Bertram Katzung", "Anthony Trevor"],
      edition: "15th Edition",
      year: 2023,
      category: "Pharmacology",
      pages: 1312,
      rating: 4.7,
      downloads: "22.1k",
      format: ["PDF", "EPUB"],
      size: "189 MB",
      description: "Comprehensive pharmacology textbook with clinical applications.",
      isbn: "978-1260463225",
      cover: "📙"
    },
    {
      title: "Harrison's Principles of Internal Medicine",
      authors: ["Dennis Kasper", "Anthony Fauci", "Stephen Hauser"],
      edition: "21st Edition",
      year: 2022,
      category: "Internal Medicine",
      pages: 4688,
      rating: 4.9,
      downloads: "31.5k",
      format: ["PDF"],
      size: "425 MB",
      description: "The definitive guide to internal medicine and clinical practice.",
      isbn: "978-1264268504",
      cover: "📕"
    },
    {
      title: "Netter's Atlas of Human Anatomy",
      authors: ["Frank H. Netter"],
      edition: "8th Edition",
      year: 2023,
      category: "Anatomy",
      pages: 672,
      rating: 4.8,
      downloads: "29.2k",
      format: ["PDF", "Interactive"],
      size: "298 MB",
      description: "Beautiful anatomical illustrations with clinical correlations.",
      isbn: "978-0323797535",
      cover: "🎨"
    }
  ];

  const journals = [
    {
      title: "New England Journal of Medicine",
      issn: "0028-4793",
      impact: 176.079,
      frequency: "Weekly",
      articles: 145,
      category: "General Medicine",
      access: "Free Access",
      recent: "Latest Issue: December 2024"
    },
    {
      title: "The Lancet",
      issn: "0140-6736",
      impact: 168.052,
      frequency: "Weekly", 
      articles: 132,
      category: "General Medicine",
      access: "Free Access",
      recent: "Latest Issue: December 2024"
    },
    {
      title: "Nature Medicine",
      issn: "1078-8956",
      impact: 87.241,
      frequency: "Monthly",
      articles: 89,
      category: "Biomedical Research",
      access: "Open Access",
      recent: "Latest Issue: December 2024"
    },
    {
      title: "JAMA",
      issn: "0098-7484",
      impact: 157.335,
      frequency: "Weekly",
      articles: 156,
      category: "General Medicine", 
      access: "Free Access",
      recent: "Latest Issue: December 2024"
    }
  ];

  const magazines = [
    {
      title: "Medical Student Magazine",
      type: "Student Publication",
      frequency: "Monthly",
      latest: "December 2024 - Exam Strategies",
      description: "Tips, study guides, and career advice for medical students",
      downloads: "8.2k"
    },
    {
      title: "Clinical Practice Today",
      type: "Professional Magazine",
      frequency: "Bi-weekly",
      latest: "December 2024 - AI in Medicine",
      description: "Latest developments in clinical practice and patient care",
      downloads: "12.5k"
    },
    {
      title: "Pharmacy Weekly",
      type: "Specialty Publication",
      frequency: "Weekly",
      latest: "December 2024 - Drug Safety",
      description: "Pharmaceutical news, drug updates, and clinical guidelines",
      downloads: "5.7k"
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              📚 Digital Library Collection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Books, Journals
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                & Publications
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Access thousands of medical textbooks, peer-reviewed journals, 
              magazines, and educational publications with instant download capabilities.
            </p>
            
            {/* Search and filters */}
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-4 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books, authors, journals..."
                      className="pl-10 bg-transparent border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 bg-transparent border-white/30 text-white">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Downloaded</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="title">Title A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="books" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="books">Medical Textbooks</TabsTrigger>
              <TabsTrigger value="journals">Journals & Research</TabsTrigger>
              <TabsTrigger value="magazines">Magazines & News</TabsTrigger>
            </TabsList>

            {/* Medical Textbooks */}
            <TabsContent value="books" className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Medical Textbooks</h2>
                  <p className="text-muted-foreground">
                    {filteredBooks.length} books available for download
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
              }>
                {filteredBooks.map((book) => (
                  <Card key={book.isbn} className={`medical-card ${viewMode === "list" ? "flex-row" : ""}`}>
                    {viewMode === "grid" ? (
                      <>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{book.cover}</div>
                            <Badge variant="secondary">{book.category}</Badge>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                          <CardDescription>
                            <div className="space-y-1">
                              <p className="text-sm">{book.authors.join(", ")}</p>
                              <p className="text-xs text-muted-foreground">
                                {book.edition} • {book.year} • {book.pages} pages
                              </p>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {book.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{book.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-4 h-4" />
                                <span>{book.downloads}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {book.format.map((format) => (
                                <Badge key={format} variant="outline" className="text-xs">
                                  {format}
                                </Badge>
                              ))}
                              <Badge variant="outline" className="text-xs">
                                {book.size}
                              </Badge>
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1" onClick={() => {
                                // Simulate download
                                alert(`Downloading ${book.title}...`);
                              }}>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" size="icon" onClick={() => {
                                // Simulate preview
                                alert(`Opening preview for ${book.title}...`);
                              }}>
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      <CardContent className="flex items-center gap-6 p-6">
                        <div className="text-4xl">{book.cover}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold">{book.title}</h3>
                            <Badge variant="secondary">{book.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {book.authors.join(", ")}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">
                            {book.edition} • {book.year} • {book.pages} pages • {book.size}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {book.description}
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{book.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Download className="w-4 h-4" />
                              <span>{book.downloads}</span>
                            </div>
                            <div className="flex gap-1">
                              {book.format.map((format) => (
                                <Badge key={format} variant="outline" className="text-xs">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button onClick={() => {
                            alert(`Downloading ${book.title}...`);
                          }}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" onClick={() => {
                            alert(`Opening preview for ${book.title}...`);
                          }}>
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Journals */}
            <TabsContent value="journals" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Medical Journals</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Access peer-reviewed medical journals and latest research publications
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {journals.map((journal) => (
                  <Card key={journal.issn} className="medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                        <div className="text-right">
                          <Badge variant="secondary">{journal.access}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Impact: {journal.impact}
                          </p>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{journal.title}</CardTitle>
                      <CardDescription>
                        <div className="space-y-1">
                          <p>ISSN: {journal.issn}</p>
                          <p>{journal.category} • {journal.frequency}</p>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span>Available Articles:</span>
                          <span className="font-semibold">{journal.articles}</span>
                        </div>
                        
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">{journal.recent}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Browse Issues
                          </Button>
                          <Button variant="outline">
                            <Calendar className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Magazines */}
            <TabsContent value="magazines" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Magazines & Publications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with medical news, student resources, and professional publications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {magazines.map((magazine) => (
                  <Card key={magazine.title} className="medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                        <Badge variant="secondary">{magazine.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{magazine.title}</CardTitle>
                      <CardDescription>
                        {magazine.frequency} • {magazine.downloads} downloads
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {magazine.description}
                        </p>
                        
                        <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                          <p className="text-sm font-medium">Latest Issue</p>
                          <p className="text-sm text-muted-foreground">{magazine.latest}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download Latest
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;