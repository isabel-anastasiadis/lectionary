export function toSnakeCase(input: string) {
  return input
    .toLowerCase()               // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '_') // Remove special characters except underscores and spaces
    .replace(/__+/g, '_');       // Remove duplicate underscores
}