# 📚 Book Vibe

A modern and responsive online bookstore interface built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**.

Book Vibe allows users to explore a curated collection of books through a clean, modern, and responsive interface.

---

## ✨ Features

* 📚 Browse popular books
* 🔎 Explore book information
* ⭐ Display book ratings
* 🏷️ Show book categories and tags
* 📖 Display author, pages, and publishing year
* 📱 Fully responsive design
* 🎨 Modern bookstore UI
* ⚡ Built with Next.js
* 🖼️ Optimized images using Next.js `Image`
* 🧩 Reusable `BookCard` component
* 📦 Book data loaded from JSON
* 🌙 Clean and minimal visual design

---

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Next/Image**
* **JSON**

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   └── shared/
│   │       └── homepage/
│   │           ├── Banner.tsx
│   │           ├── Books.tsx
│   │           └── BookCard.tsx
│   │
│   ├── types/
│   │   └── books.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
public/
└── booksData.json
```

---

## 🎨 UI Preview

### Home Page

Add your screenshot here:

```md
![Book Vibe Home Page](./screenshots/home-page.png)
```

### Books Collection

Add another screenshot here:

```md
![Books Collection](./screenshots/books-section.png)
```

> You can replace the image paths with your actual screenshot filenames.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd book-vibe
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## 📦 Book Data

Book information is stored in a JSON file:

```text
public/booksData.json
```

Each book contains information such as:

```json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "book-cover-url",
  "review": "Book description",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}
```

---

## 🧩 Component Architecture

The project follows a reusable component-based structure.

### `Books.tsx`

Responsible for:

* Fetching book data
* Rendering the books collection
* Mapping through the book data
* Passing individual book data to `BookCard`

### `BookCard.tsx`

Responsible for displaying:

* Book cover
* Book name
* Author
* Category
* Rating
* Tags
* Total pages
* Publishing year
* View Details button

This separation keeps the UI reusable and the code easier to maintain.

---

## 📱 Responsive Design

Book Vibe is designed to work across different screen sizes.

| Device     | Layout    |
| ---------- | --------- |
| 📱 Mobile  | 1 column  |
| 📲 Tablet  | 2 columns |
| 💻 Desktop | 4 columns |

---

## 🎯 Project Goals

The main goals of this project were to:

* Practice Next.js fundamentals
* Work with TypeScript
* Build reusable React components
* Practice responsive UI development
* Work with local JSON data
* Improve modern frontend development skills
* Create a clean and portfolio-ready bookstore interface

---

## 🔮 Future Improvements

* 🔐 User authentication
* ❤️ Add books to wishlist
* 📚 Listed Books page
* 📊 Pages to Read tracking
* 🔎 Advanced book search
* 🏷️ Category filtering
* 📖 Book details page
* ⭐ User reviews and ratings
* 💾 Persistent user data
* 🌐 Backend/API integration

---

## 👩‍💻 Author

**Jessica Mary Rozario**

UI/UX Designer & Frontend Developer

* GitHub: [Add your GitHub profile]
* LinkedIn: [Add your LinkedIn profile]
* Behance: [Add your Behance profile]

---

## 📄 License

This project was created for learning and portfolio purposes.
