import UserImage from "../../assets/User.avif";

// Placeholder data — swap for real props/state later
const user = {
  username: "jane_doe",
  email: "jane@example.com",
  role: "member",
};

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/seed/1/600/600",
    caption: "Golden hour on the rooftop",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/2/600/600",
    caption: "Coffee, notebook, quiet morning",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/3/600/600",
    caption: "Weekend hike, north trail",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/4/600/600",
    caption: "New lens, same old street",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/5/600/600",
    caption: "Late night studio session",
  },
];

function Profile() {
  const frameTotal = posts.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #d4a373 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 pt-14">
        {/* Enhanced Profile Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            {/* Profile Image with Ring */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={UserImage}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-400 w-5 h-5 rounded-full border-2 border-white shadow-lg" />
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {user.username}
                </h1>
                <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  {user.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="text-sm font-mono">
                    {String(frameTotal).padStart(3, "0")} exposures
                  </span>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button className="group relative px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-200 flex items-center gap-2 shrink-0">
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              LOG OUT
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Posts", value: frameTotal, icon: "📸" },
            { label: "Followers", value: "2.4K", icon: "👥" },
            { label: "Following", value: "183", icon: "🔗" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-50 text-sm text-gray-400 font-mono tracking-wider">
              GALLERY
            </span>
          </div>
        </div>

        {/* Contact Sheet */}
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <span>📷</span> Contact Sheet
          </h2>
          <span className="font-mono text-sm text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">
            FRAME 001–{String(frameTotal).padStart(3, "0")}
          </span>
        </div>

        {/* Grid */}
        {frameTotal === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="text-6xl mb-4">🎞️</div>
            <p className="font-mono text-sm tracking-wide text-gray-600">
              NO EXPOSURES YET
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Posts you publish will show up here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Frame Number Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 rounded-full">
                  #{String(i + 1).padStart(2, "0")}
                </div>

                {/* Overlay Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {post.caption}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-lg transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
