"use client";

export interface SidebarNavItem {
  title: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  items?: SidebarNavItem[];
}

const sidebarItems: SidebarNavItem[] = [
  {
    title: "Reconnaissance",
    items: [
      { title: "Nmap", href: "/services/pen-test/nmap" },
      { title: "Whois", href: "/services/pen-test/whois" },
    ],
  },
  {
    title: "Exploitation",
    items: [{ title: "Coming Soon" }],
  },
];

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarProps {
  items: SidebarNavItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const items = sidebarItems;

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="top-50 fixed left-0 z-40 h-screen w-64 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-black">
        <h2 className="p-4 text-xl font-semibold text-gray-900 dark:text-white">
          Penetration Testing
        </h2>
        <ul className="space-y-2 font-medium">
          {items.map((item, index) => (
            <li key={index}>
              <div className="pb-8">
                <h4 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                {item.items ? (
                  <ul className="space-y-2 pl-4">
                    {item.items.map((subItem, subIndex) =>
                      subItem.href ? (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={subIndex}
                          className="flex items-center rounded-lg p-2 text-gray-900 opacity-60 dark:text-white"
                        >
                          {subItem.title}
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
