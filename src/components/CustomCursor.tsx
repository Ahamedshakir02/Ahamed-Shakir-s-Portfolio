import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-950 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-zinc-950 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: x - 3, y: y - 3 }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
}
