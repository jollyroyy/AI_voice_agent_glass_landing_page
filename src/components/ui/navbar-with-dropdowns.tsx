import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  name: string;
  url: string;
}

interface NavItem {
  name: string;
  url?: string;
  icon: LucideIcon;
  dropdown?: DropdownItem[];
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleItemClick = (itemName: string, url?: string) => {
    setActiveTab(itemName);
    if (url) {
      document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <div className="flex flex-col items-center justify-center w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="vsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path d="M 60 40 L 100 130 L 140 40"
                  fill="none"
                  stroke="url(#vsGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"/>

            <path d="M 140 70 Q 150 70 155 80 Q 160 90 155 100 Q 150 110 140 110 L 120 110"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="12"
                  strokeLinecap="round"
                  filter="url(#glow)"/>

            <path d="M 30 90 L 170 90"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
            </path>

            <text x="100" y="165"
                  fontFamily="Arial, sans-serif"
                  fontSize="24"
                  fontWeight="bold"
                  fill="url(#vsGradient)"
                  textAnchor="middle"
                  filter="url(#glow)">
              VoiceShine
            </text>

            <text x="100" y="185"
                  fontFamily="Arial, sans-serif"
                  fontSize="10"
                  fill="#64748b"
                  textAnchor="middle">
              VOICE AI AGENT
            </text>
          </svg>
        </div>
      </div>

      <div
        className={cn(
          "fixed top-6 right-6 z-50",
          className
        )}
      >
        <div className="flex items-center gap-1 bg-white/10 border border-gray-200/30 backdrop-blur-lg py-1.5 px-2 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => !isDropdownOpen && setOpenDropdown(null)}
              >
                {hasDropdown ? (
                  <button
                    onClick={() => {
                      setOpenDropdown(isDropdownOpen ? null : item.name);
                    }}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-4 py-1.5 rounded-full transition-colors",
                      "text-foreground/80 hover:text-primary bg-transparent",
                      isActive && "text-primary"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.name, item.url);
                    }}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-4 py-1.5 rounded-full transition-colors",
                      "text-foreground/80 hover:text-primary bg-transparent",
                      isActive && "text-primary"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </a>
                )}

                {hasDropdown && isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="hidden md:block absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg shadow-xl p-2 min-w-[220px] z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown?.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.url}
                        onClick={(e) => {
                          e.preventDefault();
                          handleItemClick(item.name, dropItem.url);
                          setOpenDropdown(null);
                        }}
                        className="block px-4 py-2.5 text-sm font-medium text-left text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
