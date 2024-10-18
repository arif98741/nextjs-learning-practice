"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  console.log(`current page ${pathName}`);

  return (
    <>
      {children}

      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              isActive ? "active font-bold mr-4" : "text-blue-600 button mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
