// Helper function when using methods like Array.find() to check the data is there
export default function verify<T>(
  argument: T | undefined | null,
  message = 'This value was promised to be there.',
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}
