declare module "helmet" {
  // Treat helmet as a callable middleware factory to satisfy TypeScript during build.
  const helmet: (...args: unknown[]) => unknown;
  export default helmet;
}

