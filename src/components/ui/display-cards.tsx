"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-white" />,
  title = "Featured",
  description = "Discover amazing content",
  titleClassName = "text-white",
  onClick,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-auto min-h-[200px] w-[26rem] -skew-y-[8deg] cursor-pointer select-none flex-col justify-start gap-3 rounded-xl border-2 border-[#72b9bb]/30 bg-gradient-to-br from-[#72b9bb] via-[#8cc5b8] to-[#b5d9d9] backdrop-blur-sm px-5 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[24rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-[#72b9bb]/50 hover:shadow-2xl hover:shadow-[#72b9bb]/20",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-white/20 p-1">
          {icon}
        </span>
      </div>
      <p className={cn("text-base font-bold leading-tight text-white", titleClassName)}>{title}</p>
      <p className="text-sm text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <>
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
        {displayCards.map((cardProps, index) => (
          <DisplayCard
            key={index}
            {...cardProps}
            onClick={() => handleCardClick(index)}
            className={cn(
              cardProps.className,
              selectedCard === index && "z-50 scale-110 -translate-y-16"
            )}
          />
        ))}
      </div>
      {selectedCard !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4 skew-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <DisplayCard
              {...displayCards[selectedCard]}
              className="!skew-y-0 !w-full scale-110 shadow-2xl border-[#72b9bb]/50"
              onClick={() => setSelectedCard(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
