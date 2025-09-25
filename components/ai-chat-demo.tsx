"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Send, Calendar, BookOpen, Moon, AlertTriangle, Users, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function AIChatDemo() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm CampusCare AI, your confidential wellness companion. What's on your mind today? Remember, this is a safe and supportive space. 💙",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [showStudyGroupModal, setShowStudyGroupModal] = useState(false)
  const [showSleepTipsModal, setShowSleepTipsModal] = useState(false)
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

  const sendMessage = async (content: string) => {
    if (isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error("No response body")
      }

      let aiResponse = ""
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith('0:"')) {
            const text = line.slice(3, -1) // Remove 0:" and trailing "
            aiResponse += text
            setMessages((prev) =>
              prev.map((msg) => (msg.id === assistantMessage.id ? { ...msg, content: aiResponse } : msg)),
            )
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again or contact our support team if the issue persists.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue)
      setInputValue("")
    }
  }

  const handleQuickMessage = (message: string) => {
    if (!isLoading) {
      sendMessage(message)
    }
  }

  const handleCounselingClick = () => router.push("/counselor")
  const handleStudyGroupClick = () => setShowStudyGroupModal(true)
  const handleSleepTipsClick = () => setShowSleepTipsModal(true)
  const handleEmergencyClick = () => setShowEmergencyModal(true)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Live AI Chat Interface */}
      <Card className="glass overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">CampusCare AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Live AI-powered mental health support</p>
                </div>
                <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/30">Live Demo</Badge>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.role === "user" ? "justify-end" : ""}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-xs ${
                        message.role === "user" ? "bg-secondary/10 text-right" : "bg-primary/10"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Loader2 className="h-4 w-4 text-primary animate-spin" />
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-muted-foreground">AI is thinking...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge
                  className="bg-primary/20 text-primary border-primary/30 cursor-pointer hover:bg-primary/30 transition-colors"
                  onClick={handleCounselingClick}
                >
                  <Calendar className="mr-1 h-3 w-3" />
                  Book Counseling
                </Badge>
                <Badge
                  className="bg-secondary/20 text-secondary border-secondary/30 cursor-pointer hover:bg-secondary/30 transition-colors"
                  onClick={handleStudyGroupClick}
                >
                  <BookOpen className="mr-1 h-3 w-3" />
                  Study Support
                </Badge>
                <Badge
                  className="bg-accent/20 text-accent border-accent/30 cursor-pointer hover:bg-accent/30 transition-colors"
                  onClick={handleSleepTipsClick}
                >
                  <Moon className="mr-1 h-3 w-3" />
                  Sleep Help
                </Badge>
                <Badge
                  className="bg-chart-4/20 text-chart-4 border-chart-4/30 cursor-pointer hover:bg-chart-4/30 transition-colors"
                  onClick={handleEmergencyClick}
                >
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  Emergency
                </Badge>
              </div>

              {/* Quick Message Buttons */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleQuickMessage(
                      "I'm feeling overwhelmed with my coursework and can't sleep properly. I'm worried about my upcoming exams.",
                    )
                  }
                  disabled={isLoading}
                  className="text-xs"
                >
                  Exam Anxiety
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleQuickMessage(
                      "I've been feeling really lonely and isolated on campus. It's hard to make friends.",
                    )
                  }
                  disabled={isLoading}
                  className="text-xs"
                >
                  Loneliness
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleQuickMessage(
                      "I'm struggling with time management and procrastination. I feel behind in all my classes.",
                    )
                  }
                  disabled={isLoading}
                  className="text-xs"
                >
                  Time Management
                </Button>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Share what's on your mind..."
                  className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  disabled={isLoading}
                />
                <Button type="submit" size="sm" disabled={!inputValue.trim() || isLoading} className="px-4">
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-3">
                This is a live AI demonstration with simulated responses
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Group Modal */}
      {showStudyGroupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-secondary" />
                Study Support Groups
              </h3>
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

      {/* Sleep Tips Modal */}
      {showSleepTipsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Moon className="mr-2 h-5 w-5 text-accent" />
                Sleep Hygiene Tips
              </h3>
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

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass max-w-md w-full border-chart-4/30">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center text-chart-4">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Support
              </h3>
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
                <Button className="flex-1 bg-chart-4 hover:bg-chart-4/80" onClick={() => router.push("/counselor")}>
                  Connect Immediately
                </Button>
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
