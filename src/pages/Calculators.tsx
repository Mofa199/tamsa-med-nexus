import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Heart, Droplets, Scale, Zap } from "lucide-react";

const Calculators = () => {
  // BMI Calculator
  const [bmiData, setBmiData] = useState({ weight: "", height: "", result: "" });
  
  // Dosage Calculator
  const [dosageData, setDosageData] = useState({ 
    weight: "", 
    dose: "", 
    concentration: "", 
    result: "" 
  });

  // Creatinine Clearance
  const [creatinineData, setCreatinineData] = useState({
    age: "",
    weight: "",
    creatinine: "",
    gender: "male",
    result: ""
  });

  const calculateBMI = () => {
    const weight = parseFloat(bmiData.weight);
    const height = parseFloat(bmiData.height) / 100; // convert cm to m
    
    if (weight && height) {
      const bmi = weight / (height * height);
      let category = "";
      
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal weight";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      
      setBmiData({
        ...bmiData,
        result: `BMI: ${bmi.toFixed(1)} kg/m² (${category})`
      });
    }
  };

  const calculateDosage = () => {
    const weight = parseFloat(dosageData.weight);
    const dose = parseFloat(dosageData.dose);
    const concentration = parseFloat(dosageData.concentration);
    
    if (weight && dose && concentration) {
      const totalDose = weight * dose;
      const volume = totalDose / concentration;
      
      setDosageData({
        ...dosageData,
        result: `Total dose: ${totalDose}mg | Volume needed: ${volume.toFixed(2)}mL`
      });
    }
  };

  const calculateCreatinine = () => {
    const age = parseFloat(creatinineData.age);
    const weight = parseFloat(creatinineData.weight);
    const creatinine = parseFloat(creatinineData.creatinine);
    
    if (age && weight && creatinine) {
      // Cockcroft-Gault formula
      let clearance = ((140 - age) * weight) / (72 * creatinine);
      if (creatinineData.gender === "female") {
        clearance *= 0.85;
      }
      
      setCreatinineData({
        ...creatinineData,
        result: `Creatinine Clearance: ${clearance.toFixed(1)} mL/min`
      });
    }
  };

  // IV Flow Rate Calculator
  const [ivData, setIvData] = useState({
    volume: "",
    time: "",
    dropFactor: "15",
    result: ""
  });

  // Body Surface Area Calculator
  const [bsaData, setBsaData] = useState({
    height: "",
    weight: "",
    result: ""
  });

  const calculateIVRate = () => {
    const volume = parseFloat(ivData.volume);
    const time = parseFloat(ivData.time);
    const dropFactor = parseFloat(ivData.dropFactor);
    
    if (volume && time && dropFactor) {
      const dropsPerMin = (volume * dropFactor) / (time * 60);
      const mlPerHour = volume / time;
      
      setIvData({
        ...ivData,
        result: `Flow rate: ${dropsPerMin.toFixed(0)} drops/min | ${mlPerHour.toFixed(1)} mL/hr`
      });
    }
  };

  const calculateBSA = () => {
    const height = parseFloat(bsaData.height);
    const weight = parseFloat(bsaData.weight);
    
    if (height && weight) {
      // Mosteller formula
      const bsa = Math.sqrt((height * weight) / 3600);
      
      setBsaData({
        ...bsaData,
        result: `Body Surface Area: ${bsa.toFixed(2)} m²`
      });
    }
  };

  const calculators = [
    {
      id: "bmi",
      title: "BMI Calculator",
      description: "Calculate Body Mass Index",
      icon: "⚖️",
      category: "General"
    },
    {
      id: "dosage",
      title: "Drug Dosage Calculator", 
      description: "Calculate medication dosages based on weight",
      icon: "💊",
      category: "Pharmacy"
    },
    {
      id: "creatinine",
      title: "Creatinine Clearance",
      description: "Estimate kidney function using Cockcroft-Gault",
      icon: "🫘",
      category: "Medical"
    },
    {
      id: "iv-rate",
      title: "IV Flow Rate Calculator",
      description: "Calculate IV drip rates and flow rates",
      icon: "💧",
      category: "Medical"
    },
    {
      id: "bsa",
      title: "Body Surface Area",
      description: "Calculate BSA using Mosteller formula",
      icon: "📏",
      category: "General"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              🧮 Medical Calculators
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clinical
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Calculators
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Essential medical and pharmaceutical calculators for healthcare professionals and students.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bmi" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Available Calculators</h2>
            <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
              {calculators.map((calc) => (
                <TabsTrigger key={calc.id} value={calc.id} className="flex flex-col items-center gap-1 p-3">
                  <span className="text-lg">{calc.icon}</span>
                  <span className="text-xs">{calc.title}</span>
                </TabsTrigger>
              ))}
              </TabsList>
            </div>

            {/* BMI Calculator */}
            <TabsContent value="bmi">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    BMI Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your Body Mass Index to assess weight status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="70"
                        value={bmiData.weight}
                        onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="175"
                        value={bmiData.height}
                        onChange={(e) => setBmiData({...bmiData, height: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button onClick={calculateBMI} className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate BMI
                  </Button>
                  {bmiData.result && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-semibold">{bmiData.result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Dosage Calculator */}
            <TabsContent value="dosage">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-5 h-5" />
                    Drug Dosage Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate medication dosages based on patient weight
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientWeight">Patient Weight (kg)</Label>
                    <Input
                      id="patientWeight"
                      type="number"
                      placeholder="70"
                      value={dosageData.weight}
                      onChange={(e) => setDosageData({...dosageData, weight: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dosePerKg">Dose per kg (mg/kg)</Label>
                    <Input
                      id="dosePerKg"
                      type="number"
                      placeholder="10"
                      value={dosageData.dose}
                      onChange={(e) => setDosageData({...dosageData, dose: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="concentration">Drug Concentration (mg/mL)</Label>
                    <Input
                      id="concentration"
                      type="number"
                      placeholder="50"
                      value={dosageData.concentration}
                      onChange={(e) => setDosageData({...dosageData, concentration: e.target.value})}
                    />
                  </div>
                  <Button onClick={calculateDosage} className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Dosage
                  </Button>
                  {dosageData.result && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-semibold">{dosageData.result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Creatinine Clearance */}
            <TabsContent value="creatinine">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Creatinine Clearance Calculator
                  </CardTitle>
                  <CardDescription>
                    Estimate kidney function using the Cockcroft-Gault equation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age (years)</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="65"
                        value={creatinineData.age}
                        onChange={(e) => setCreatinineData({...creatinineData, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientWeight2">Weight (kg)</Label>
                      <Input
                        id="patientWeight2"
                        type="number"
                        placeholder="70"
                        value={creatinineData.weight}
                        onChange={(e) => setCreatinineData({...creatinineData, weight: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creatinine">Serum Creatinine (mg/dL)</Label>
                    <Input
                      id="creatinine"
                      type="number"
                      step="0.1"
                      placeholder="1.2"
                      value={creatinineData.creatinine}
                      onChange={(e) => setCreatinineData({...creatinineData, creatinine: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex gap-4">
                      <Button
                        variant={creatinineData.gender === "male" ? "default" : "outline"}
                        onClick={() => setCreatinineData({...creatinineData, gender: "male"})}
                      >
                        Male
                      </Button>
                      <Button
                        variant={creatinineData.gender === "female" ? "default" : "outline"}
                        onClick={() => setCreatinineData({...creatinineData, gender: "female"})}
                      >
                        Female
                      </Button>
                    </div>
                  </div>
                  <Button onClick={calculateCreatinine} className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Clearance
                  </Button>
                  {creatinineData.result && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-semibold">{creatinineData.result}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Normal range: 90-120 mL/min for healthy adults
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* IV Flow Rate Calculator */}
            <TabsContent value="iv-rate">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-5 h-5" />
                    IV Flow Rate Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate IV drip rates and infusion rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="volume">Total Volume (mL)</Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="1000"
                      value={ivData.volume}
                      onChange={(e) => setIvData({...ivData, volume: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Infusion Time (hours)</Label>
                    <Input
                      id="time"
                      type="number"
                      placeholder="8"
                      value={ivData.time}
                      onChange={(e) => setIvData({...ivData, time: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropFactor">Drop Factor (drops/mL)</Label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={ivData.dropFactor}
                      onChange={(e) => setIvData({...ivData, dropFactor: e.target.value})}
                    >
                      <option value="10">10 drops/mL (Macrodrip)</option>
                      <option value="15">15 drops/mL (Macrodrip)</option>
                      <option value="20">20 drops/mL (Macrodrip)</option>
                      <option value="60">60 drops/mL (Microdrip)</option>
                    </select>
                  </div>
                  <Button onClick={calculateIVRate} className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate IV Rate
                  </Button>
                  {ivData.result && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-semibold">{ivData.result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* BSA Calculator */}
            <TabsContent value="bsa">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Body Surface Area Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate BSA using the Mosteller formula
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bsa-height">Height (cm)</Label>
                      <Input
                        id="bsa-height"
                        type="number"
                        placeholder="175"
                        value={bsaData.height}
                        onChange={(e) => setBsaData({...bsaData, height: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bsa-weight">Weight (kg)</Label>
                      <Input
                        id="bsa-weight"
                        type="number"
                        placeholder="70"
                        value={bsaData.weight}
                        onChange={(e) => setBsaData({...bsaData, weight: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button onClick={calculateBSA} className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate BSA
                  </Button>
                  {bsaData.result && (
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="font-semibold">{bsaData.result}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Normal adult BSA: 1.5-2.0 m²
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculators;