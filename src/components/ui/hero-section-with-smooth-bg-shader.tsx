import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"
import DisplayCards from "./display-cards"
import { Heart, Users, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  secondaryButtonText?: string
  onButtonClick?: () => void
  onSecondaryButtonClick?: () => void
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  maxWidth?: string
  veilOpacity?: string
  fontFamily?: string
  fontWeight?: number
}

export function HeroSection({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  secondaryButtonText,
  onButtonClick,
  onSecondaryButtonClick,
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/20 dark:bg-black/25",
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
  }

  const displayCardsData = [
    {
      icon: <Heart className="size-4 text-pink-300" />,
      title: "Loyalty Driver",
      description: "Turn every call into loyalty",
      date: "Smart follow-ups",
      iconClassName: "text-pink-500",
      titleClassName: "text-pink-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Users className="size-4 text-blue-300" />,
      title: "Agent Empowerment",
      description: "Boost customer retention",
      date: "AI-powered support",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <TrendingUp className="size-4 text-green-300" />,
      title: "Sales Accelerator",
      description: "Enhance conversions faster",
      date: "Winning behaviors",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}>
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>

      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        <div className="py-32 md:py-40 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1
                className={`font-bold tracking-tight text-foreground leading-[1.15] mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${titleClassName}`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {title} <span className="gradient-text">{highlightText}</span>
              </h1>
              <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 font-normal ${descriptionClassName}`}>
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={handleButtonClick}
                  className={`px-8 py-4 rounded-full bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white font-bold shadow-xl hover:scale-105 transition-transform text-base ${buttonClassName}`}
                >
                  {buttonText}
                </button>
                {secondaryButtonText && (
                  <button
                    onClick={onSecondaryButtonClick}
                    className="px-8 py-4 rounded-full bg-white text-foreground font-semibold border-2 border-gray-200 shadow-lg hover:scale-105 transition-transform text-base"
                  >
                    {secondaryButtonText}
                  </button>
                )}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <DisplayCards cards={displayCardsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
