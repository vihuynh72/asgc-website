// Development utilities to suppress common warnings
if (typeof window !== 'undefined') {
  // Suppress Grammarly warnings in development
  const originalError = console.error;
  console.error = (...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('data-new-gr-c-s-check-loaded') ||
       message.includes('data-gr-ext-installed') ||
       message.includes('Extra attributes from the server'))
    ) {
      return; // Suppress Grammarly-related warnings
    }
    originalError.apply(console, args);
  };

  // Suppress manifest warnings in development
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      message.includes('manifest')
    ) {
      return; // Suppress manifest warnings
    }
    originalWarn.apply(console, args);
  };
}
