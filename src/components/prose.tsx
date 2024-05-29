import React from "react";
import clsx from "clsx";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "prose-zinc prose dark:prose-invert prose-li:my-3",
      )}
      {...props}
    />
  );
}
