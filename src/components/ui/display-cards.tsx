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
  icon = <Sparkles className="size-4 text-amber-900" />,
  title = "Featured",
  description = "Discover amazing content",
  titleClassName = "text-amber-900",
  onClick,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-auto min-h-[200px] w-[26rem] -skew-y-[8deg] cursor-pointer select-none flex-col justify-start gap-3 rounded-xl border-2 border-amber-200/40 bg-gradient-to-br from-[#f5f5dc] via-[#faf8f3] to-[#f8f6f0] backdrop-blur-sm px-5 py-4 transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[24rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-amber-300/60 hover:shadow-2xl hover:shadow-amber-200/30 hover:-translate-y-8 hover:scale-105",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-amber-100/80 p-1.5">
          {icon}
        </span>
      </div>
      <p className={cn("text-base font-bold leading-tight text-amber-900", titleClassName)}>{title}</p>
      <p className="text-sm text-amber-950/80 leading-relaxed">{description}</p>
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
              selectedCard === index && "z-50 scale-110 -translate-y-20"
            )}
          />
        ))}
      </div>
      {selectedCard !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <DisplayCard
              {...displayCards[selectedCard]}
              className="!skew-y-0 !w-full scale-125 shadow-2xl border-amber-300/60 hover:scale-125 hover:translate-y-0"
              onClick={() => setSelectedCard(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
