import { useContext, useState } from "react";
import { UploadPost } from "../../APIs/postAPIs.js";
import { CurrUser, UserTocken } from "../../context/GlobleStates.jsx";
import { useNavigate } from "react-router-dom";

function PostUplaod(params) {
  let [caption, setCaption] = useState("");
  let [image, setImage] = useState();
  let [loading, setLoading] = useState(false);

  const { tocken } = useContext(UserTocken);
  const { user } = useContext(CurrUser);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(false);
  ////console.log("Tcoken from upload:", tocken);
  //console.log("USer from upload", user);
  const storedTocken = localStorage.getItem("authToken");
  const storedUserString = localStorage.getItem("userInfo");
  const storedUser = JSON.parse(storedUserString);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await UploadPost(caption, image, user, storedTocken);

      if (data) {
        alert("FIle Uploaded..");
        navigate("/user/profile");
      } else {
        alert("File not uploaded");
      }
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-400 transition-colors duration-300 bg-gray-50">
            {image ? (
              <div className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Selected: {image.name}
                </p>
              </div>
            ) : (
              <label className="cursor-pointer block">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    Click to upload image
                  </p>
                  <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                </div>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Caption Textarea */}
          <div className="relative">
            <textarea
              placeholder="Write your caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300 resize-none"
            />
            <span className="absolute bottom-3 right-3 text-xs text-gray-400">
              {caption.length}/500
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            {loading ? "Uploading..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostUplaod;
