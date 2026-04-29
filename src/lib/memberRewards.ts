/**
 * 회원·리워드 — 백엔드 연동 전 플레이스홀더.
 * Phase 1: 로컬 상태만 (localStorage). API 생기면 교체.
 */
const STORAGE_KEYS = {
  demoSignupComplete: 'aircone_member_demo_signed_up',
  waitlistContactPhone: 'aircone_demo_waitlist_contact',
} as const;

export function saveWaitlistContactPhone(phoneDigits: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.waitlistContactPhone, phoneDigits);
  } catch {
    /* ignore */
  }
}

export function readWaitlistContactPhone(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.waitlistContactPhone);
  } catch {
    return null;
  }
}

export function readDemoMemberSignedUp(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.demoSignupComplete) === '1';
  } catch {
    return false;
  }
}

export function setDemoMemberSignedUp(done: boolean): void {
  try {
    if (done) localStorage.setItem(STORAGE_KEYS.demoSignupComplete, '1');
    else localStorage.removeItem(STORAGE_KEYS.demoSignupComplete);
  } catch {
    /* ignore */
  }
}

/** 백엔드 연동 시: bookingId + phone 으로 회원 가입·쿠폰 발급 호출 */
export async function registerMemberAfterBooking(_payload: {
  phone: string;
  bookingRef?: string;
}): Promise<{ ok: boolean }> {
  const base = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();
  if (base) {
    // TODO: POST /members 또는 booking 연동
    // await fetch(`${base.replace(/\/$/, '')}/members`, { ... })
    void _payload;
  }
  return { ok: true };
}
