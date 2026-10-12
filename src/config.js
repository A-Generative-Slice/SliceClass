// Feature switches, set through Vercel environment variables.
// Both default to OFF so company testers can open every lesson.

// Lock modules after Module 1 behind the "Upgrade" (payment) screen.
export const PAYWALL_ENABLED = import.meta.env.VITE_PAYWALL_ENABLED === 'true';

// Require a unit to be completed before the next one opens.
export const SEQUENTIAL_UNLOCK = import.meta.env.VITE_SEQUENTIAL_UNLOCK === 'true';
