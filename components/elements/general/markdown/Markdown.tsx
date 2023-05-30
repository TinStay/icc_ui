import React, { useEffect, useState } from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const contentWithNewlines = content.replace(/(?:\\[rn]|[\r\n]+)+/g, "\n");

    remark()
      .use(remarkHtml)
      .process(contentWithNewlines, (err, file) => {
        if (err) throw err;
        setHtml(String(file));
      });
  }, [content]);

  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Markdown;
