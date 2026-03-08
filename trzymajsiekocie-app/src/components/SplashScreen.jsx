import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import catIcon from '../assets/loading_cat_icon.jpg';

const MotionDiv = motion.div;
const MotionImg = motion.img;

export default function SplashScreen({ onFinished }) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <MotionDiv
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeIn' }}
          onAnimationComplete={(def) => {
            if (def === 'exit') onFinished?.();
          }}
        >
          <MotionImg
            src={catIcon}
            alt=""
            className="w-40 h-40 object-contain"
            aria-hidden="true"
            initial={{ scale: 0.3, opacity: 0, rotate: -8 }}
            animate={{ scale: 2.6, opacity: 1, rotate: 0 }}
            transition={{
              scale: { duration: 2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.6, ease: 'easeOut' },
              rotate: { duration: 1.8, ease: 'easeOut' },
            }}
            onAnimationComplete={() => setVisible(false)}
          />
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
