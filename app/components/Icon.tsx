type IconName = "mail" | "scholar" | "external" | "arrow" | "search" | "menu" | "close";

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    scholar: <><path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" /></>,
    external: <><path d="M14 4h6v6M20 4 10 14" /><path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
