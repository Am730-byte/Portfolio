export function getDeviceCapabilities(): { shouldReduceEffects: boolean | 'moderate' } {
  if (typeof window === 'undefined') return { shouldReduceEffects: false };

  const nav = navigator as any;
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  const slowConnection = connection && (connection.saveData || /2g/.test(connection.effectiveType));
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowMemory = nav.deviceMemory !== undefined && nav.deviceMemory < 4;
  const lowCores = nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 2;

  if (prefersReduced || slowConnection || (lowMemory && lowCores)) return { shouldReduceEffects: true };
  if (lowMemory || lowCores) return { shouldReduceEffects: 'moderate' };
  return { shouldReduceEffects: false };
}
