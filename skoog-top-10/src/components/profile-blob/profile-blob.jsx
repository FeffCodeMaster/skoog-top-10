import "./profile-blob.css"

const ProfileBlob = ({ imgUrl, className }) => {
    return <div className={`blob ${className}`} >
        <img className="blob-img" src={imgUrl} />
    </div >
}

export default ProfileBlob;