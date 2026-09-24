import { useState, useEffect } from 'react';

export function useEasterEggs() {
  const [isOverrideActive, setIsOverrideActive] = useState(false);
  const [isKonamiActive, setIsKonamiActive] = useState(false);

  useEffect(() => {
    let keyBuffer: string[] = [];
    const secretCode = 'nouman2077';
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/textareas
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Check 'nouman2077'
      keyBuffer.push(e.key.toLowerCase());
      if (keyBuffer.length > 20) {
        keyBuffer.shift();
      }
      const currentString = keyBuffer.join('');
      if (currentString.includes(secretCode)) {
        setIsOverrideActive(true);
        keyBuffer = [];
      }

      // Check Konami Code
      if (e.key === konamiSequence[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          setIsKonamiActive(true);
          konamiIndex = 0;
          setTimeout(() => setIsKonamiActive(false), 5000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOverrideActive,
    setIsOverrideActive,
    isKonamiActive,
    setIsKonamiActive
  };
}
