import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

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
  children?: React.ReactNode
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
  children,
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

  return (
    <section className={`relative w-full min-h-[85vh] overflow-hidden bg-background flex items-center justify-center ${className}`}>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div className="text-left">
            <h1
              className={`font-bold tracking-tight text-foreground leading-[1.15] mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${titleClassName}`}
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
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
