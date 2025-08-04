import "./profile.css";

const Profile = ({ img, name, className }) => {
    const imgUrl = require(`../../assets/members/${img}`)
    return <div className={`profile ${className}`}>
        <img className="profile-img" src={imgUrl} />
        <div className="profile-name">{name}</div>
    </div>
}

export default Profile;