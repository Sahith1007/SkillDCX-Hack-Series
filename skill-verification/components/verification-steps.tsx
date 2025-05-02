"use client"

import { useState, useEffect } from "react"
import { Upload, Brain, Users, Award } from "lucide-react"

export function VerificationSteps() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload Certificate",
      description: "Upload your certificate or credential document to our secure platform.",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI Verification",
      description: "Our AI system analyzes and verifies the authenticity of your credentials.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "DAO Approval",
      description: "A decentralized community of experts reviews and approves your credentials.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Skill Token Issued",
      description: "Your verified skill is minted as a token on the blockchain.",
    },
  ]

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-center transition-all duration-300 ${
              activeStep === index ? "scale-105" : "opacity-70"
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div
              className={`
              relative z-10 flex items-center justify-center w-20 h-20 rounded-full mb-4
              ${activeStep === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
              transition-colors duration-300
            `}
            >
              {step.icon}
              <div className="absolute -right-1 -top-1 w-6 h-6 rounded-full bg-background flex items-center justify-center border-2 border-background">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
