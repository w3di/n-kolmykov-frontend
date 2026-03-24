'use client';

import { useState, useEffect, useRef } from 'react';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';

// Глобальный LRU-кеш — данные загружаются один раз, лимит предотвращает утечку памяти
const MAX_CACHE_SIZE = 20;
const animationCache = new Map<string, object>();
const pendingFetches = new Map<string, Promise<object>>();

const setCacheEntry = (key: string, value: object) => {
  if (animationCache.size >= MAX_CACHE_SIZE) {
    const firstKey = animationCache.keys().next().value;
    if (firstKey) animationCache.delete(firstKey);
  }
  animationCache.set(key, value);
};

const fetchAnimationData = (url: string): Promise<object> => {
  if (animationCache.has(url)) {
    return Promise.resolve(animationCache.get(url)!);
  }

  if (pendingFetches.has(url)) {
    return pendingFetches.get(url)!;
  }

  const promise = fetch(url)
    .then((response) => response.json())
    .then((data: object) => {
      setCacheEntry(url, data);
      pendingFetches.delete(url);
      return data;
    })
    .catch((error) => {
      pendingFetches.delete(url);
      throw error;
    });

  pendingFetches.set(url, promise);
  return promise;
};

interface LottieAnimationProps {
  animationUrl: string;
  className?: string;
  loop?: boolean;
  style?: React.CSSProperties;
  autoplay?: boolean;
}

const LottieAnimation = ({
  animationUrl,
  className,
  loop = true,
  style,
  autoplay = true
}: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(
    () => animationCache.get(animationUrl) ?? null
  );
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (animationData) return;

    let cancelled = false;
    fetchAnimationData(animationUrl)
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch((error) =>
        console.error('Error loading Lottie animation:', error)
      );

    return () => {
      cancelled = true;
    };
  }, [animationUrl, animationData]);

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
};

export default LottieAnimation;
