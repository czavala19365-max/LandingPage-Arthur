import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className ?? ""}`}>
      <div className="phone-frame__bezel">
        <div className="phone-frame__island" aria-hidden="true" />
        <div className="phone-frame__screen">{children}</div>
      </div>
    </div>
  );
}
