import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch, SetStateAction } from "react";

type MoviePaginationType = {
  setMoviePerPage: Dispatch<SetStateAction<number>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  prevButtonDisabled: boolean;
  nextButtonDisabled: boolean;
};

enum buttonType {
  prev,
  next,
}

const MoviePagination = ({
  setMoviePerPage,
  setPageNumber,
  prevButtonDisabled,
  nextButtonDisabled,
}: MoviePaginationType) => {
  const handleValueChange = (value: string) => {
    setMoviePerPage(Number(value));
    setPageNumber(0);
  };

  const handlePageChange = (button: buttonType) => {
    if (button === buttonType.next) {
      setPageNumber((prev) => prev + 1);
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-between gap-5 my-5">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Movies per page</FieldLabel>
        <Select defaultValue="25" onValueChange={handleValueChange}>
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(buttonType.prev)}
              aria-disabled={prevButtonDisabled}
              className={
                prevButtonDisabled
                  ? "cursor-not-allowed opacity-50 pointer-events-none"
                  : ""
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(buttonType.next)}
              aria-disabled={nextButtonDisabled}
              className={
                nextButtonDisabled
                  ? "cursor-not-allowed opacity-50 pointer-events-none"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MoviePagination;
