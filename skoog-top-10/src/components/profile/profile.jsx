import "./profile.css";
import Blob from "../profile-blob/profile-blob";

const Profile = ({ img, name, className }) => {
    const imgUrl = img ? require(`../../assets/members/${img}`) : undefined;
    const profileName = name ? name : "???"
    return <div className={`profile ${className}`}>
        <Blob className={"profile-blob"} imgUrl={imgUrl} />
        <div className="profile-name">{profileName}</div>
    </div>
}

export default Profile;