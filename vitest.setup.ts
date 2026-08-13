/**
 * Shared Vitest setup: jest-dom matchers, RTL cleanup, and DOM polyfills
 * (`ResizeObserver`, `scrollIntoView`) needed by Radix/Recharts components.
 */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn();
}

afterEach(() => {
    cleanup();
});
