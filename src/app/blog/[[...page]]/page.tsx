import Blog from "@_/components/Blog";

export const dynamic = "force-static";

type Props = {
  params: {
    page: number,
  }
};

export async function generateStaticParams() {

  return [{ page: "" }, { page: 1 }];
}

export default async function Page({ params }: Props) {
  return (
    <Blog max={1} pagination page={params?.page ? Number(params.page) : undefined} />
  );
}