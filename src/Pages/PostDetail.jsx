import { useNavigate, useParams } from "react-router-dom";
import { fetchSinglePost } from "../APIs/fetchAPIs.js";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader.jsx";
import UserImage from "../assets/User.avif";
import { CurrUser, UserTocken } from "../context/GlobleStates.jsx";
import { useContext } from "react";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tocken } = useContext(UserTocken);
  const { user } = useContext(CurrUser);

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

  const handleDeleteButton = () => {
    alert("Delete");
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
      <span>
        {user.email == data.data.user.email && (
          <button
            onClick={handleDeleteButton}
            className="cursor-pointer px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
          >
            Delete
          </button>
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
