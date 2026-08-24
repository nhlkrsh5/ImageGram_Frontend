import { useEffect } from "react";
import { fetchAllPost } from "../APIs/fetchAPIs.js";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader.jsx";
import { useNavigate } from "react-router-dom";

function Home(params) {
  //async function fetchAllPost(params) {}
  const navigate = useNavigate();
  let { data, isLoading, isError } = useQuery({
    queryKey: ["Post"],
    queryFn: fetchAllPost,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  if (data) {
    console.log(data);
  }

  const PostOnCLikcHandler = () => {};
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {data.map((post) => {
          return (
            <div
              onClick={() => {
                navigate(`/detail/${post._id}`);
              }}
              key={post._id}
              className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 rounded-2xl overflow-hidden"
            >
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt="Shoes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg font-semibold text-base-content">
                  Caption
                </h2>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
