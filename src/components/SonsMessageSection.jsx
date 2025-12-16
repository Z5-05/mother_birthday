import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const SonsMessageSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  // Видео от Ильи, Ромы, Оли и Веры
  const videos = [
    {
      id: 1,
      src: '/assets/videos/ilya.mp4',
      thumbnail: '/assets/thumbnails/ilya.jpg',
      title: 'От Ильи',
    },
    {
      id: 2,
      src: '/assets/videos/roma.mp4',
      thumbnail: '/assets/thumbnails/roma.jpg',
      title: 'От Ромы',
    },
    {
      id: 3,
      src: '/assets/videos/olya.mp4',
      thumbnail: '/assets/thumbnails/olya.jpg',
      title: 'От Оли',
    },
    {
      id: 4,
      src: '/assets/videos/vera.mp4',
      thumbnail: '/assets/thumbnails/vera.jpg',
      title: 'От Веры',
    },
  ];

  const handleVideoClick = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle current video
    if (activeVideo === index) {
      videoRefs.current[index]?.pause();
      setActiveVideo(null);
    } else {
      videoRefs.current[index]?.play();
      setActiveVideo(index);
    }
  };

  return (
    <section className="min-h-screen relative py-20 bg-gradient-to-br from-purple-400 via-pink-400 to-birthday-peach flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Заголовок */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Поздравления от детей 💖
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Специально для самой любимой мамы
          </motion.p>

          {/* Видео от детей */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white"
                  onClick={() => handleVideoClick(index)}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.src}
                    poster={video.thumbnail}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    controls={activeVideo === index}
                  />
                  
                  {activeVideo !== index && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/40"
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    >
                      <motion.div
                        className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-0 h-0 border-l-[30px] border-l-birthday-pink border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent ml-2" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                
                <motion.p
                  className="text-center mt-4 text-2xl font-semibold text-white drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {video.title}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Поздравительное сообщение */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-light italic">
              "Дорогая мама, в этот особенный день мы хотим, чтобы ты знала, как много ты для нас значишь.
              Твоя любовь, мудрость и бесконечная поддержка сформировали нас такими, какие мы есть сегодня.
              Каждый смех, каждое объятие, каждый момент с тобой — это бесценный дар."
            </p>
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-light italic">
              "Ты — сердце нашей семьи, свет в нашей жизни и лучшая мама, о которой можно только мечтать. 
              Спасибо тебе за то, что ты есть."
            </p>
            <motion.p
              className="text-3xl md:text-4xl font-bold gradient-text"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              С Днём Рождения, Мама! 🎂✨
            </motion.p>
            <p className="text-xl md:text-2xl text-gray-700 mt-4 font-light">
              Со всей нашей любовью, навсегда ❤️
            </p>
          </motion.div>

          {/* Декоративные элементы */}
          <motion.div
            className="mt-12 text-6xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🎉 🎂 🎁 💝 🌸
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SonsMessageSection;

