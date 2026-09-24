"use client";

export default function MenuButton() {
  return (
    <button
      className="menu-button"
      onClick={() => alert("Mobile menu")}
      aria-label="Open menu"
    >
      ☰
    </button>
  );
}