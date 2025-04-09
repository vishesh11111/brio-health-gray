// This is a simplified example - adjust based on what package you're using
import { useQueryState as useNextQueryState } from 'next-usequerystate'; // Or whatever package you're using

export function useQueryState<T>(
  key: string,
  options: {
    defaultValue: string;
    parse: (value: string) => T;
    serialize: (value: T) => string;
  }
) {
  return useNextQueryState(key, options);
}
