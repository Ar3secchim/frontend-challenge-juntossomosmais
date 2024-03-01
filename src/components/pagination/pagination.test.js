import { fireEvent, render, screen } from "@testing-library/react";
import{ Pagination} from "./index"

jest.mock("../ui/icons/arrow-down.svg", () => "ArrowLeft");
jest.mock("../ui/icons/arrow-up.svg", () => "ArrowRight");

test("should render the correct number of pages", () => {
  const totalPages = 10;
  const setCurrentPage = jest.fn();

  render(
    <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
  );

  const pages = screen.getAllByRole("button");
  expect(pages.length).toBe(totalPages/2);
});
