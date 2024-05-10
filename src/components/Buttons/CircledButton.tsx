import React from 'react';

const CircledButton = (props: { onPress?(): void; style?: object; children: React.ReactNode }) => {
  return (
    <button
      onClick={props.onPress}
      className={`p-[10px] rounded-full text-[var(--primary)] leading-[1.6] shadow-lg`}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default CircledButton;
