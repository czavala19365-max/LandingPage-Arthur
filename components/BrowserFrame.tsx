import { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ children, className }: BrowserFrameProps) {
  if (!children) return null;
  return (
    <div className={`browser-frame ${className ?? ""}`}>
      <div className="browser-frame__chrome">
        <div className="browser-frame__dots" aria-hidden="true">
          <span className="browser-frame__dot browser-frame__dot--close" />
          <span className="browser-frame__dot browser-frame__dot--minimize" />
          <span className="browser-frame__dot browser-frame__dot--maximize" />
        </div>
        <div className="browser-frame__url">arthur-siguelo.vercel.app</div>
      </div>
      <div className="browser-frame__content">{children}</div>
    </div>
  );
}
