import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  return (
    
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="bg-[#1a1a1a] w-96 p-6 rounded-lg shadow hover:shadow-orange-500/30 transition">
          <h1>{user?.name}'s Profile 👤</h1>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong>Name :</strong>
              {user?.name}
            </p>
            <p>
              <strong>email :</strong>
              {user?.email}
            </p>
            <p>
              <strong>Role :</strong>
              {user?.role}
            </p>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
  );
};
export default Profile;
