import SectionWrapper from "../section-wrapper/section-wrapper";
import Profile from "../profile/profile";
import config from "../../assets/configuration.json";

import './latest-release-section.css';

const LatestReleaseSection = () => {
    const { latestRelease } = config;
    const member = config.members.find(x => x.name === latestRelease.name);

    if (!member) {
        return <div className="latest-release-section">
            <SectionWrapper>
                <div className="latest-release-section-container">
                    <div className="latest-release-section-no-release">🥺 No Released Playlist Yet 🥺 </div>
                </div>
            </SectionWrapper>
        </div>
    }

    return <div className="latest-release-section">
        <SectionWrapper>
            <div className="latest-release-section-container">
                <div className="latest-release-section-title">Latest Playlist 🎶</div>
                <Profile className="latest-release-section-profile" name={member.name} img={member.img} />
                <iframe className="latest-release-section-player" data-testid="embed-iframe" src={latestRelease.spotifyLink} width="100%" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </SectionWrapper>
    </div>
}

export default LatestReleaseSection