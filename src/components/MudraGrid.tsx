import { useState } from "react";
import { mudraLibrary } from "../data/mudraData";
import "./MudraGrid.css";

const MudraGrid = () => {
  const [query, setQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredMudras = mudraLibrary.filter((mudra) => {
    if (!query.trim()) return true;

    const search = query.trim().toLowerCase();

    return (
      mudra.usedFor.toLowerCase() === search ||
      mudra.keywords.some((k) => k.toLowerCase() === search)
    );
  });

  return (
    <section className="mudra-section">
      <h1 className="mudra-title">Mudra Healing Library</h1>

      <input
        type="text"
        placeholder="Search by disease (e.g. asthma, digestion)…"
        className="mudra-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className={`mudra-grid ${expandedCard ? "has-expanded" : ""}`}>
        {filteredMudras.map((mudra) => {
          const isExpanded = expandedCard === mudra.title;

          return (
            <div
              key={mudra.title}
              className={`mudra-card ${isExpanded ? "is-expanded" : ""}`}
              onClick={() => setExpandedCard(isExpanded ? null : mudra.title)}
            >
              {/* IMAGE + USED FOR */}
              <div className="mudra-card-front">
                {expandedCard === mudra.title && (
                  <button
                    className="mudra-close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                    aria-label="Close"
                  >
                    ×
                  </button>
                )}
                <div
                  className="mudra-image-bg"
                  style={{ backgroundImage: `url(${mudra.image})` }}
                />
                <img src={mudra.image} alt={mudra.title} />

                <div className="mudra-usedfor">
                  <span>Used for: </span>
                  <p>{mudra.usedFor}</p>
                </div>
              </div>

              {/* EXPANDED CONTENT */}
              {isExpanded && (
                <div className="mudra-expanded-content">
                  <h3>How to practice</h3>
                  <ol>
                    {mudra.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MudraGrid;
