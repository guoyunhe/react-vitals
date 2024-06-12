import React, { ReactNode, useEffect, useMemo, useState } from 'react';

export interface SlowSkipProps {
  /**
   * Milliseconds related to navigation start.
   * If the component is mounted later than this time, content will **NOT** be rendered.
   */
  start?: number;
  /**
   * Milliseconds related to navigation start.
   * If the component is mounted later than this time, content will be rendered.
   */
  end?: number;
  children?: ReactNode;
}

export function SlowSkip({ children, start = 1500, end = 10000 }: SlowSkipProps) {
  const [show, setShow] = useState(false);
  const now = useMemo(() => performance.now(), []);

  useEffect(() => {
    setShow(now < start || now > end);
  }, [start, now]);

  if (show) {
    return <>{children}</>;
  }

  return null;
}
