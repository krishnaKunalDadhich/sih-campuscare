export const maxDuration = 30

// Simulated AI responses for different mental health scenarios
const getAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  // Anxiety-related responses
  if (
    message.includes("anxious") ||
    message.includes("anxiety") ||
    message.includes("worried") ||
    message.includes("stress")
  ) {
    const anxietyResponses = [
      "I understand you're feeling anxious. Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. This can help calm your nervous system immediately.",
      "Anxiety is really tough to deal with. Consider breaking down overwhelming tasks into smaller, manageable steps. Our campus counseling center also offers anxiety support groups.",
      "It sounds like you're carrying a lot of stress. Have you tried progressive muscle relaxation? Tense and release each muscle group for 5 seconds - it can really help with physical anxiety symptoms.",
    ]
    return anxietyResponses[Math.floor(Math.random() * anxietyResponses.length)]
  }

  // Depression-related responses
  if (
    message.includes("depressed") ||
    message.includes("sad") ||
    message.includes("down") ||
    message.includes("hopeless")
  ) {
    const depressionResponses = [
      "I hear that you're going through a difficult time. Small steps matter - even getting sunlight for 10 minutes or calling a friend can help. Please consider reaching out to our campus counseling services.",
      "Feeling down is valid, and you're not alone in this. Try to maintain one small routine each day, like making your bed or having a regular meal. Professional support is available through student health services.",
      "Depression can make everything feel overwhelming. Focus on basic self-care today - sleep, nutrition, and gentle movement. Our peer support groups meet twice weekly and might be helpful.",
    ]
    return depressionResponses[Math.floor(Math.random() * depressionResponses.length)]
  }

  // Sleep-related responses
  if (
    message.includes("sleep") ||
    message.includes("tired") ||
    message.includes("insomnia") ||
    message.includes("can't sleep")
  ) {
    const sleepResponses = [
      "Sleep issues are so common among students. Try creating a wind-down routine 1 hour before bed - dim lights, no screens, maybe some light reading or meditation.",
      "Good sleep hygiene can really help: keep your room cool (65-68°F), avoid caffeine after 2pm, and try to wake up at the same time daily, even on weekends.",
      "Sleep troubles often reflect stress. Consider the 'brain dump' technique - write down tomorrow's worries before bed so your mind can rest. Our wellness center has sleep workshops too.",
    ]
    return sleepResponses[Math.floor(Math.random() * sleepResponses.length)]
  }

  // Study/academic stress responses
  if (
    message.includes("study") ||
    message.includes("exam") ||
    message.includes("grades") ||
    message.includes("academic")
  ) {
    const studyResponses = [
      "Academic pressure is intense! Try the Pomodoro technique: 25 minutes focused study, 5 minute break. This prevents burnout and improves retention.",
      "Exam stress is real. Break your study material into chunks, use active recall instead of just re-reading, and don't forget to take care of your basic needs.",
      "Academic struggles don't define your worth. Consider forming a study group, visiting professor office hours, or using our tutoring center. You've got this!",
    ]
    return studyResponses[Math.floor(Math.random() * studyResponses.length)]
  }

  // Relationship/social responses
  if (
    message.includes("lonely") ||
    message.includes("friends") ||
    message.includes("social") ||
    message.includes("relationship")
  ) {
    const socialResponses = [
      "Feeling lonely at college is more common than you think. Consider joining clubs related to your interests, attending campus events, or volunteering - these create natural connection opportunities.",
      "Building friendships takes time. Start small - say hi to classmates, join study groups, or attend residence hall activities. Quality connections matter more than quantity.",
      "Social anxiety can make connecting hard. Our campus has social skills workshops and peer mentoring programs that might help you feel more confident in social situations.",
    ]
    return socialResponses[Math.floor(Math.random() * socialResponses.length)]
  }

  // Crisis/emergency responses
  if (
    message.includes("hurt myself") ||
    message.includes("suicide") ||
    message.includes("end it all") ||
    message.includes("don't want to live")
  ) {
    return "I'm really concerned about you and want you to get immediate support. Please contact the National Suicide Prevention Lifeline at 988 or go to your nearest emergency room. You matter, and help is available 24/7."
  }

  // General supportive responses
  const generalResponses = [
    "Thank you for sharing that with me. It takes courage to reach out. What's one small thing you could do today to take care of yourself?",
    "I hear you, and your feelings are completely valid. Remember that seeking support is a sign of strength, not weakness. How can I help you today?",
    "College can be overwhelming, but you're not alone in this journey. What specific area would you like some strategies for?",
    "It sounds like you're dealing with a lot right now. Let's focus on one thing at a time. What feels most urgent to address today?",
  ]

  return generalResponses[Math.floor(Math.random() * generalResponses.length)]
}

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Get the last user message
  const lastMessage = messages[messages.length - 1]
  const userMessage = lastMessage?.content || ""

  // Generate AI response
  const aiResponse = getAIResponse(userMessage)

  // Simulate streaming response
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      // Simulate typing delay
      const words = aiResponse.split(" ")
      let index = 0

      const sendWord = () => {
        if (index < words.length) {
          const chunk = index === 0 ? words[index] : " " + words[index]
          controller.enqueue(encoder.encode(`0:"${chunk}"\n`))
          index++
          setTimeout(sendWord, 50 + Math.random() * 100) // Random typing speed
        } else {
          controller.enqueue(
            encoder.encode(
              `d:{"finishReason":"stop","usage":{"promptTokens":50,"completionTokens":${words.length}}}\n`,
            ),
          )
          controller.close()
        }
      }

      setTimeout(sendWord, 200) // Initial delay
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Vercel-AI-Data-Stream": "v1",
    },
  })
}
