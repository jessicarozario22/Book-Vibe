import BookCard from "@/src/app/components/shared/BookCard";
import type { Book } from "../../../types/books";
import { IBook } from "@/src/types/book.type";

const getBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span className="mb-3 inline-block rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-500">
              Explore Collection
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular Books
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Discover books worth reading, from timeless classics to
              modern stories that stay with you.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
          >
            View All Books →
          </button>

        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.slice(0, 9).map((book: IBook, ind: number) => {
            return <BookCard key={ind} book={book} />; 
          })}
        </div>

      </div>
    </section>
  );
};

export default Books;