import { useEffect } from "react";
import "../index.css";

export default function GlobalCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const trail = document.createElement("div");

    cursor.className = "cursor-main";
    trail.className = "cursor-trail";

    document.body.appendChild(cursor);
    document.body.appendChild(trail);

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    const clickEffect = () => {
      cursor.classList.add("cursor-click");
      setTimeout(() => cursor.classList.remove("cursor-click"), 300);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", clickEffect);

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", clickEffect);
      cursor.remove();
      trail.remove();
    };
  }, []);

  return null;
}
