import React, { CSSProperties, ReactNode } from 'react';

export interface SliceProps {
  width: number;
  height: number;
  size?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Slice({ width, height, size = 50, children, className, style }: SliceProps) {
  const column = Math.ceil(width / size);
  const row = Math.ceil(height / size);
  const cells = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      cells.push(
        <div
          key={i + '-' + j}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            overflow: 'hidden',
            left: j * size,
            top: i * size,
          }}
        >
          <div style={{ position: 'absolute', left: -j * size, top: -i * size }}>{children}</div>
        </div>,
      );
    }
  }

  return (
    <div
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style, width, height }}
    >
      {cells}
    </div>
  );
}
