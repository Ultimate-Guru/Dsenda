import type { ReactNode } from "react";

const HTML_LOOKS = /<\/?[a-z][\s\S]*>/i;

const htmlStyles =
  "[&_h1]:mt-10 [&_h1]:mb-3 [&_h1]:text-2xl [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl " +
  "[&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_a]:text-[#4F46E5] [&_a]:underline [&_img]:my-6 [&_img]:rounded-xl";

// Turns **bold** into bold text
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

function renderText(content: string) {
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(
        <p key={blocks.length} className="mb-4 leading-relaxed">
          {inline(paragraph.join(" "))}
        </p>
      );
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={blocks.length} className="mb-6 space-y-3">
          {list.map((item, i) => (
            <li key={i} className="rounded-xl bg-[#EDEDFC] px-4 py-3">
              {inline(item)}
            </li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  for (const raw of content.split(/\r?\n/)) {
    const line = raw.trim();
    const heading = line.match(/^#{1,3}\s+(.*)$/);
    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (!line) {
      flushParagraph();
      flushList();
    } else if (heading) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2 key={blocks.length} className="mt-10 mb-3 text-2xl text-[#191919]">
          {heading[1]}
        </h2>
      );
    } else if (bullet) {
      flushParagraph();
      list.push(bullet[1]);
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}

export default function PostBody({ content }: { content: string }) {
  if (HTML_LOOKS.test(content)) {
    return (
      <div
        className={`text-[#191919] ${htmlStyles}`}
        // Content comes from the Dsenda backend (written by your team)
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return <div className="text-[#191919]">{renderText(content)}</div>;
}
