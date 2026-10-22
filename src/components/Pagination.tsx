
import { Button } from "@/components/ui/button";
import { track, type ContentType } from "@/lib/analytics";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  /** Which taxonomy is being paged through. */
  taxonomy: ContentType;
}

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange, taxonomy }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    const direction = newPage > currentPage ? 'next' : 'previous';
    track("pagination_navigated", {
      taxonomy,
      direction,
      from_page: currentPage,
      to_page: newPage,
      total_pages: totalPages,
    });
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="flex items-center px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
