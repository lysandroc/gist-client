export const trimString = (text: string): string => text.toString().replace(/(^.{50}).*$/, '$1...');
