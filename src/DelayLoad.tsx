import React, { ReactNode, useEffect, useRef, useState } from 'react';

export interface DelayLoadProps {
  /**
   * Milliseconds to wait before rendering children
   * @default 3000
   */
  timeout?: number;
  children?: ReactNode;
}

export function DelayLoad({ timeout = 3000, children }: DelayLoadProps) {
  const mountedRef = useRef(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    mountedRef.current = true;

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
