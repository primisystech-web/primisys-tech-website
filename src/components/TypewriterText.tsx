import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
  onComplete,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else if (!completed) {
      setCompleted(true);
      onComplete?.();
    }
  }, [displayText, text, speed, started, completed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!completed && started && (
        <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-blink" />
      )}
    </span>
  );
};

export default TypewriterText;