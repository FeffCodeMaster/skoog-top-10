import "./profile.css";
import Blob from "../profile-blob/profile-blob";

const Profile = ({ img, name, className }) => {
    const imgUrl = require(`../../assets/members/${img}`)
    return <div className={`profile ${className}`}>
        <Blob className={"profile-blob"} imgUrl={imgUrl} />
        <div className="profile-name">{name}</div>
    </div>
}

export default Profile;