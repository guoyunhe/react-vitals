import { ReactNode, useEffect, useRef, useState } from 'react';
import { onLCP } from 'web-vitals';

export interface AfterLCPProps {
  timeout?: number;
  children?: ReactNode;
}

export function AfterLCP({ timeout = 10000, children }: AfterLCPProps) {
  const mountedRef = useRef(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    mountedRef.current = true;

    onLCP(() => {
      console.log('LCP');
      if (mountedRef.current) {
        setActive(true);
      }
    });

    // when web vitals is not available, use a long timer for fallback
    const timer = window.setTimeout(() => {
      console.log(timeout);
      setActive(true);
    }, timeout);

    return () => {
      mountedRef.current = false;
      window.clearTimeout(timer);
    };
  }, []);

  if (!active) return null;

  return <>{children}</>;
}
