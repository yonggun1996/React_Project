"use client";

import { useState } from "react";

interface Props {
  title: string;
  guide: string;
  maxLength: number;
}

export default function FormField({ title, guide, maxLength }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <button className="w-10 h-10 flex items-center justify-center bg-black border border-gray-600 rounded-md hover:bg-gray-900">
          <img src="/aisupport.svg" alt="AI교정버튼" className="w-5 h-5" />
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className="w-full h-40 p-3 rounded-md bg-gray-900 border border-gray-700 text-white resize-none"
      />
      <p className="text-sm text-gray-400 mb-3">{guide}</p>
      <div className="text-right text-sm text-gray-400">
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
