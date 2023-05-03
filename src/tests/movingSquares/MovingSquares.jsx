import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function MovingSquares() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const squareSize = 50;
    const speed = 200; // pixels per second

    function getRandomTarget() {
      const targetX = Math.floor(Math.random() * (containerWidth - squareSize));
      const targetY = Math.floor(
        Math.random() * (containerHeight - squareSize)
      );
      return { x: targetX, y: targetY };
    }

    let requestId;
    let startTime;
    let target = getRandomTarget();

    function animate(time) {
      if (!startTime) {
        startTime = time;
      }
      const elapsedTime = time - startTime;
      const { x: currentX, y: currentY } = position;
      const { x: targetX, y: targetY } = target;
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const duration = (distance / speed) * 1000;
      const progress = Math.min(1, elapsedTime / duration);
      const x = currentX + deltaX * progress;
      const y = currentY + deltaY * progress;
      setPosition({ x, y });
      if (progress >= 1) {
        target = getRandomTarget();
        startTime = null;
      }
      requestId = requestAnimationFrame(animate);
    }

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="containerTest" ref={containerRef}>
      <div
        className="square"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
}

export default MovingSquares;
