import { useEffect, useRef, useState } from "react";
import "./Calendar.css";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar({ value = "", onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [currentDate, setCurrentDate] = useState(
    value ? new Date(`${value}T00:00:00`) : new Date(),
  );

  const calendarRef = useRef(null);

  // Ferme le calendrier lorsqu'on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Si la valeur change depuis le composant parent,
  // le calendrier se positionne sur cette date
  useEffect(() => {
    if (value) {
      setCurrentDate(new Date(`${value}T00:00:00`));
    }
  }, [value]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);

  const lastDayOfMonth = new Date(year, month + 1, 0);

  // JavaScript :
  // dimanche = 0
  //
  // Ici on veut :
  // lundi = 0
  const firstDay = (firstDayOfMonth.getDay() + 6) % 7;

  const daysInMonth = lastDayOfMonth.getDate();

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Mois précédent
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Mois suivant
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Sélection d'une date depuis notre calendrier
  const selectDate = (day) => {
    const selectedDate = new Date(year, month, day);

    const formattedDate = [
      selectedDate.getFullYear(),

      String(selectedDate.getMonth() + 1).padStart(2, "0"),

      String(selectedDate.getDate()).padStart(2, "0"),
    ].join("-");

    onChange?.(formattedDate);

    setIsOpen(false);
  };

  // Modification directe du input
  const handleInputChange = (event) => {
    const newValue = event.target.value;

    onChange?.(newValue);

    if (newValue) {
      setCurrentDate(new Date(`${newValue}T00:00:00`));
    }
  };

  // Vérifie si un jour correspond
  // à la date actuellement sélectionnée
  const isSelected = (day) => {
    if (!day || !value) {
      return false;
    }

    const selectedDate = new Date(`${value}T00:00:00`);

    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  // Construction des cases du calendrier
  const days = [];

  // Cases vides avant le premier jour du mois
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Jours du mois
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="rcp-calendar-container" ref={calendarRef}>
      {/* Champ date */}
      <div className="rcp-date-field">
        <input
          type="date"
          className="rcp-date-input"
          value={value}
          onChange={handleInputChange}
        />

        {/* Bouton qui ouvre notre calendrier */}
        <button
          type="button"
          className="rcp-calendar-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Open calendar"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="
                M7 2v3
                M17 2v3
                M3.5 9h17
                M5 4h14
                a2 2 0 0 1 2 2
                v14
                a2 2 0 0 1-2 2
                H5
                a2 2 0 0 1-2-2
                V6
                a2 2 0 0 1 2-2Z
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Calendrier personnalisé */}
      {isOpen && (
        <div className="rcp-calendar-popup">
          {/* Header */}
          <div className="rcp-calendar-header">
            <button
              type="button"
              className="rcp-calendar-nav"
              onClick={previousMonth}
              aria-label="Previous month"
            >
              ‹
            </button>

            <h2>{monthName}</h2>

            <button
              type="button"
              className="rcp-calendar-nav"
              onClick={nextMonth}
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          {/* Jours de la semaine */}
          <div className="rcp-calendar-weekdays">
            {weekDays.map((day) => (
              <div key={day} className="rcp-calendar-weekday">
                {day}
              </div>
            ))}
          </div>

          {/* Jours */}
          <div className="rcp-calendar-days">
            {days.map((day, index) => (
              <button
                key={index}
                type="button"
                disabled={day === null}
                className={`
                    rcp-calendar-day
                    ${day === null ? "rcp-empty" : ""}
                    ${isSelected(day) ? "rcp-selected" : ""}
                  `}
                onClick={() => {
                  if (day) {
                    selectDate(day);
                  }
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
