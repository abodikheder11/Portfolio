// lib/utils.js
import { clsx } from "clsx";

/**
 * cn - class name utility that combines conditional and default classes
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return clsx(inputs);
}
