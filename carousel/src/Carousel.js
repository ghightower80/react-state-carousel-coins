import React, { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    // Ensure we don't go beyond the last image
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    // Ensure we don't go below the first image
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {/* Arrow for moving to previous image */}
        {currCardIdx !== 0 && (
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
            data-testid="left-arrow" // Adding data-testid for testing
          />
        )}
        {/* Card component displaying current image */}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* Arrow for moving to next image */}
        {currCardIdx !== total - 1 && (
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
            data-testid="right-arrow" // Adding data-testid for testing
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;
