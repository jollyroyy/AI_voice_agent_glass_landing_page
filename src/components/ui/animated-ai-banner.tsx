import { motion } from 'framer-motion';

export function AnimatedAIBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,158,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,200 Q120,150 240,200 T480,200 Q600,250 720,200 T960,200 Q1080,150 1200,200 T1440,200"
            fill="none"
            stroke="rgba(74, 158, 255, 0.5)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 1, 0.8, 1],
              d: [
                "M0,200 Q120,150 240,200 T480,200 Q600,250 720,200 T960,200 Q1080,150 1200,200 T1440,200",
                "M0,200 Q120,250 240,200 T480,200 Q600,150 720,200 T960,200 Q1080,250 1200,200 T1440,200",
                "M0,200 Q120,150 240,200 T480,200 Q600,250 720,200 T960,200 Q1080,150 1200,200 T1440,200",
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1.5 },
              d: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
          />

          <motion.path
            d="M0,220 Q140,170 280,220 T560,220 Q700,270 840,220 T1120,220 Q1260,170 1400,220 L1440,220"
            fill="none"
            stroke="rgba(126, 200, 245, 0.4)"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.8, 1, 0.8],
              d: [
                "M0,220 Q140,170 280,220 T560,220 Q700,270 840,220 T1120,220 Q1260,170 1400,220 L1440,220",
                "M0,220 Q140,270 280,220 T560,220 Q700,170 840,220 T1120,220 Q1260,270 1400,220 L1440,220",
                "M0,220 Q140,170 280,220 T560,220 Q700,270 840,220 T1120,220 Q1260,170 1400,220 L1440,220",
              ]
            }}
            transition={{
              pathLength: { duration: 2.5, ease: "easeInOut" },
              opacity: { duration: 1.5, delay: 0.2 },
              d: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
                delay: 0.5
              }
            }}
          />

          <motion.path
            d="M0,180 Q100,230 200,180 T400,180 Q500,130 600,180 T800,180 Q900,230 1000,180 T1200,180 Q1300,230 1400,180 L1440,180"
            fill="none"
            stroke="rgba(168, 213, 255, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.6, 0.9, 0.6],
              d: [
                "M0,180 Q100,230 200,180 T400,180 Q500,130 600,180 T800,180 Q900,230 1000,180 T1200,180 Q1300,230 1400,180 L1440,180",
                "M0,180 Q100,130 200,180 T400,180 Q500,230 600,180 T800,180 Q900,130 1000,180 T1200,180 Q1300,130 1400,180 L1440,180",
                "M0,180 Q100,230 200,180 T400,180 Q500,130 600,180 T800,180 Q900,230 1000,180 T1200,180 Q1300,230 1400,180 L1440,180",
              ]
            }}
            transition={{
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 1.5, delay: 0.4 },
              d: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
                delay: 1
              }
            }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="/Whisk_1fcb2befc84cd8fb61349be623065390dr.png"
          alt="AI Voice Agent Technology"
          className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-contain px-6"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-30" />
    </div>
  );
}
