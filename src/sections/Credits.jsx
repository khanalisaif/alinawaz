import { motion } from 'motion/react'
import { Petals, Torn } from '../components/ui'

export default function Credits() {
  const names = [
    "Chaman Ara",
    "Alinawaz Khan",
    "Aliraza Khan",
    "Nasreen Khan",
    "Samsraza Khan",
    "Shabana Khatoon",
    "Sayeed Ali",
    "Gazala Parveen",
    "Noor Fatima",
    "Mohammad Shami",
    "Aliza Khan",
    "Sidra"
  ];

  return (
    <section className="relative bg-[#edd8cd] min-h-[100svh] w-full flex flex-col justify-center overflow-hidden text-center snap-start border-t border-white/20">
      
      <Petals />

      <div className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center pointer-events-none z-20">
        <motion.div
          className="flex flex-col items-center w-full px-4"
          initial={{ y: '100vh' }}
          animate={{ y: '-150vh' }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <h2 className="font-serif italic tracking-widest text-xl text-wine/80 mb-8 font-semibold">
            Special Thanks
          </h2>
          
          <div className="flex flex-col gap-6">
            {names.map((name, i) => (
              <p key={i} className="font-script text-3xl sm:text-4xl text-wine drop-shadow-sm tracking-wide">
                {name}
              </p>
            ))}
          </div>
          
          <h2 className="font-serif italic tracking-widest text-xl text-wine/80 mt-12 font-semibold">
            And You
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
