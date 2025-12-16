import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { quizData } from '../config/quizQuestions';

const QuizSection = () => {
  // Викторина для мамы о детях

  const [flippedCards, setFlippedCards] = useState(new Set());
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleCardClick = (id) => {
    if (!answers[id]) {
      setFlippedCards((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    }
  };

  const handleAnswer = (id, isCorrect) => {
    setAnswers((prev) => ({ ...prev, [id]: isCorrect }));
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });

    // Check if all cards are answered
    if (Object.keys(answers).length + 1 === quizData.length) {
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const correctCount = Object.values(answers).filter(Boolean).length;
  const totalAnswered = Object.keys(answers).length;

  return (
    <section className="min-h-screen relative py-20 bg-gradient-to-br from-peach-200 via-yellow-200 to-pink-200">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            Квест для мамы на день рождения! 🎂🎉
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            Проверь, насколько хорошо ты знаешь своих детей! Нажми на карточки, чтобы узнать ответы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quizData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-64"
            >
              <div
                className="relative w-full h-full cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(card.id)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    rotateY: flippedCards.has(card.id) ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center p-6 text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: answers[card.id] !== undefined
                        ? answers[card.id]
                          ? 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
                          : 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}
                  >
                    <p className="text-white text-lg md:text-xl font-semibold">
                      {card.question}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-birthday-yellow to-birthday-peach"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {answers[card.id] === undefined ? (
                      <>
                        <p className="text-white text-xl md:text-2xl font-bold mb-6">
                          {card.answer}
                        </p>
                        <div className="flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAnswer(card.id, true);
                            }}
                            className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold shadow-lg"
                          >
                            ✓ Верно
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAnswer(card.id, false);
                            }}
                            className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold shadow-lg"
                          >
                            ✗ Неверно
                          </motion.button>
                        </div>
                      </>
                    ) : (
                      <p className="text-white text-2xl">
                        {answers[card.id] ? '✓' : '✗'}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-center p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl mx-auto"
            >
              <h3 className="text-4xl font-bold gradient-text mb-4">
                Твой результат: {correctCount} / {quizData.length}
              </h3>
              {correctCount >= 5 ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-gray-800"
                >
                  🎁 Потрясающе! Ты отлично знаешь своих детей! Ты — лучшая мама! 🎁
                </motion.p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-gray-800"
                >
                  Продолжай узнавать своих детей лучше — каждый день это новое открытие! 💕
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!showResults && totalAnswered > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-2xl text-gray-700 font-semibold"
          >
            Прогресс: {totalAnswered} / {quizData.length}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;

