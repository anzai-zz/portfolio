import Link from "next/link";

type Props = {
  list: any[],
  href: string,
  page?: number,
  max: number,
};

export default function Pagination({ list, href, page = 1, max }: Props) {
  return (
    <ol className="m-7 flex justify-center gap-4">
      <li>
        {
          page !== 1 && (
            <Link href={`${href}${page !== 2 ? page - 1 : ""}`}>前へ</Link>
          )
        }
      </li>
      <li>
        {
          list.length > max * page && (
            <Link href={`${href}${page + 1}`}>次へ</Link>
          )
        }
      </li>
  </ol>
  );
}