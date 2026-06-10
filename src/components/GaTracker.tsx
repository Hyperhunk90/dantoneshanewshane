'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/ga';

// Fires a page_view on first load and on every route change.
function PageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const query = searchParams?.toString();
    trackEvent('page_view', {
      page_path: query ? `${pathname}?${query}` : pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

// Logs taps on any tel: or sms: link, sitewide.
function TapTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const link = el?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackEvent('phone_call', { link_url: href, page_path: window.location.pathname });
      } else if (href.startsWith('sms:')) {
        trackEvent('text_click', { link_url: href, page_path: window.location.pathname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

export default function GaTracker() {
  return (
    <Suspense fallback={null}>
      <PageViews />
      <TapTracking />
    </Suspense>
  );
}
