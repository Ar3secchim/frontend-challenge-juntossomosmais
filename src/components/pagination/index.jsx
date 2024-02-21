import { useState } from "react";
import ArrowLeft from "../ui/icons/arrow-down.svg"; // Assuming the correct icon path
import ArrowRight from "../ui/icons/arrow-up.svg"; // Assuming the correct icon path

export function Pagination({ totalPages, setCurrentPagesNumber }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
    setCurrentPagesNumber(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    const visiblePages = 5;
    const maxVisiblePages = Math.min(totalPages, visiblePages);

    const startIndex = Math.max(
      0,
      Math.min(
        activePage - Math.floor(visiblePages / 2),
        totalPages - maxVisiblePages
      )
    );
    const endIndex = Math.min(startIndex + visiblePages - 1, totalPages - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      pages.push(
        <button
          key={i}
          value={i}
          className={`
            ${i === activePage ? "active text-bold underline" : ""}
            ${i === currentPage ? "current" : ""}
          `}
          onClick={(e) => handleClick(Number(e.target.value))}
        >
          {i + 1}
        </button>
      );
    }

    return pages;
  };

  const handlePrevious = () => {
    const prevPage = currentPage;
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    setActivePage(Math.max(0, prevPage - 1));
    setCurrentPagesNumber(prevPage);
  };

  const handleNext = () => {
    const prevPage = currentPage;
    setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
    setActivePage(Math.min(totalPages - 1, prevPage + 1));
    setCurrentPagesNumber(prevPage);
  };

  return (
    <div className="container flex gap-4 items-center justify-center">
      <button
        className="bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white"
        onClick={handlePrevious}
      >
        <img src={ArrowRight} alt="Previous" />
      </button>
      {renderPages()}

      <span
        className="bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white"
        onClick={handleNext}
      >
        <img src={ArrowLeft} alt="Next" />
      </span>
    </div>
  );
}
