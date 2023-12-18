declare module '@/helper/debounce' {
  // The type of the function returned by debounce
  type DebouncedFunction<T extends (...args: any[]) => void> = (...args: Parameters<T>) => void;

  // The debounce function
  function debounce<T extends (...args: any[]) => void>(func: T, wait: number): DebouncedFunction<T>;

  // Export the debounce function
  export default debounce;
}
