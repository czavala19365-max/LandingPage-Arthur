import Link from "next/link";

interface PlatformFlipCardProps {
  num: string;
  title: string;
  description: string;
  href: string;
}

export function PlatformFlipCard({ num, title, description, href }: PlatformFlipCardProps) {
  return (
    <Link href={href} className="platform__cell platform-flip">
      <div className="platform-flip__scene">
        <div className="platform-flip__inner">
          <div className="platform-flip__face platform-flip__face--front">
            <span className="platform__num">{num}</span>
            <h3 className="platform__heading">{title}</h3>
          </div>
          <div className="platform-flip__face platform-flip__face--back">
            <span className="platform__num">{num}</span>
            <h3 className="platform__heading">{title}</h3>
            <p className="platform__desc">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
