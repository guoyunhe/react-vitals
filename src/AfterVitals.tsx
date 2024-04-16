import { useEffect, useState } from 'react';

export interface AfterVitalsProps {
  timeout?: number;
}

export function AfterVitals({ timeout = 5000 }: AfterVitalsProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive(true);
    }, timeout);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!active) return null;

  return <>TODO</>;
}
