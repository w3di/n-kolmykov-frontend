'use client';

import { useState, useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieAnimationProps {
  animationUrl: string;
  className?: string;
  loop?: boolean;
  style?: React.CSSProperties;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationUrl,
  className,
  loop = true,
  style,
  autoplay = true
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    fetch(animationUrl)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error('Error loading Lottie animation:', error)
      );
  }, [animationUrl]);

  useEffect(() => {
    if (lottieRef.current) {
      if (autoplay) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [autoplay]);

  if (!animationData) {
    return <div className={className || ''} />;
  }

  return (
    <div className={className || ''}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          ...style
        }}
      />
    </div>
  );
}
