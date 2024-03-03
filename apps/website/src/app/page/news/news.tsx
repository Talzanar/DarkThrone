import PageHeader from '../../../components/layout/pageHeader';

export default function NewsPage() {
  return (
    <div>
      <PageHeader text="News" />

      <div className="bg-zinc-800 text-zinc-200">
        <div className="max-w-screen-lg mx-auto py-10">Hello World</div>
      </div>
    </div>
  );
}
