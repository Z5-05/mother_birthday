import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const PersonalVideoSection = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef([]);

  // Видео для оживших фотографий
  const videos = [
    {
      id: 1,
      src: '/assets/gifs/personal1.mp4',
      poster: '/assets/thumbnails/personal1.jpg',
    },
    {
      id: 2,
      src: '/assets/gifs/personal2.mp4',
      poster: '/assets/thumbnails/personal2.jpg',
    },
    {
      id: 3,
      src: '/assets/gifs/personal3.mp4',
      poster: '/assets/thumbnails/personal3.jpg',
    },
    {
      id: 4,
      src: '/assets/gifs/personal4.mp4',
      poster: '/assets/thumbnails/personal4.jpg',
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredVideo(index);
    videoRefs.current[index]?.play();
  };

  const handleMouseLeave = (index) => {
    setHoveredVideo(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="min-h-screen relative py-20 bg-gradient-to-br from-purple-300 via-pink-300 to-peach-300">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Наши старые ожившие фотографии 📸✨
          </h2>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-lg italic">
            Наведи курсор, чтобы оживить воспоминания
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white"
                whileHover={{ scale: 1.05, rotate: 2 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Белый квадрат-плейсхолдер */}
                <div className="absolute inset-0 bg-white flex items-center justify-center z-0">
                  <span className="text-gray-300 text-6xl">🖼️</span>
                </div>

                {/* Видео */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  poster={video.poster}
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-10"
                  style={{ opacity: hoveredVideo === index ? 1 : 0 }}
                />

                {/* Градиент при hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredVideo === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-white font-light italic drop-shadow-lg">
            "Каждый момент с тобой — это сокровище"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalVideoSection;
