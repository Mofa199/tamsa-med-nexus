import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: [
        "University of Ibadan",
        "Medical Library Building",
        "Ibadan, Oyo State, Nigeria"
      ],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+234 (0) 123 456 7890",
        "+234 (0) 123 456 7891",
        "Mon-Fri: 8:00 AM - 6:00 PM"
      ],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "library@tamsa.org",
        "support@tamsa.org",
        "admin@tamsa.org"
      ],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed"
      ],
      action: "View Schedule"
    }
  ];

  const departments = [
    {
      name: "Technical Support",
      description: "Platform issues, login problems, download assistance",
      email: "support@tamsa.org",
      response: "Within 2 hours"
    },
    {
      name: "Academic Resources",
      description: "Content questions, resource requests, curriculum support",
      email: "academic@tamsa.org",
      response: "Within 4 hours"
    },
    {
      name: "Partnerships",
      description: "Institutional partnerships, collaborations, licensing",
      email: "partnerships@tamsa.org",
      response: "Within 24 hours"
    },
    {
      name: "General Inquiries",
      description: "General questions, feedback, suggestions",
      email: "info@tamsa.org",
      response: "Within 24 hours"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
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
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                TAMSA Library
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our platform? Need technical support? 
              Want to suggest new resources? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="medical-card text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="academic">Academic Resources</SelectItem>
                        <SelectItem value="partnership">Partnerships</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Departments */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Departments</h2>
                <p className="text-muted-foreground mb-6">
                  Reach out to the right department for faster assistance
                </p>
              </div>

              <div className="space-y-4">
                {departments.map((dept) => (
                  <Card key={dept.name} className="medical-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{dept.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {dept.response}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {dept.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">
                          {dept.email}
                        </span>
                        <Button size="sm" variant="outline">
                          <Mail className="w-3 h-3 mr-2" />
                          Email
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us on Campus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our physical library location at the University of Ibadan campus
            </p>
          </div>

          <Card className="medical-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Campus Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Medical Library Building</p>
                        <p className="text-sm text-muted-foreground">
                          University of Ibadan<br />
                          Ibadan, Oyo State<br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Coordinates</p>
                        <p className="text-sm text-muted-foreground">
                          7.4472° N, 3.9058° E
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map will be embedded here
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;