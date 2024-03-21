import Blog from "@_/components/Blog";

export const dynamic = "force-dynamic";

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