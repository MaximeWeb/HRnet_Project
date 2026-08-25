export default function SearchBar({ value, onChange }) {
  // Ce composant permet à l'utilisateur de rechercher
  // un employé grâce à une barre de recherche.
  //
  // Il reçoit deux props :
  // - value : la valeur actuellement saisie dans la barre de recherche
  // - onChange : la fonction appelée lorsque l'utilisateur écrit dans la barre

  return (
    <div className="search-control">

      <label htmlFor="search">
        Search:
      </label>

      {/* La valeur de l'input est contrôlée par le composant parent.
          Chaque modification déclenche la fonction onChange. */}
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search employees..."
      />

    </div>
  );
}