import { cn, formatDateTime } from "@/lib/utils";
import React from "react";

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return (
    <p className={cn("text-[var(--light-100)]", className)}>
      {formatDateTime(date)}
    </p>
  );
};

export default FormattedDateTime;
