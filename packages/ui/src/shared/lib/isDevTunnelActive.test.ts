import { describe, expect, it, vi } from 'vitest';
import { isDevTunnelActive } from './isDevTunnelActive';

describe('isDevTunnelActive', () => {
  it('should be a function', () => {
    expect(typeof isDevTunnelActive).toBe('function');
  });

  it('should execute without throwing errors in dev mode', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
      // Mock implementation
    });

    expect(() => {
      isDevTunnelActive();
    }).not.toThrow();

    consoleWarnSpy.mockRestore();
  });

  it('should call console.warn in dev environment', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
      // Mock implementation
    });

    isDevTunnelActive();

    if (import.meta.env.DEV) {
      expect(consoleWarnSpy).toHaveBeenCalled();
    }

    consoleWarnSpy.mockRestore();
  });
});
