import React from "react";

const links = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Snapchat", url: "https://snapchat.com" },
  { name: "YouTube", url: "https://youtube.com" },
  { name: "TikTok", url: "https://tiktok.com" },
];

export default function LinkTree() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-white p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-pink-500">Velkommen! 🌷</h1>
        <p className="text-gray-600 mb-4">Følg meg på sosiale medier!</p>
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-pink-400 text-white font-medium py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-pink-500 shadow-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
