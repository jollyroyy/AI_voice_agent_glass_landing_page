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
  icon = <Sparkles className="size-5 text-amber-900" />,
  title = "Featured",
  description = "Discover amazing content",
  titleClassName = "text-amber-900",
  onClick,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-auto min-h-[200px] w-[26rem] -skew-y-[8deg] cursor-pointer select-none flex-col justify-start gap-4 rounded-xl border-2 border-amber-200/50 bg-gradient-to-br from-[#f5f5dc] via-[#faf8f3] to-[#f8f6f0] px-6 py-5 transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[24rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-amber-300/70 hover:shadow-2xl hover:shadow-amber-200/40 hover:-translate-y-20 hover:scale-125",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-amber-100 p-2">
          {icon}
        </span>
      </div>
      <p className={cn("text-lg font-extrabold leading-tight text-amber-900", titleClassName)}>{title}</p>
      <p className="text-base font-bold text-amber-900 leading-relaxed">{description}</p>
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
      className: "[grid-area:stack]",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20",
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
              selectedCard === index && "z-50 scale-150 -translate-y-32"
            )}
          />
        ))}
      </div>
      {selectedCard !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] flex items-center justify-center p-6"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <DisplayCard
              {...displayCards[selectedCard]}
              className="!skew-y-0 !w-full !min-h-[350px] !h-auto scale-100 shadow-2xl border-amber-300/80 hover:scale-100 hover:translate-y-0 after:hidden !gap-6 !py-8 !px-8"
              onClick={() => setSelectedCard(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
