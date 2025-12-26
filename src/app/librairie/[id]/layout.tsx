import { Metadata } from "next";
import { books, getBookById } from "@/data/books";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const book = getBookById(parseInt(id));

  if (!book) {
    return {
      title: "Livre non trouve",
    };
  }

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | Librairie RDF`,
      description: book.description,
      images: [
        {
          url: book.coverImage,
          width: 600,
          height: 800,
          alt: book.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
