import { Article } from "./types";

export function Disclosure({ post }: { post: Article }) {
  if (post.hideDisclosure) {
    return null;
  }

  return (
    <p className={"mt-3 text-xs"}>
      <em>Disclosure</em>: Please be aware that some of the links on this site
      are affiliate links and, at no additional cost to you, I may earn a
      commission if you decide to make a purchase after clicking through the
      link. My recommendation of products or services is always based on my
      personal belief in the high quality and value of those products or
      services. See my{" "}
      <a href="/ethics" className={"underline"}>
        ethics
      </a>{" "}
      page for more details. As an Amazon Associate I earn a small commission
      from qualifying purchases.
    </p>
  );
}
