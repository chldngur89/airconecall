/** 앱 스크롤은 `AppShell` 내부 `.app-shell-scroll`에 있습니다. SPA 화면 전환 시 여기까지 맞춥니다. */
export function scrollAppToTop(): void {
  document.getElementById('app-shell-scroll')?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
}
