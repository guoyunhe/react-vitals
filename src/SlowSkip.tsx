import React, { ReactNode, useEffect, useMemo, useState } from 'react';

export interface SlowSkipProps {
  timeout?: number;
  children?: ReactNode;
}

export function SlowSkip({ children, timeout = 1500 }: SlowSkipProps) {
  const [show, setShow] = useState(false);
  const now = useMemo(() => performance.now(), []);

  useEffect(() => {
    setShow(now < timeout || now > 60000);
  }, [timeout, now]);

  if (show) {
    return <>{children}</>;
  }

  return null;
}
