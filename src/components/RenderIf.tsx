function RenderIf({ children, condition }:RenderIfProps) {
  if (!condition) return null;
  return (
    children
  );
}

export default RenderIf;
