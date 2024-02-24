import { useState } from "react";
import ArrowLeft from "../ui/icons/arrow-down.svg"; // Assuming the correct icon path
import ArrowRight from "../ui/icons/arrow-up.svg"; // Assuming the correct icon path

export function Pagination({ totalPages, setCurrentPage, visiblePages = 5 }) {
  const [currentPage, setCurrentPageState] = useState(0);

  const handleClick = (pageNumber) => {
    setCurrentPageState(pageNumber);
    setCurrentPage(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    const maxVisiblePages = Math.min(totalPages, visiblePages);

    const startIndex = Math.max(
      0,
      Math.min(
        currentPage - Math.floor(visiblePages / 2),
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
            ${i === currentPage ? "active text-bold underline" : ""}
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
    const prevPage = Math.max(0, currentPage - 1);
    setCurrentPageState(prevPage);
    setCurrentPage(prevPage);
  };

  const handleNext = () => {
    const nextPage = Math.min(totalPages - 1, currentPage + 1);
    setCurrentPageState(nextPage);
    setCurrentPage(nextPage);
  };

  return (
    <div className="container flex gap-4 items-center justify-center">
      <button
        className="bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white"
        onClick={handlePrevious}
        disabled={currentPage === 0}
      >
        <img src={ArrowRight} alt="Previous" />
      </button>

      {renderPages()}

      <span
        className="bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
      >
        <img src={ArrowLeft} alt="Next" />
      </span>
    </div>
  );
}
