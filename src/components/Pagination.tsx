
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const posthog = usePostHog();

  const handlePageChange = (newPage: number) => {
    const direction = newPage > currentPage ? 'next' : 'previous';
    posthog.capture('pagination_click', {
      direction,
      from_page: currentPage,
      to_page: newPage
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
