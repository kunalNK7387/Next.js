"use client";

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("Button Cliked!");
      }}
    >
      Click Me!
    </button>
  );
}
