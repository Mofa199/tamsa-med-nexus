import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Heart, Droplets, Scale, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Calculators = () => {
  // BMI Calculator
  const [bmiData, setBmiData] = useState({ weight: "", height: "", result: "", error: "" });
  
  // Dosage Calculator
  const [dosageData, setDosageData] = useState({ weight: "", dose: "", concentration: "", result: "", error: "" });

  // Creatinine Clearance
  const [creatinineData, setCreatinineData] = useState({ age: "", weight: "", creatinine: "", gender: "male", result: "", error: "" });

  // IV Flow Rate Calculator
  const [ivData, setIvData] = useState({ volume: "", time: "", dropFactor: "15", result: "", error: "" });

  // Body Surface Area Calculator
  const [bsaData, setBsaData] = useState({ height: "", weight: "", result: "", error: "" });

  const validateAndParse = (...values) => {
    const parsedValues = values.map(v => parseFloat(v));
    if (parsedValues.some(isNaN)) {
      return null;
    }
    return parsedValues;
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    const values = validateAndParse(bmiData.weight, bmiData.height);
    if (!values) {
      setBmiData({ ...bmiData, error: "Please enter valid numbers for all fields." });
      return;
    }
    const [weight, heightCm] = values;
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    setBmiData({ ...bmiData, result: `BMI: ${bmi.toFixed(1)} kg/m² (${category})`, error: "" });
  };

  const calculateDosage = (e) => {
    e.preventDefault();
    const values = validateAndParse(dosageData.weight, dosageData.dose, dosageData.concentration);
    if (!values) {
      setDosageData({ ...dosageData, error: "Please enter valid numbers for all fields." });
      return;
    }
    const [weight, dose, concentration] = values;
    const totalDose = weight * dose;
    const volume = totalDose / concentration;
    setDosageData({ ...dosageData, result: `Total dose: ${totalDose.toFixed(2)}mg | Volume needed: ${volume.toFixed(2)}mL`, error: "" });
  };

  const calculateCreatinine = (e) => {
    e.preventDefault();
    const values = validateAndParse(creatinineData.age, creatinineData.weight, creatinineData.creatinine);
    if (!values) {
      setCreatinineData({ ...creatinineData, error: "Please enter valid numbers for all fields." });
      return;
    }
    const [age, weight, creatinine] = values;
    let clearance = ((140 - age) * weight) / (72 * creatinine);
    if (creatinineData.gender === "female") {
      clearance *= 0.85;
    }
    setCreatinineData({ ...creatinineData, result: `Creatinine Clearance: ${clearance.toFixed(1)} mL/min`, error: "" });
  };

  const calculateIVRate = (e) => {
    e.preventDefault();
    const values = validateAndParse(ivData.volume, ivData.time, ivData.dropFactor);
    if (!values) {
      setIvData({ ...ivData, error: "Please enter valid numbers for all fields." });
      return;
    }
    const [volume, time, dropFactor] = values;
    const dropsPerMin = (volume * dropFactor) / (time * 60);
    const mlPerHour = volume / time;
    setIvData({ ...ivData, result: `Flow rate: ${dropsPerMin.toFixed(0)} drops/min | ${mlPerHour.toFixed(1)} mL/hr`, error: "" });
  };

  const calculateBSA = (e) => {
    e.preventDefault();
    const values = validateAndParse(bsaData.height, bsaData.weight);
    if (!values) {
      setBsaData({ ...bsaData, error: "Please enter valid numbers for all fields." });
      return;
    }
    const [height, weight] = values;
    const bsa = Math.sqrt((height * weight) / 3600);
    setBsaData({ ...bsaData, result: `Body Surface Area: ${bsa.toFixed(2)} m²`, error: "" });
  };

  const calculators = [
    { id: "bmi", title: "BMI Calculator", icon: "⚖️" },
    { id: "dosage", title: "Drug Dosage", icon: "💊" },
    { id: "creatinine", title: "Creatinine Clearance", icon: "🫘" },
    { id: "iv-rate", title: "IV Flow Rate", icon: "💧" },
    { id: "bsa", title: "Body Surface Area", icon: "📏" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">🧮 Medical Calculators</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Clinical Calculators</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Essential medical and pharmaceutical calculators for healthcare professionals and students.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bmi" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Available Calculators</h2>
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full max-w-4xl mx-auto">
                {calculators.map((calc) => (
                  <TabsTrigger key={calc.id} value={calc.id} className="flex flex-col items-center gap-1 p-3">
                    <span className="text-lg">{calc.icon}</span>
                    <span className="text-xs text-center">{calc.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="bmi">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Scale className="w-5 h-5" />BMI Calculator</CardTitle>
                  <CardDescription>Calculate your Body Mass Index to assess weight status.</CardDescription>
                </CardHeader>
                <CardContent as="form" onSubmit={calculateBMI} className="space-y-4">
                  {bmiData.error && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{bmiData.error}</AlertDescription></Alert>}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" placeholder="70" value={bmiData.weight} onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value, result: "", error: "" })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" placeholder="175" value={bmiData.height} onChange={(e) => setBmiData({ ...bmiData, height: e.target.value, result: "", error: "" })} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full"><Calculator className="w-4 h-4 mr-2" />Calculate BMI</Button>
                  {bmiData.result && <div className="p-4 bg-secondary rounded-lg"><p className="font-semibold">{bmiData.result}</p></div>}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dosage">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Droplets className="w-5 h-5" />Drug Dosage Calculator</CardTitle>
                  <CardDescription>Calculate medication dosages based on patient weight.</CardDescription>
                </CardHeader>
                <CardContent as="form" onSubmit={calculateDosage} className="space-y-4">
                  {dosageData.error && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{dosageData.error}</AlertDescription></Alert>}
                  <div className="space-y-2">
                    <Label htmlFor="patientWeight">Patient Weight (kg)</Label>
                    <Input id="patientWeight" type="number" placeholder="70" value={dosageData.weight} onChange={(e) => setDosageData({ ...dosageData, weight: e.target.value, result: "", error: "" })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dosePerKg">Dose per kg (mg/kg)</Label>
                    <Input id="dosePerKg" type="number" placeholder="10" value={dosageData.dose} onChange={(e) => setDosageData({ ...dosageData, dose: e.target.value, result: "", error: "" })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="concentration">Drug Concentration (mg/mL)</Label>
                    <Input id="concentration" type="number" placeholder="50" value={dosageData.concentration} onChange={(e) => setDosageData({ ...dosageData, concentration: e.target.value, result: "", error: "" })} />
                  </div>
                  <Button type="submit" className="w-full"><Calculator className="w-4 h-4 mr-2" />Calculate Dosage</Button>
                  {dosageData.result && <div className="p-4 bg-secondary rounded-lg"><p className="font-semibold">{dosageData.result}</p></div>}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="creatinine">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Heart className="w-5 h-5" />Creatinine Clearance Calculator</CardTitle>
                  <CardDescription>Estimate kidney function using the Cockcroft-Gault equation.</CardDescription>
                </CardHeader>
                <CardContent as="form" onSubmit={calculateCreatinine} className="space-y-4">
                  {creatinineData.error && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{creatinineData.error}</AlertDescription></Alert>}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age (years)</Label>
                      <Input id="age" type="number" placeholder="65" value={creatinineData.age} onChange={(e) => setCreatinineData({ ...creatinineData, age: e.target.value, result: "", error: "" })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientWeight2">Weight (kg)</Label>
                      <Input id="patientWeight2" type="number" placeholder="70" value={creatinineData.weight} onChange={(e) => setCreatinineData({ ...creatinineData, weight: e.target.value, result: "", error: "" })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creatinine">Serum Creatinine (mg/dL)</Label>
                    <Input id="creatinine" type="number" step="0.1" placeholder="1.2" value={creatinineData.creatinine} onChange={(e) => setCreatinineData({ ...creatinineData, creatinine: e.target.value, result: "", error: "" })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex gap-4">
                      <Button type="button" variant={creatinineData.gender === 'male' ? 'default' : 'outline'} onClick={() => setCreatinineData({ ...creatinineData, gender: 'male' })}>Male</Button>
                      <Button type="button" variant={creatinineData.gender === 'female' ? 'default' : 'outline'} onClick={() => setCreatinineData({ ...creatinineData, gender: 'female' })}>Female</Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full"><Calculator className="w-4 h-4 mr-2" />Calculate Clearance</Button>
                  {creatinineData.result && <div className="p-4 bg-secondary rounded-lg"><p className="font-semibold">{creatinineData.result}</p><p className="text-sm text-muted-foreground mt-1">Normal range: 90-120 mL/min for healthy adults</p></div>}
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