import { useEffect, useState } from 'react';

export function useTypingText(text: string, speed = 45, delay = 400) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let interval = 0 as unknown as ReturnType<typeof window.setInterval>;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [text, speed, delay]);

  return displayedText;
}
