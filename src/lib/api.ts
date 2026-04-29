/**
 * Call your backend when `VITE_API_BASE_URL` is set (e.g. on Vercel).
 * Default: no-op so the demo/mock flow works offline.
 */
export async function submitRequest(payload: Record<string, unknown>): Promise<void> {
  const base = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim()

  if (!base) return

  // TODO: 서버 준비 후 아래 주석 해제하고 엔드포인트·스키마를 맞추세요.
  // await fetch(`${base.replace(/\/$/, '')}/requests`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  void payload
}
