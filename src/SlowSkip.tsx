import React, { ReactNode, useEffect, useState } from 'react';

export interface SlowSkipProps {
  time?: number;
  children?: ReactNode;
}

export function SlowSkip({ children, time = 2000 }: SlowSkipProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(performance.now() < time);
  }, [time]);

  if (show) {
    return <>{children}</>;
  }

  return null;
}
