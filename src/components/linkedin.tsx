// LinkedIn-related components

import React from "react";

type LinkedInProps = {
  url: string;
  width: number;
  height: number;
  title: string;
};

export function LinkedInPost({
  url,
  width = 504,
  height = 400,
  title = "Embedded post",
}: LinkedInProps): JSX.Element {
  return (
    <div className={"rounded-lg overflow-hidden bg-white"}>
      <iframe
        src={url}
        height={height}
        width={width}
        frameBorder="0"
        allowFullScreen={false}
        title={title}
      ></iframe>
    </div>
  );
}
