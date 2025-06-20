import React, { useState } from 'react';

function EmojiPicker() {
  const emojis = ['❌', '😀', '😎', '😝', '👿','😷','😄'];
  const [text, setText] = useState("");

  const addEmoji = (emoji) => {
    setText(text + emoji);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Emoji with Text Picker</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        placeholder="Type something..."
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {emojis.map((emoji, i) => (
          <button
            key={i}
            onClick={() => addEmoji(emoji)}
            className="text-2xl px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EmojiPicker;
