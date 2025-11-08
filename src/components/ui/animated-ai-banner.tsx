import { motion } from 'framer-motion';

export function AnimatedAIBanner() {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center">

      <motion.div
        className="relative z-20 container mx-auto px-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/Whisk_1fcb2befc84cd8fb61349be623065390dr.png"
          alt="AI Voice Agent Technology"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain mx-auto"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
