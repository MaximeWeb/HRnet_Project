export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <div className="pagination">

      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages || 1}
      </span>

      <button
        onClick={onNext}
        disabled={
          currentPage === totalPages ||
          totalPages === 0
        }
      >
        Next
      </button>

    </div>
  );
}