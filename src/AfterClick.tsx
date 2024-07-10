import React, { ReactNode, useEffect, useState } from 'react';

export interface AfterClickProps {
  children?: ReactNode;
}

export function AfterClick({ children }: AfterClickProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      const activate = () => setActive(true);
      window.document.documentElement.addEventListener('click', activate);
      return () => {
        window.document.documentElement.removeEventListener('click', activate);
      };
    }
  }, [active]);

  if (active) {
    return <>{children}</>;
  } else {
    return null;
  }
}
