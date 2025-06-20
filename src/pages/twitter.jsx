
   import React, { useState } from "react";

const TweetInput = () => {
  const [tweet, setTweet] = useState("");
  const [tweetArray, setTweetArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const limit = 240;

  const handlePost = () => {
    if (tweet.trim() === "") return;

    const newTweet = {
      content: tweet,
      liked: false,
      disliked: false,
    };

    if (editIndex !== null) {
      const updatedTweets = [...tweetArray];
      updatedTweets[editIndex].content = tweet;
      setTweetArray(updatedTweets);
      setEditIndex(null);
    } else {
      setTweetArray([newTweet, ...tweetArray]);
    }

    setTweet("");
  };

  const handleDelete = (index) => {
    setTweetArray(tweetArray.filter((_, i) => i !== index));
    if (editIndex === index) {
      setTweet("");
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTweet(tweetArray[index].content);
  };

  const handleLike = (index) => {
    const updated = [...tweetArray];
    updated[index].liked = true;
    updated[index].disliked = false;
    setTweetArray(updated);
  };

  const handleDislike = (index) => {
   const updated = [...tweetArray];
    updated[index].liked = false;
    updated[index].disliked = true;
    setTweetArray(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 flex flex-col items-center py-10 px-4 sm:px-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-cyan-700 mb-6 text-center">
          Share Your Thoughts 💬
        </h2>

        <textarea
          rows={4}
          value={tweet}
          onChange={(e) => {
            if (e.target.value.length <= limit) {
              setTweet(e.target.value);
            }
          }}
          placeholder="What's on your mind?"
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-cyan-300 text-gray-700 placeholder-gray-400 transition-all"
        />

        <div className="flex justify-between items-center mt-2">
          <p
            className={`text-sm ${
              limit - tweet.length < 20 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {limit - tweet.length} characters remaining
          </p>
          <button
            onClick={handlePost}
            disabled={tweet.trim().length === 0}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-md transition disabled:opacity-50"
          >
            {editIndex !== null ? "Update Post" : "Post"}
          </button>
        </div>
      </div>

      <ul className="mt-10 w-full max-w-2xl space-y-4">
        {tweetArray.map((t, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <p className="text-gray-800 whitespace-pre-wrap">{t.content}</p>
            <div className="flex gap-4 mt-3 items-center">
              <button
                onClick={() => handleLike(index)}
                disabled={t.disliked}
                className={` px-3 py-1 rounded-full text-sm transition  ${
                  t.liked
                    ? "bg-green-100 text-green-600"
                    : "hover:bg-gray-100 text-gray-600"
                } disabled:opacity-50`}
              >
                👍 Like
              </button>

              <button
                onClick={() => handleDislike(index)}
                disabled={t.liked}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  t.disliked
                    ? "bg-red-100 text-red-600"
                    : "hover:bg-gray-100 text-gray-600"
                } disabled:opacity-50`}
              >
                👎 Dislike
              </button>

              <button
                onClick={() => handleEdit(index)}
                className="text-blue-600 hover:text-blue-800 font-medium ml-auto"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetInput;

  
