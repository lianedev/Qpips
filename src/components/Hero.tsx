'use client'

import { Button } from '@/components/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen m-5 text-accent-foreground px-6 overflow-hidden">
      {/* Background Glow Effects */}
      

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Are you ready to prove your trading edge?
        </h1>

        <p className="mt-10 text-lg md:text-xl text-black">
          At <span className="font-bold text-[#dacf05da]  ">Qpips</span>, we empower skilled traders to turn strategy into success.  
           keep up to <span className="text-[#dacf05da] font-bold">90% of your profits</span>,  
          and scale your account to <span className="text-[#dacf05da] font-bold">$2,000,000</span>.
        </p>

        <p className="mt-2 text-sm md:text-base text-zinc-400">
          Whether you’re refining your craft or ready to trade like a pro, we give you the platform, tools,  
          and funding to elevate your journey. This is where confidence meets capital
          and your skill becomes the asset.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#f5e907d2] hover:bg-[#dacf05da] text-black font-semibold rounded-xl px-8 py-6"
          >
            Start the Evaluation
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-zinc-600 text-black hover:bg-zinc-800 rounded-xl px-8 py-6"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-8 text-sm text-zinc-500">
          <span className="inline-block mr-3">• Funding up to <strong>$100,000</strong></span>
          <span className="inline-block ml-3">• Profit share up to <strong>90%</strong></span>
        </div>
      </motion.div>
    </section>
  )
}
