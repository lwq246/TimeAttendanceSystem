import React from "react";
import { Link } from "react-router-dom";

type Props = {
  className: string;
  color: string;
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  href: string;
};

const PageWidget: React.FC<Props> = ({
  className,
  color,
  title,
  titleColor,
  description,
  descriptionColor,
  href,
}) => {
  return (
    <Link
      to={href}
      className={`card bg-${color} hoverable ${className} flex flex-col items-center justify-center`}
    >
      <div className="card-body text-center">
        <div className={`text-${titleColor} fw-bold fs-2`}>{title}</div>
        <div className={`fw-semibold text-${descriptionColor}`}>
          {description}
        </div>
      </div>
    </Link>
  );
};

export { PageWidget };
