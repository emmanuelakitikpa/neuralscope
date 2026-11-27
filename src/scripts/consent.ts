// Helper pour gérer le consentement RGPD.
// Utilisé par les scripts AdSense et Analytics pour savoir s'ils peuvent se charger.

export type Consent = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'neuralscope_consent';

export function getConsent(): Consent {
  if (typeof localStorage === 'undefined') return null;
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === 'accepted';
}

export function onConsentChange(callback: (consent: Consent) => void): void {
  if (typeof window === 'undefined') return;
  window.addEventListener('cookie-consent', (e: Event) => {
    const custom = e as CustomEvent<{ consent: Consent }>;
    callback(custom.detail.consent);
  });
}

// À appeler depuis la page de politique de confidentialité
// pour permettre à l'utilisateur de retirer son consentement.
export function resetConsent(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}