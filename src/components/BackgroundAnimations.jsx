import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundAnimations = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles (hearts, flowers, petals)
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        type: ['❤️', '💖', '🌸', '🌺', '🌼', '🌷', '💐', '✨', '💫'][Math.floor(Math.random() * 9)],
        left: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 10,
        size: 20 + Math.random() * 30,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.left,
            fontSize: `${particle.size}px`,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(particle.id) * 100, 0],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        >
          {particle.type}
        </motion.div>
      ))}
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        💐
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-5xl"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        🎂
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-7xl"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        🎉
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-32 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      >
        🎁
      </motion.div>
    </div>
  );
};

export default BackgroundAnimations;

