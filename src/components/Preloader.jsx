
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151515] text-white"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold tracking-tight"
            >
              HABIB<span className="text-neutral-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3 }}
              className="mt-6 h-[2px] bg-white"
            />

            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
              Creative Developer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
