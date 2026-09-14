// A small, safe renderer for [link text](https://...) in editable content.
// All other text stays plain text; raw HTML is never interpreted.
export function LinkedText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    return link ? (
      <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>
    ) : part;
  });
}
