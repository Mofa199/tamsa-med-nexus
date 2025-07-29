import { useState } from "react";
import { Search, Plus, Minus, HelpCircle, BookOpen, Download, User, CreditCard, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      description: "Basic information about TAMSA Library",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      id: "resources",
      title: "Resources & Content",
      icon: BookOpen,
      description: "Questions about our medical resources",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      id: "access",
      title: "Access & Downloads",
      icon: Download,
      description: "How to access and download materials",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      id: "account",
      title: "Account & Profile",
      icon: User,
      description: "User accounts and profile management",
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: Settings,
      description: "Platform issues and troubleshooting",
      color: "bg-red-50 text-red-600 border-red-200"
    }
  ];

  const faqs = {
    general: [
      {
        question: "What is TAMSA Library?",
        answer: "TAMSA Library is a comprehensive digital medical library platform designed for medical students, healthcare professionals, and educators. We provide access to thousands of medical textbooks, journals, interactive learning modules, and educational resources to support medical education across Africa."
      },
      {
        question: "Who can use TAMSA Library?",
        answer: "Our platform is designed for medical students, nursing students, pharmacy students, practicing physicians, nurses, pharmacists, medical educators, and researchers. Both individuals and institutions can access our resources."
      },
      {
        question: "Is TAMSA Library free to use?",
        answer: "We offer both free and premium access tiers. Basic access to selected resources is free for all users. Premium subscriptions provide unlimited access to our complete library, advanced features, and priority support."
      },
      {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button in the top navigation menu. You'll need to provide your email address, create a password, and verify your educational status. Medical students can often access institutional subscriptions through their universities."
      },
      {
        question: "What languages are supported?",
        answer: "Currently, our platform supports English and French. We're actively working on adding more languages to serve the diverse African medical education community."
      }
    ],
    resources: [
      {
        question: "How many medical resources are available?",
        answer: "Our library contains over 5,000 digital resources including medical textbooks, peer-reviewed journals, interactive modules, clinical guidelines, case studies, and educational videos covering all major medical specialties."
      },
      {
        question: "How often is content updated?",
        answer: "We continuously update our content. New journal articles are added weekly, textbooks are updated with each new edition, and we regularly review and refresh all resources to ensure they reflect current medical knowledge and best practices."
      },
      {
        question: "Can I suggest new resources?",
        answer: "Absolutely! We welcome suggestions from our community. You can submit resource requests through our contact form or email academic@tamsa.org. We evaluate all suggestions based on educational value and relevance to our users."
      },
      {
        question: "Are the resources peer-reviewed?",
        answer: "Yes, all medical content in our library undergoes rigorous review by medical professionals and academics. We only include resources from reputable publishers, peer-reviewed journals, and recognized medical authorities."
      },
      {
        question: "How do I find specific topics?",
        answer: "Use our AI-powered search feature to find resources by topic, author, specialty, or keyword. You can also browse by medical specialty, resource type, or difficulty level using our advanced filtering options."
      }
    ],
    access: [
      {
        question: "How do I download resources?",
        answer: "Once logged in, navigate to any resource and click the 'Download' button. Most resources are available in PDF format, and some include EPUB or interactive formats. Downloads are unlimited for premium subscribers."
      },
      {
        question: "Can I access resources offline?",
        answer: "Yes! Downloaded resources can be accessed offline using any PDF reader or our mobile app. This is particularly useful for students in areas with limited internet connectivity."
      },
      {
        question: "What file formats are supported?",
        answer: "We primarily offer resources in PDF format for maximum compatibility. Some resources are also available in EPUB format for e-readers, and we're expanding interactive content with HTML5 modules."
      },
      {
        question: "Is there a download limit?",
        answer: "Free users can download up to 5 resources per month. Premium subscribers have unlimited downloads. Institutional subscribers can set their own limits based on their subscription tier."
      },
      {
        question: "Can I print downloaded materials?",
        answer: "Yes, downloaded materials can be printed for personal use. However, redistribution or commercial use of copyrighted materials is strictly prohibited per our terms of service."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. If you don't see the email, check your spam folder."
      },
      {
        question: "Can I change my email address?",
        answer: "Yes, you can update your email address in your profile settings. You'll need to verify the new email address before the change takes effect."
      },
      {
        question: "How do I track my learning progress?",
        answer: "Your dashboard shows your reading progress, completed modules, quiz scores, and learning streaks. Premium users also get detailed analytics and personalized learning recommendations."
      },
      {
        question: "Can I share my account with classmates?",
        answer: "Individual accounts are for personal use only. However, we offer group discounts and institutional subscriptions for classes, study groups, and medical schools. Contact us for group pricing."
      },
      {
        question: "How do I delete my account?",
        answer: "You can delete your account from the account settings page. Note that this action is permanent and will remove all your progress data. Downloaded materials will remain on your device."
      }
    ],
    technical: [
      {
        question: "What browsers are supported?",
        answer: "TAMSA Library works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience and security."
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes! Our mobile app is available for iOS and Android devices. The app provides full access to all resources with offline reading capabilities and sync across devices."
      },
      {
        question: "Why are downloads slow?",
        answer: "Download speeds depend on your internet connection and file size. Large textbooks may take several minutes to download. Try downloading during off-peak hours or contact support if speeds are consistently slow."
      },
      {
        question: "The website won't load properly",
        answer: "Try clearing your browser cache and cookies, disable browser extensions, or try an incognito/private browsing window. If problems persist, contact our technical support team."
      },
      {
        question: "Can I access TAMSA Library from multiple devices?",
        answer: "Yes! Your account works across all devices. Your progress, bookmarks, and downloaded content will sync automatically. Premium users can be logged in on up to 5 devices simultaneously."
      }
    ]
  };

  const popularFAQs = [
    {
      question: "How do I get started with TAMSA Library?",
      answer: "Create a free account, explore our resource categories, and start with our featured medical specialties. We recommend beginning with our orientation module for new users."
    },
    {
      question: "What's included in the premium subscription?",
      answer: "Premium includes unlimited downloads, access to exclusive content, advanced search features, progress analytics, priority support, and early access to new resources."
    },
    {
      question: "Can my medical school get institutional access?",
      answer: "Yes! We offer institutional subscriptions with bulk user management, detailed usage analytics, and curriculum integration tools. Contact partnerships@tamsa.org for details."
    }
  ];

  const filteredFAQs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    const filtered = questions.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {} as Record<string, typeof faqs.general>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              ❓ Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about TAMSA Library, 
              our resources, and how to make the most of our platform.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for answers..."
                    className="pl-10 bg-transparent border-white/30 text-white placeholder-white/70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      {!searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to the most frequently asked questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {popularFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`popular-${index}`}>
                    <Card className="medical-card">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-left font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers organized by topic areas
            </p>
          </div>

          <Tabs defaultValue="general" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => {
              const Icon = category.icon;
              const categoryFAQs = searchQuery ? filteredFAQs[category.id] : faqs[category.id];
              
              return (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <Card className="medical-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                  </Card>

                  {categoryFAQs && categoryFAQs.length > 0 ? (
                    <Accordion type="single" collapsible className="space-y-4">
                      {categoryFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`}>
                          <Card className="medical-card">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <span className="text-left font-semibold">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="px-6 pb-4">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </div>
                            </AccordionContent>
                          </Card>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <Card className="medical-card">
                      <CardContent className="text-center py-12">
                        <p className="text-muted-foreground">
                          {searchQuery 
                            ? "No questions found matching your search."
                            : "Questions for this category are being updated."
                          }
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;