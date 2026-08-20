import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePost } from "../APIs/fetchAPIs.js";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader.jsx";
import UserImage from "../assets/User.avif";
import { CurrUser, UserTocken } from "../context/GlobleStates.jsx";
import { useContext, useState } from "react";
import { LikeOnAPost, PostDelete } from "../APIs/postAPIs.js";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tocken } = useContext(UserTocken);
  const { user } = useContext(CurrUser);
  const [loading, setLoader] = useState(false);
  const [like, setLike] = useState(false);

  let { data, isLoading, isError } = useQuery({
    queryKey: ["SignlePost", id],
    queryFn: () => fetchSinglePost(id),
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError || !data) {
    console.log("Error");
  }
  const post = data.data;
  console.log(post);

  const handleDeleteButton = async (postId) => {
    //console.log("PostId:", post._id);
    setLoader(true);
    try {
      const data = await PostDelete(postId, tocken);

      if (data) {
        console.log("post Deleted:", data);

        alert("Delete:" + postId);
        navigate("/");
      }
    } catch (error) {
      console.log("Delete problem:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleUpdateButton = async (postId) => {
    alert("Update" + postId);
    try {
    } catch (error) {
      console.log("Update post:", error);
    } finally {
    }
  };

  const handleLikeEvent = async (id) => {
    alert("liked" + id);
    try {
      const data = await LikeOnAPost(id, tocken);

      if (data) {
        setLike(!like);
      }
    } catch (error) {
      console.log("Error from like:", error);
    }
  };
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-blue-600 mb-6 flex items-center gap-1"
      >
        ← Back
      </button>

      {/* Hero image */}
      <img
        src={post.image}
        alt="post cover"
        className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md mb-6"
      />

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Likes {post.likes.length}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Comments {post.comments.length}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {/* Like Button */}
        <button
          onClick={() => handleLikeEvent(post._id)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 "
        >
          {like ? (
            <svg
              className="w-5 h-5 fill-amber-700 stroke-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 fill-none stroke-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
          <span className="font-medium">{post.likes.length}</span>
        </button>

        {/* Comment Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200">
          <svg
            className="w-5 h-5 fill-none stroke-current"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="font-medium">Comment</span>
        </button>
      </div>
      <span>
        {user.email == data.data.user.email && (
          <button
            disabled={loading}
            onClick={() => handleDeleteButton(post._id)}
            className="cursor-pointer px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        )}
        {user.role == "admin" && (
          <div className="flex gap-2">
            <button
              onClick={() => handleUpdateButton(post._id)}
              className="cursor-pointer px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Ban post
            </button>
            <button
              disabled={loading}
              onClick={() => handleDeleteButton(post._id)}
              className="cursor-pointer px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        )}
      </span>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        {post.caption}
      </h1>

      {/* Meta row */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={UserImage}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">
              {post.user.username}
            </p>
            <p className="text-xs text-gray-400">{post.user.email}</p>
          </div>
        </div>

        <button></button>
      </div>

      {/* Content */}

      {/* Comments (static UI only) */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Comments ({post.comments.length})
        </h2>

        <div className="space-y-4">
          {post.comments.map((val) => {
            return (
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src={UserImage}
                    alt="commenter"
                    className="w-7 h-7 rounded-full"
                  />
                  <p className="text-sm font-medium text-gray-800">
                    {val.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
export default PostDetail;
