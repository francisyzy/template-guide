import Link from 'next/link'
const GuidePreview = ({page}) => {
  return (
    <Link href={`/${page.slug}`}>
    <a className="block p-base border-4 rounded-lg">
      <h3>{page.title}</h3>
      <div className="mt-xs leading-6">{page.description}</div>
    </a>
    </Link>
  );
};

export default GuidePreview;
