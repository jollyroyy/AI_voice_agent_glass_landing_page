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
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 border border-gray-200/50">
          <img
            src="/Gemini_Generated_Image_4g7yax4g7yax4g7y.png"
            alt="VoiceShine Logo"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain"
          />
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
