export const isString = (fn: string): fn is string => typeof fn === 'string';
export const validatePath = (path: string): string => (path.charAt(0) !== '/' ? '/' + path : path);
