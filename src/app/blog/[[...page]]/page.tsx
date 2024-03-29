import Blog from "@_/components/Blog";

const max = 10;

type Props = {
  params: {
    page: number;
  };
};

export default async function Page({ params }: Props) {
  return (
    <Blog
      max={max}
      pagination
      page={params?.page ? Number(params.page) : undefined}
    />
  );
}
