import Image from "next/image";
import type { Book } from "../../../types/books";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-xl hover:shadow-slate-200/60">

      {/* Book Cover */}
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/40 to-slate-100 p-8">

        {/* Category */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          <span className="text-orange-500">★</span>
          {book.rating}
        </div>

        {/* Image */}
        {book.image ? (
          <Image
            src={book.image}
            alt={book.bookName || "Book cover"}
            width={300}
            height={400}
            className="h-64 w-auto object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-64 w-44 items-center justify-center rounded-xl bg-slate-200 text-center text-sm font-medium text-slate-500">
            No Cover Available
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-5">

        <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          by {book.author}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>{book.totalPages} pages</span>
          <span>{book.yearOfPublishing}</span>
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-500"
        >
          View Details
        </button>

      </div>
    </article>
  );
};

export default BookCard;