import SectionWrapper from "../section-wrapper/section-wrapper";
import config from "../../assets/configuration.json";

import "./release-list.css";

const ReleaseList = () => {
    const getImgUrlByName = (name) => {
        return config.members.find(x => x.name === name).img;
    }

    return <div className="release-list">
        <SectionWrapper>
            <h2 className="release-list-title">CATEGORY - "Top 10 Greatest Songs"</h2>
            <div className="release-list-container">
                {config.releases.map(release => {
                    if (release.catergory === "Top 10 Greatest") {
                        return <div className="release-list-item-container">
                            <img className="release-list-img" src={require(`../../assets/members/${getImgUrlByName(release.name)}`)} />
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