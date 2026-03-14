import { useAuth } from "../context/AuthContext";

const Profile = ()=>{
    const {user,logout} = useAuth();
    return(
        <>
            <h1>{user?.name}'s Profile</h1>
            <p><strong>Name :</strong>{user?.name}</p>
            <p><strong>email :</strong>{user?.email}</p>
            <p><strong>Role :</strong></p>
        </>
    )
}
export default Profile;