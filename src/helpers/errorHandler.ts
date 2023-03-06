export default function errorHandler(error: Error | unknown): void {
  // TODO: make error handling more robust
  console.warn(error)
}
