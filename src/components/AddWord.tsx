"use client";
import { useState } from "react";

interface AddWordProps {
  onAddWord: (word: string) => void;
}

const AddWord: React.FC<AddWordProps> = ({ onAddWord }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim()) {
      onAddWord(word);
      setWord("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border p-2"
        placeholder="Adicionar palavra"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Adicionar
      </button>
    </form>
  );
};

export default AddWord;
