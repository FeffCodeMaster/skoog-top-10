import SectionWrapper from "../section-wrapper/section-wrapper";
import config from "../../assets/configuration.json";
import ProfileBlob from "../profile-blob/profile-blob";

import "./release-list.css";

const ReleaseList = ({ catergory }) => {
    const getImgUrlByName = (name) => {
        return config.members.find(x => x.name === name).img;
    }

    return <div className="release-list">
        <SectionWrapper>
            <h1 className="release-list-title">CATEGORY</h1>
            <h2 className="release-list-subtitle">{`${catergory}`}</h2>
            <div className="release-list-container">
                {config.releases && config.releases.map(release => {
                    if (release.catergory === catergory) {
                        return <div className="release-list-item-container">
                            <ProfileBlob className="release-list-blob" imgUrl={require(`../../assets/members/${getImgUrlByName(release.name)}`)} />
                            <div className="release-list-name">{release.name}</div>
                            <a className="release-list-link" href={release.spotifyLink}>Playlist</a>
                        </div>
                    }
                })}
            </div>
        </SectionWrapper>
    </div>
}

export default ReleaseList;