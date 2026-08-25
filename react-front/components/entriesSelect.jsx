export default function EntriesSelect({ value, onChange }) {
  // Ce composant permet à l'utilisateur de choisir
  // le nombre d'employés affichés par page.
  //
  // Il reçoit deux props :
  // - value : la valeur actuellement sélectionnée
  // - onChange : la fonction appelée lorsque l'utilisateur change de valeur

  return (
    <div className="entries-control">

      <label htmlFor="entries">
        Show
      </label>

      <select
        id="entries"
        value={value}
        onChange={onChange}
      >
        {/* Les différentes quantités d'employés
            que l'utilisateur peut afficher par page */}
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <span>entries</span>
    </div>
  );
}