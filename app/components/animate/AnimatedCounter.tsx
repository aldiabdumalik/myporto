"use client"
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
interface AnimatedCounterPorps {
  value: number;
}
export default function AnimatedCounter({ value }: AnimatedCounterPorps) {
  const ref = useRef<any>(null)
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 6000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (lat) => {
      if (ref.current && lat.toFixed(0) <= value) {
        ref.current.textContent = lat.toFixed(0);
      }
    })
  }, [springValue, value])
  return (
    <span ref={ref}></span>
  )
}
