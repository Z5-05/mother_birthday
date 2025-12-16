import { motion } from 'framer-motion';
import { welcomeText } from '../config/welcomeText';
import { closingText } from '../config/closingText';

const IntroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-peach-400">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-birthday-purple via-birthday-pink to-birthday-peach opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {welcomeText.title}
        </motion.h1>

        <motion.div
          className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {welcomeText.greeting}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {welcomeText.paragraph1}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {welcomeText.paragraph2}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {welcomeText.paragraph3}
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {closingText.closing}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="text-white text-4xl">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;

