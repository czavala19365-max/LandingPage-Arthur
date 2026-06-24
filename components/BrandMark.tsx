import fs from "fs";
import path from "path";
import Image from "next/image";

interface BrandMarkProps {
  variant?: "light" | "dark";
  className?: string;
}

function logoExists(variant: "light" | "dark"): boolean {
  const file = variant === "dark" ? "logo-dark.svg" : "logo.svg";
  const logoPath = path.join(process.cwd(), "public", "brand", file);
  return fs.existsSync(logoPath);
}

export function BrandMark({ variant = "light", className }: BrandMarkProps) {
  const file = variant === "dark" ? "logo-dark.svg" : "logo.svg";

  if (logoExists(variant)) {
    return (
      <Image
        src={`/brand/${file}`}
        alt="Arthur"
        width={120}
        height={32}
        className={`brand-mark ${className ?? ""}`}
        priority={variant === "light"}
      />
    );
  }

  return (
    <span className={`brand-mark-fallback ${className ?? ""}`} aria-label="Arthur">
      arthur
    </span>
  );
}
