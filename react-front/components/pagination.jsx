export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  // Ce composant permet de naviguer entre les différentes
  // pages de la liste des employés.
  //
  // Il reçoit 4 props :
  // - currentPage : la page actuellement affichée
  // - totalPages : le nombre total de pages
  // - onPrevious : fonction permettant de revenir à la page précédente
  // - onNext : fonction permettant d'aller à la page suivante

  return (
    <div className="pagination">

      {/* Bouton permettant de revenir à la page précédente.
          Il est désactivé lorsque l'on est sur la première page. */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Affiche le numéro de la page actuelle
          ainsi que le nombre total de pages. */}
      <span>
        Page {currentPage} of {totalPages || 1}
      </span>

      {/* Bouton permettant d'aller à la page suivante.
          Il est désactivé lorsque l'on est sur la dernière page
          ou lorsqu'il n'y a aucune page. */}
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