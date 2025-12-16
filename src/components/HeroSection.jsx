import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const HeroSection = () => {
  // Все новые фотографии для главной галереи
  // Используем только актуальные фотографии photo1.jpg - photo16.jpg
  const photos = [
    '/assets/photos/photo1.jpg',
    '/assets/photos/photo2.jpg',
    '/assets/photos/photo3.jpg',
    '/assets/photos/photo4.jpg',
    '/assets/photos/photo5.jpg',
    '/assets/photos/photo6.jpg',
    '/assets/photos/photo7.jpg',
    '/assets/photos/photo8.jpg',
    '/assets/photos/photo9.jpg',
    '/assets/photos/photo10.jpg',
    '/assets/photos/photo11.jpg',
    '/assets/photos/photo12.jpg',
    '/assets/photos/photo13.jpg',
    '/assets/photos/photo14.jpg',
    '/assets/photos/photo15.jpg',
    '/assets/photos/photo16.jpg',
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-peach-300">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-birthday-pink via-birthday-purple to-birthday-peach opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            С Днём Рождения, Мама! 🎉
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white font-light drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Наши самые тёплые семейные воспоминания
          </motion.p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] md:h-[500px]"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index} className="w-[300px] md:w-[400px]">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={photo}
                    alt={`Семейное фото ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
    </section>
  );
};

export default HeroSection;

