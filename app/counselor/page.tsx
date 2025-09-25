"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Shield,
  Users,
  MessageCircle,
  ArrowLeft,
  CheckCircle,
  Clock,
  Star,
  Phone,
  Video,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

export default function CounselorPage() {
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: "",
    urgency: "normal",
    preferredTime: "",
  })

  const counselors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialization: "Anxiety & Stress Management",
      experience: "8 years",
      rating: 4.9,
      availability: "Available Now",
      image: "/professional-counselor-woman.jpg",
      bio: "Specializes in helping students manage academic stress and anxiety disorders.",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialization: "Depression & Mood Disorders",
      experience: "12 years",
      rating: 4.8,
      availability: "Available in 30 min",
      image: "/professional-counselor-man.jpg",
      bio: "Expert in cognitive behavioral therapy and mindfulness-based interventions.",
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialization: "Relationship & Social Issues",
      experience: "6 years",
      rating: 4.9,
      availability: "Available Tomorrow",
      image: "/professional-counselor-woman-hispanic.jpg",
      bio: "Focuses on interpersonal relationships and social anxiety in academic settings.",
    },
  ]

  const handleCounselorSelect = (counselorId: string) => {
    setSelectedCounselor(counselorId)
    setShowBookingForm(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowBookingForm(false)
    setShowBookingSuccess(true)
    setSelectedCounselor(null)
    setFormData({ name: "", email: "", concern: "", urgency: "normal", preferredTime: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-poppins">CampusCare</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">Counselor Connect</Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-balance">
            <span className="text-gradient">Connect with a Counselor</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Get professional support from licensed counselors who understand student life. Confidential, accessible, and
            designed for your wellbeing.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              100% Confidential
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-secondary" />
              24/7 Available
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
              Licensed Professionals
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Options */}
      <section className="pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass text-center hover:glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="font-semibold mb-2 text-chart-4">Crisis Support</h3>
                <p className="text-sm text-muted-foreground mb-3">Immediate help for urgent situations</p>
                <Button variant="outline" className="w-full border-chart-4/30 text-chart-4 bg-transparent">
                  Call Now: 988
                </Button>
              </CardContent>
            </Card>

            <Card className="glass text-center hover:glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Chat Support</h3>
                <p className="text-sm text-muted-foreground mb-3">Text-based counseling sessions</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="glass text-center hover:glow transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Video Sessions</h3>
                <p className="text-sm text-muted-foreground mb-3">Face-to-face virtual counseling</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule Video
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Counselors */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">Available Counselors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our team of licensed professionals who specialize in student mental health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {counselors.map((counselor) => (
              <Card key={counselor.id} className="glass hover:glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={counselor.image || "/placeholder.svg"}
                      alt={counselor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{counselor.name}</h3>
                      <p className="text-sm text-primary">{counselor.specialization}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{counselor.rating}</span>
                        <span className="text-sm text-muted-foreground">• {counselor.experience}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{counselor.bio}</p>

                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={`${
                        counselor.availability === "Available Now"
                          ? "bg-green-500/20 text-green-500 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {counselor.availability}
                    </Badge>
                  </div>

                  <Button className="w-full" onClick={() => handleCounselorSelect(counselor.id)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Book Counseling Session
              </CardTitle>
              <CardDescription>
                {selectedCounselor && `With ${counselors.find((c) => c.id === selectedCounselor)?.name}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">What would you like to discuss?</label>
                  <Textarea
                    name="concern"
                    value={formData.concern}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what's on your mind (optional)"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-border bg-background"
                  >
                    <option value="normal">Normal - Within a few days</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="crisis">Crisis - Immediate attention needed</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                  <Input
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekday evenings, Tomorrow morning"
                  />
                </div>

                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 inline mr-1" />
                    Your information is completely confidential and will only be shared with your chosen counselor.
                  </p>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    Submit Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowBookingForm(false)
                      setSelectedCounselor(null)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Booking Success Modal */}
      {showBookingSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-500">Booking Successful!</h3>
              <p className="text-muted-foreground mb-6">
                Your counseling session request has been submitted successfully. A counselor will contact you within 24
                hours to confirm your appointment.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 inline mr-2" />
                  You'll receive a confirmation email shortly with next steps and session details.
                </p>
              </div>
              <Button className="w-full" onClick={() => setShowBookingSuccess(false)}>
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Support Information */}
      <section className="py-12 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-poppins mb-4">Why Choose CampusCare Counseling?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Confidential</h3>
              <p className="text-sm text-muted-foreground">Your privacy is protected with end-to-end encryption</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Student-Focused</h3>
              <p className="text-sm text-muted-foreground">Counselors specialized in student mental health</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Flexible</h3>
              <p className="text-sm text-muted-foreground">Sessions that fit your academic schedule</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="font-semibold mb-2">Supportive</h3>
              <p className="text-sm text-muted-foreground">Judgment-free environment for healing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-poppins">CampusCare</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your mental health matters. We're here to support you every step of the way.
          </p>
        </div>
      </footer>
    </div>
  )
}
