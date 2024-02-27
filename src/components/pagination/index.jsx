import { useState } from "react";
import ArrowLeft from "../ui/icons/arrow-down.svg"; // Assuming the correct icon path
import ArrowRight from "../ui/icons/arrow-up.svg"; // Assuming the correct icon path

export function Pagination({ totalPages, setCurrentPage }) {
  var VISIBLE_PAGES = 3;
  const [currentPage, setCurrentPageState] = useState(0);

  const handleClick = (pageNumber) => {
    setCurrentPageState(pageNumber);
    setCurrentPage(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    const maxVisiblePages = Math.min(totalPages, VISIBLE_PAGES);

    const startIndex = Math.max(
      0,
      Math.min(
        currentPage - Math.floor(VISIBLE_PAGES / 2),
        totalPages - maxVisiblePages
      )
    );
    const endIndex = Math.min(startIndex + VISIBLE_PAGES - 1, totalPages - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      pages.push(
        <button
          key={i}
          value={i}
          className={`
            ${
              i === currentPage
                ? "flex justify-center items-center flex-col px-3 text-[#9B9B9B] font-bold"
                : "mx-3"
            }
          `}
          onClick={(e) => handleClick(Number(e.target.value))}
        >
          {i + 1}
          <span className=" w-8 h-1 rounded-full bg-[#9B9B9B] "></span>
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
        className="disabled:bg-[#E5E5E5] bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white mx-3"
        onClick={handlePrevious}
        disabled={currentPage === 0}
      >
        <img src={ArrowRight} alt="Previous" />
      </button>

      {renderPages()}

      <button
        className="disabled:bg-[#E5E5E5] bg-[#4A4A4A] p-2 rounded-full w-8 h-8 text-center font-bold flex justify-center items-center text-white"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
      >
        <img src={ArrowLeft} alt="Next" />
      </button>
    </div>
  );
}
