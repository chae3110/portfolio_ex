export default function Figure({data}) {
  const { url, desc, title } = data;
  return (
    <figure>
    <img alt={desc} src={url} />
    <figcaption>{title} {desc}</figcaption>
  </figure>
  );
}