import clsx from "clsx";
import React from "react";

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
