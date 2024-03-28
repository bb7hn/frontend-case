import React from 'react';

interface RenderIfProps {
  condition: boolean
  children:React.ReactNode
}
function RenderIf({ children, condition }:RenderIfProps) {
  if (!condition) return null;
  return (
    children
  );
}

export default RenderIf;
