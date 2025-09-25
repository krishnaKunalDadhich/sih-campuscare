"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Users,
  Brain,
  Smartphone,
  Cloud,
  Database,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  XCircle,
  Star,
  Calendar,
  Moon,
  AlertTriangle,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import AIChatDemo from "@/components/ai-chat-demo"

export default function CampusCarePage() {
  const [showCounselingModal, setShowCounselingModal] = useState(false)
  const [showStudyGroupModal, setShowStudyGroupModal] = useState(false)
  const [showSleepTipsModal, setShowSleepTipsModal] = useState(false)
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  const handleCounselingClick = () => {
    setShowCounselingModal(true)
  }

  const handleStudyGroupClick = () => {
    setShowStudyGroupModal(true)
  }

  const handleSleepTipsClick = () => {
    setShowSleepTipsModal(true)
  }

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true)
  }

  const handleLiveDemoClick = () => {
    // Redirect to counselor connection page
    window.location.href = "/counselor"
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-poppins">CampusCare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#technical" className="text-muted-foreground hover:text-foreground transition-colors">
                Technical
              </a>
              <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
                Impact
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </a>
              <Link href="/counselor" className="text-muted-foreground hover:text-foreground transition-colors">
                Connect Counselor
              </Link>
            </div>
            <Link href="/counselor">
              <Button className="glow">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 text-sm px-4 py-2 bg-secondary/20 text-secondary border-secondary/30">
            Smart India Hackathon 2025
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-balance">
            <span className="text-gradient">CampusCare</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal text-muted-foreground">
              Mindful Campus: Your Student Wellness Companion
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            A confidential digital mental health and psychological support system for students in higher education.
          </p>
          <p className="text-lg text-primary mb-12 font-medium">"Your safe space for wellness, anytime, anywhere."</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 glow"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Demo
            </Button>
            <Link href="/counselor">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass bg-transparent">
                Connect with Counselor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins mb-6">See CampusCare in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience how our AI-powered platform provides real-time mental health support for students
            </p>
          </div>

          <AIChatDemo />

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="glass text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Intelligent Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  AI analyzes student concerns and provides personalized, evidence-based suggestions
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Immediate Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 availability with instant responses and coping strategies for urgent situations
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Resource Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless integration with campus resources, counseling services, and peer support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">The Challenge We're Solving</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students face significant barriers to accessing mental health support
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass">
              <CardHeader>
                <XCircle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Lack of Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No structured, scalable, and stigma-free psychological support system exists for students in higher
                  education.
                </p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Shield className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Fear of Stigma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students avoid seeking help due to social stigma and fear of judgment from peers and institutions.
                </p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Brain className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Limited Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Educational institutions lack low-cost, confidential solutions to provide adequate mental health
                  support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section id="solution" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">Our Comprehensive Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A digital platform designed specifically for student mental health and wellness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass hover:glow transition-all duration-300">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">AI Chatbot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Confidential AI-powered chatbot using Python + NLTK for immediate support
                </p>
              </CardContent>
            </Card>
            <Card className="glass hover:glow transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-lg">Peer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Moderated peer support forums for community connection and shared experiences
                </p>
              </CardContent>
            </Card>
            <Card className="glass hover:glow transition-all duration-300">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Campus Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Emergency contacts, wellness events, and counseling service integration
                </p>
              </CardContent>
            </Card>
            <Card className="glass hover:glow transition-all duration-300">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-chart-4 mx-auto mb-4" />
                <CardTitle className="text-lg">Student-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Culturally-sensitive interface designed specifically for student needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section id="technical" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">Technical Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with modern, scalable technologies for reliability and performance
            </p>
          </div>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="glass">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">React Native</p>
                <p className="text-sm text-muted-foreground">Cross-platform mobile application for iOS and Android</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Database className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Node.js + Express</p>
                <p className="text-sm text-muted-foreground">Scalable server architecture with RESTful APIs</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Database className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">MongoDB</p>
                <p className="text-sm text-muted-foreground">NoSQL database for flexible data storage</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Brain className="h-8 w-8 text-chart-4 mb-2" />
                <CardTitle className="text-lg">AI/ML</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Python + NLTK</p>
                <p className="text-sm text-muted-foreground">Natural language processing for chatbot intelligence</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Cloud className="h-8 w-8 text-chart-5 mb-2" />
                <CardTitle className="text-lg">Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">AWS/Google Cloud</p>
                <p className="text-sm text-muted-foreground">Reliable cloud infrastructure with auto-scaling</p>
              </CardContent>
            </Card>
          </div>

          {/* User Journey Flowchart */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-center">User Journey Flow</CardTitle>
              <CardDescription className="text-center">Simple, intuitive path from login to support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Login</p>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                    <MessageCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="text-sm font-medium">Chatbot</p>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Resources</p>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-chart-4/20 flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-chart-4" />
                  </div>
                  <p className="text-sm font-medium">Escalation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feasibility & Viability */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">Feasibility & Viability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical, scalable, and ethical solution for higher education
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built with open-source technologies and scalable cloud infrastructure for minimal operational costs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Open-source frameworks</li>
                  <li>• Modular design</li>
                  <li>• Phased rollout capability</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-xl">Secure & Ethical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Privacy-first approach with robust encryption and anonymized data handling.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• Anonymized data storage</li>
                  <li>• GDPR compliance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Adoption Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed for easy integration with existing campus systems and high user adoption.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Intuitive user interface</li>
                  <li>• Campus system integration</li>
                  <li>• 24/7 content moderation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Benefits */}
      <section id="impact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">Impact & Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming student mental health support across campuses
            </p>
          </div>

          {/* Before vs After */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="glass border-destructive/30">
              <CardHeader>
                <XCircle className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-2xl text-destructive">Without CampusCare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Students suffer in silence due to stigma</p>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Limited access to mental health resources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">High stress levels affect academic performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Institutions struggle with costly solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 glow">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl text-primary">With CampusCare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Accessible, stigma-free support for all students</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">24/7 confidential mental health assistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Improved well-being and academic success</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Cost-effective solution for institutions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Accessible Support</h3>
              <p className="text-sm text-muted-foreground">Available anytime, anywhere for all students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Reduced Stress</h3>
              <p className="text-sm text-muted-foreground">Lower anxiety and improved mental well-being</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Empowered Institutions</h3>
              <p className="text-sm text-muted-foreground">Affordable care solutions for universities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="font-semibold mb-2">Safer Communities</h3>
              <p className="text-sm text-muted-foreground">Creating supportive campus environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* References & Research */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">Research Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Backed by research in psychology & educational technology
            </p>
          </div>
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Digital mental health interventions</li>
                    <li>• Student psychological support systems</li>
                    <li>• AI-powered therapeutic chatbots</li>
                    <li>• Campus wellness program effectiveness</li>
                    <li>• Stigma reduction in mental health</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Findings</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 73% of students experience mental health crises</li>
                    <li>• Digital platforms reduce help-seeking barriers</li>
                    <li>• Peer support improves treatment outcomes</li>
                    <li>• 24/7 availability increases engagement</li>
                    <li>• Anonymity encourages honest communication</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-poppins">CampusCare</span>
            </div>
            <p className="text-muted-foreground mb-6">Mindful Campus: Your Student Wellness Companion</p>
          </div>

          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Hackathon Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Event:</strong> Smart India Hackathon 2025
                </p>
                <p>
                  <strong>Problem ID:</strong> 25092 (MedTech / BioTech / HealthTech)
                </p>
                <p>
                  <strong>Team:</strong> CampusCare
                </p>
                <p>
                  <strong>Team ID:</strong> [To be assigned]
                </p>
                <p>
                  <strong>Contact:</strong> team@campuscare.dev
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">© 2025 CampusCare Team. Built with ❤️ for student wellness.</p>
          </div>
        </div>
      </footer>

      {/* Modals for Interactive Elements */}
      {showCounselingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Book Counseling Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Great choice! Professional counseling can provide personalized support for your concerns.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium">Available Sessions:</p>
                  <p className="text-sm text-muted-foreground">• Individual counseling (45 min)</p>
                  <p className="text-sm text-muted-foreground">• Group therapy sessions</p>
                  <p className="text-sm text-muted-foreground">• Crisis intervention (immediate)</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Link href="/counselor" className="flex-1">
                  <Button className="w-full">Connect Now</Button>
                </Link>
                <Button variant="outline" onClick={() => setShowCounselingModal(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showStudyGroupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-secondary" />
                Join Study Group
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with peers who understand your academic challenges and can provide mutual support.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <p className="text-sm font-medium">Available Groups:</p>
                  <p className="text-sm text-muted-foreground">• Exam Anxiety Support Group</p>
                  <p className="text-sm text-muted-foreground">• Study Skills Workshop</p>
                  <p className="text-sm text-muted-foreground">• Peer Mentoring Circle</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1">Join Group</Button>
                <Button variant="outline" onClick={() => setShowStudyGroupModal(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showSleepTipsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="mr-2 h-5 w-5 text-accent" />
                Sleep Hygiene Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Better sleep can significantly improve your mental health and academic performance.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium">Quick Tips:</p>
                  <p className="text-sm text-muted-foreground">• Set a consistent bedtime routine</p>
                  <p className="text-sm text-muted-foreground">• Avoid screens 1 hour before bed</p>
                  <p className="text-sm text-muted-foreground">• Try progressive muscle relaxation</p>
                  <p className="text-sm text-muted-foreground">• Keep your room cool and dark</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1">Get Full Guide</Button>
                <Button variant="outline" onClick={() => setShowSleepTipsModal(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full border-chart-4/30">
            <CardHeader>
              <CardTitle className="flex items-center text-chart-4">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you're in crisis or having thoughts of self-harm, please reach out immediately.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-chart-4/10 rounded-lg">
                  <p className="text-sm font-medium text-chart-4">Crisis Resources:</p>
                  <p className="text-sm text-muted-foreground">• Campus Crisis Hotline: 24/7</p>
                  <p className="text-sm text-muted-foreground">• National Suicide Prevention: 988</p>
                  <p className="text-sm text-muted-foreground">• Campus Security: Emergency</p>
                  <p className="text-sm text-muted-foreground">• Text HOME to 741741</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Link href="/counselor" className="flex-1">
                  <Button className="w-full bg-chart-4 hover:bg-chart-4/80">Connect Immediately</Button>
                </Link>
                <Button variant="outline" onClick={() => setShowEmergencyModal(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
