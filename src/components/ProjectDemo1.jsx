import React, { useState } from "react";

export default function ProjectDemo1() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment.trim()]);
      setComment("");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-cyan-300 flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold mb-6">👨‍💻 ¡Bienvenido al Modo React!</h2>

      <form onSubmit={handleSubmit} className="max-w-md w-full mb-6">
        <input
          type="text"
          placeholder="> Escribe tu comentario aquí"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          className="w-full bg-cyan-400 text-gray-900 font-bold py-3 rounded-md hover:bg-cyan-500 transition"
        >
          Enviar comentario
        </button>
      </form>

      <ul className="w-full max-w-md list-none p-0 space-y-3">
        {comments.map((c, i) => (
          <li
            key={i}
            className="bg-gray-800 border-l-4 border-cyan-400 p-3 rounded-md text-gray-200 font-mono"
          >
            {`> ${c}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
