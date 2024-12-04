"use client"

import React from 'react'
import Lottie from "lottie-react";

interface LottieFileProps {
  lottieAnimation: any;
  className?: string;
}
function Lottiefile({
    lottieAnimation,
    className,
  }: LottieFileProps) {
  return (
    <div>
    {lottieAnimation && (
      <Lottie
        className={`${className ? className : "w-1/2"}`}
        animationData={lottieAnimation}
        loop
      />
    )}
  </div>
  )
}

export default Lottiefile