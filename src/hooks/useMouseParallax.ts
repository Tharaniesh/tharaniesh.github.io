import { useEffect, useState } from 'react';

type MouseOffset = {
  x: number;
  y: number;
};

export function useMouseParallax(intensity = 12) {
  const [offset, setOffset] = useState<MouseOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = ((event.clientX / window.innerWidth) * 2 - 1) * intensity;
      const y = ((event.clientY / window.innerHeight) * 2 - 1) * intensity;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [intensity]);

  return offset;
}
