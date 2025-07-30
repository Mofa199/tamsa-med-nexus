import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Pill, AlertTriangle, Clock, Calculator } from "lucide-react";

const DrugDetails = () => {
  const { drugId } = useParams();

  const drugData = {
    amoxicillin: {
      name: "Amoxicillin",
      genericName: "Amoxicillin trihydrate",
      brand: "Augmentin, Trimox",
      category: "Antibiotics",
      icon: "💊",
      classification: "Beta-lactam antibiotic (Penicillin)",
      mechanism: "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins",
      indications: [
        "Respiratory tract infections",
        "Urinary tract infections", 
        "Skin and soft tissue infections",
        "Otitis media",
        "Sinusitis"
      ],
      contraindications: [
        "Penicillin allergy",
        "Severe kidney disease",
        "Mononucleosis"
      ],
      dosing: {
        adult: "250-500mg every 8 hours or 500-875mg every 12 hours",
        pediatric: "20-40mg/kg/day divided every 8 hours",
        renal: "Adjust dose based on creatinine clearance"
      },
      sideEffects: {
        common: ["Nausea", "Diarrhea", "Vomiting", "Abdominal pain"],
        serious: ["C. diff colitis", "Severe allergic reactions", "Stevens-Johnson syndrome"]
      },
      interactions: [
        "Warfarin - increased bleeding risk",
        "Methotrexate - increased toxicity",
        "Oral contraceptives - decreased effectiveness"
      ],
      monitoring: [
        "Signs of allergic reaction",
        "GI symptoms",
        "Complete blood count with prolonged use"
      ],
      pregnancy: "Category B - Generally safe",
      halfLife: "1-1.5 hours"
    }
  };

  const drug = drugData[drugId as keyof typeof drugData];

  if (!drug) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Drug not found</h1>
            <Link to="/pharmacology">
              <Button>Back to Pharmacology</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
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

      {/* Drug Header */}
      <section className="py-12 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{drug.icon}</div>
              <div>
                <Badge className="mb-2 bg-white/10 text-white border-white/20">
                  {drug.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold">{drug.name}</h1>
                <p className="text-xl text-blue-100">{drug.genericName}</p>
                <p className="text-blue-200">Brand: {drug.brand}</p>
              </div>
            </div>
            <p className="text-xl text-blue-100">{drug.classification}</p>
          </div>
        </div>
      </section>

      {/* Drug Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid grid-cols-6 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="dosing">Dosing</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="interactions">Interactions</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mechanism of Action</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{drug.mechanism}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pharmacokinetics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Half-life:</span>
                          <span className="font-semibold">{drug.halfLife}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pregnancy Category:</span>
                          <span className="font-semibold">{drug.pregnancy}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Indications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {drug.indications.map((indication, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{indication}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Dosing */}
              <TabsContent value="dosing" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Pill className="w-5 h-5" />
                        Adult Dosing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{drug.dosing.adult}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        👶 Pediatric Dosing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{drug.dosing.pediatric}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        🫘 Renal Adjustment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{drug.dosing.renal}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Safety */}
              <TabsContent value="safety" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Contraindications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {drug.contraindications.map((contraindication, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>{contraindication}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Side Effects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Common:</h4>
                          <ul className="space-y-1">
                            {drug.sideEffects.common.map((effect, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span>{effect}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Serious:</h4>
                          <ul className="space-y-1">
                            {drug.sideEffects.serious.map((effect, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span>{effect}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Interactions */}
              <TabsContent value="interactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Drug Interactions</CardTitle>
                    <CardDescription>
                      Important drug interactions to monitor
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {drug.interactions.map((interaction, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <p>{interaction}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Monitoring */}
              <TabsContent value="monitoring">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Monitoring Parameters
                    </CardTitle>
                    <CardDescription>
                      What to monitor during therapy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {drug.monitoring.map((parameter, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{parameter}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Calculator */}
              <TabsContent value="calculator">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Dose Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate pediatric doses based on weight
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Drug-specific calculator coming soon
                      </p>
                      <Link to="/calculators">
                        <Button>
                          <Calculator className="w-4 h-4 mr-2" />
                          Go to Medical Calculators
                        </Button>
                      </Link>
                    </div>
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

export default DrugDetails;