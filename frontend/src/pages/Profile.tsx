import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  return (
    
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="bg-[#1a1a1a] w-96 p-6 rounded-lg shadow hover:shadow-orange-500/30 transition">
          <h1 className="text-xl font-bold mb-4">{user?.name}'s Profile 👤</h1>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-white">Name :</span>{" "}
              {user?.name}
            </p>
            <p>
              <span className="font-semibold text-white">Email :</span>{" "}
              {user?.email}
            </p>
            <p>
              <span className="font-semibold text-white">Role :</span>{" "}
              <span className="text-orange-500">{user?.role}</span>
            </p>
          </div>
          <button onClick={logout} className="mt-6 py-2 w-full bg-orange-500 rounded hover:bg-orange-600 transition">Logout</button>
        </div>
      </div>
  );
};
export default Profile;
