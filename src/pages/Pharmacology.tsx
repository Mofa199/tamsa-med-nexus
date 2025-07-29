import { useState } from "react";
import { Search, Calculator, Pill, AlertTriangle, Clock, Zap, Target, Activity, Brain } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Pharmacology = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const drugCategories = [
    {
      title: "Cardiovascular Drugs",
      description: "Heart and blood vessel medications",
      icon: "❤️",
      count: "234 drugs",
      color: "bg-red-50 border-red-200 text-red-700",
      subcategories: ["ACE Inhibitors", "Beta Blockers", "Diuretics", "Calcium Channel Blockers"]
    },
    {
      title: "Neurological Drugs",
      description: "Central nervous system medications",
      icon: "🧠",
      count: "189 drugs",
      color: "bg-purple-50 border-purple-200 text-purple-700",
      subcategories: ["Anticonvulsants", "Antidepressants", "Antipsychotics", "Anxiolytics"]
    },
    {
      title: "Antimicrobials",
      description: "Antibiotics and antiviral medications",
      icon: "🦠",
      count: "156 drugs",
      color: "bg-blue-50 border-blue-200 text-blue-700",
      subcategories: ["Antibiotics", "Antivirals", "Antifungals", "Antiparasitics"]
    },
    {
      title: "Endocrine Drugs",
      description: "Hormonal and metabolic medications",
      icon: "⚖️",
      count: "98 drugs",
      color: "bg-green-50 border-green-200 text-green-700",
      subcategories: ["Diabetes", "Thyroid", "Steroids", "Reproductive"]
    },
    {
      title: "Pain Management",
      description: "Analgesics and pain relief medications",
      icon: "💊",
      count: "127 drugs",
      color: "bg-orange-50 border-orange-200 text-orange-700",
      subcategories: ["NSAIDs", "Opioids", "Local Anesthetics", "Muscle Relaxants"]
    },
    {
      title: "Respiratory Drugs",
      description: "Lung and breathing medications",
      icon: "🫁",
      count: "89 drugs",
      color: "bg-indigo-50 border-indigo-200 text-indigo-700",
      subcategories: ["Bronchodilators", "Corticosteroids", "Antihistamines", "Decongestants"]
    }
  ];

  const calculators = [
    {
      title: "Creatinine Clearance",
      description: "Calculate kidney function for drug dosing",
      icon: Calculator,
      category: "Renal Function",
      difficulty: "Intermediate"
    },
    {
      title: "Pediatric Dosing",
      description: "Weight-based medication calculations",
      icon: Target,
      category: "Pediatrics",
      difficulty: "Advanced"
    },
    {
      title: "IV Drip Rate",
      description: "Intravenous infusion calculations",
      icon: Activity,
      category: "IV Therapy",
      difficulty: "Beginner"
    },
    {
      title: "Bioavailability",
      description: "Drug absorption and availability",
      icon: Zap,
      category: "Pharmacokinetics",
      difficulty: "Advanced"
    }
  ];

  const drugInteractions = [
    {
      drug1: "Warfarin",
      drug2: "Aspirin",
      severity: "Major",
      mechanism: "Additive anticoagulant effect",
      outcome: "Increased bleeding risk",
      management: "Monitor INR closely, consider dose reduction"
    },
    {
      drug1: "Digoxin",
      drug2: "Furosemide",
      severity: "Moderate",
      mechanism: "Hypokalemia enhances digoxin toxicity",
      outcome: "Increased risk of arrhythmias",
      management: "Monitor potassium and digoxin levels"
    },
    {
      drug1: "Simvastatin",
      drug2: "Grapefruit Juice",
      severity: "Major",
      mechanism: "CYP3A4 inhibition",
      outcome: "Increased statin levels and myopathy risk",
      management: "Avoid grapefruit or switch statin"
    }
  ];

  const mechanisms = [
    {
      title: "G-Protein Coupled Receptors",
      description: "Most common drug target mechanism",
      drugs: ["Beta blockers", "Antihistamines", "Opioids"],
      pathway: "Second messenger systems",
      examples: "Epinephrine → β-adrenergic receptor → cAMP"
    },
    {
      title: "Ion Channel Modulation",
      description: "Direct effects on cellular ion transport",
      drugs: ["Calcium channel blockers", "Sodium channel blockers"],
      pathway: "Membrane potential changes",
      examples: "Lidocaine blocks voltage-gated Na+ channels"
    },
    {
      title: "Enzyme Inhibition",
      description: "Blocking specific enzymatic reactions",
      drugs: ["ACE inhibitors", "Statins", "Aspirin"],
      pathway: "Competitive or non-competitive inhibition",
      examples: "Aspirin irreversibly inhibits COX enzymes"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Major": return "bg-red-100 text-red-700 border-red-200";
      case "Moderate": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Minor": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              💊 Pharmacology Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pharmacology
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                & Drug Information
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Comprehensive drug database with mechanisms, interactions, calculations, 
              and clinical applications for safe and effective medication use.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search drugs, interactions, or mechanisms..."
                      className="pl-10 bg-transparent border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    <Pill className="w-4 h-4 mr-2" />
                    Search Drugs
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
          <Tabs defaultValue="categories" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="categories">Drug Categories</TabsTrigger>
              <TabsTrigger value="calculators">Calculators</TabsTrigger>
              <TabsTrigger value="interactions">Interactions</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
            </TabsList>

            {/* Drug Categories */}
            <TabsContent value="categories" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Drug Categories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore medications organized by therapeutic classification
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drugCategories.map((category) => (
                  <Card key={category.title} className="medical-card group cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`text-3xl p-3 rounded-lg ${category.color}`}>
                          {category.icon}
                        </div>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        {category.subcategories.map((sub) => (
                          <Badge key={sub} variant="outline" className="mr-2 mb-1 text-xs">
                            {sub}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                        variant="outline"
                      >
                        Explore Drugs
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Calculators */}
            <TabsContent value="calculators" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Pharmacology Calculators</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Essential calculation tools for safe medication dosing and administration
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {calculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Card key={calc.title} className="medical-card group cursor-pointer h-full">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{calc.title}</CardTitle>
                        <CardDescription>{calc.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <Badge variant="secondary" className="w-full justify-center">
                            {calc.category}
                          </Badge>
                          <Badge 
                            className={`w-full justify-center text-xs ${
                              calc.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              calc.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}
                          >
                            {calc.difficulty}
                          </Badge>
                          <Button className="w-full">
                            Open Calculator
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick calculation examples */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Reference Formulas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="medical-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Pediatric Dosing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Weight-based:</strong> Dose (mg) = Weight (kg) × mg/kg dose</p>
                        <p><strong>BSA-based:</strong> Dose = BSA (m²) × mg/m² dose</p>
                        <p><strong>Clark's Rule:</strong> Child dose = (Weight in kg ÷ 70) × Adult dose</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="medical-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        IV Calculations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Flow rate:</strong> mL/hr = Total volume ÷ Time (hrs)</p>
                        <p><strong>Drops/min:</strong> (mL/hr × Drop factor) ÷ 60</p>
                        <p><strong>Concentration:</strong> mg/mL = Total mg ÷ Total mL</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Drug Interactions */}
            <TabsContent value="interactions" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Drug Interactions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Critical drug interactions with clinical significance and management strategies
                </p>
              </div>

              <div className="space-y-6">
                {drugInteractions.map((interaction, index) => (
                  <Card key={index} className="medical-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="font-semibold">
                                {interaction.drug1}
                              </Badge>
                              <span className="text-muted-foreground">+</span>
                              <Badge variant="outline" className="font-semibold">
                                {interaction.drug2}
                              </Badge>
                            </div>
                            <Badge className={getSeverityColor(interaction.severity)}>
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              {interaction.severity}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-semibold mb-2">Mechanism</h4>
                              <p className="text-muted-foreground">{interaction.mechanism}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Clinical Outcome</h4>
                              <p className="text-muted-foreground">{interaction.outcome}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">Management</h4>
                            <p className="text-sm text-muted-foreground">{interaction.management}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Mechanisms */}
            <TabsContent value="mechanisms" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Drug Mechanisms</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding how medications work at the molecular and cellular level
                </p>
              </div>

              <div className="space-y-6">
                {mechanisms.map((mechanism, index) => (
                  <Card key={index} className="medical-card">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <Brain className="w-6 h-6 text-primary" />
                        {mechanism.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {mechanism.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Example Drugs</h4>
                          <div className="space-y-2">
                            {mechanism.drugs.map((drug) => (
                              <Badge key={drug} variant="outline" className="block w-fit">
                                {drug}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Pathway</h4>
                          <p className="text-sm text-muted-foreground">{mechanism.pathway}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Example</h4>
                          <p className="text-sm text-muted-foreground font-mono bg-muted/50 p-3 rounded">
                            {mechanism.examples}
                          </p>
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

export default Pharmacology;