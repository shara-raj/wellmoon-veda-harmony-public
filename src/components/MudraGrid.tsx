import { useState } from "react";
import { mudraLibrary } from "../data/mudraData";
import "./MudraGrid.css";

const MudraGrid = () => {
  const [query, setQuery] = useState("");
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const filteredMudras = mudraLibrary.filter((mudra) => {
    if (!query.trim()) return true;

    const search = query.trim().toLowerCase();

    const diseaseMatch = mudra.usedFor.toLowerCase() === search;

    const keywordMatch = mudra.keywords.some((k) => k.toLowerCase() === search);

    return diseaseMatch || keywordMatch;
  });

  return (
    <section className="mudra-section">
      <h1 className="mudra-title">Mudra Healing Library</h1>

      <input
        type="text"
        placeholder="Search by disease (e.g. asthma, digestion, stress)…"
        className="mudra-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mudra-grid">
        {filteredMudras.map((mudra) => (
          <div
            className="mudra-card"
            key={mudra.title}
            onClick={() =>
              setActiveCard(activeCard === mudra.title ? null : mudra.title)
            }
          >
            <div
              className={`mudra-card-inner ${
                activeCard === mudra.title ? "is-flipped" : ""
              }`}
            >
              {/* FRONT */}
              <div className="mudra-card-front">
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

              {/* BACK */}
              <div className="mudra-card-back">
                {/* <div className="disease-name">
                  <h5>Used for</h5>
                  <h3>{mudra.usedFor}</h3>
                </div> */}
                <div className="mudra-instructions">
                  <h3>How to practice</h3>
                  <ol>
                    {mudra.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MudraGrid;
