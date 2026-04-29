import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

/**
 * Desktop: centered “phone” frame with shadow. Mobile / WebView: full-width, no ring.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell-page">
      <div className="app-shell-device">
        <div
          id="app-shell-scroll"
          className="app-shell-scroll flex min-h-0 flex-1 flex-col"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
