import React from 'react';


interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  return (
    <div>
      Book Details Page
      <p>Book ID: {id}</p>
    </div>
  );
};

export default BookDetailsPage;