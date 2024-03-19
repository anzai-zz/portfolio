import Blog from "@_/components/Blog";

type Props = {
  params: {
    page: number,
  }
};

export default async function Page({ params }: Props) {
  return (
    <Blog max={1} pagination page={params?.page ? Number(params.page) : undefined} />
  );
}