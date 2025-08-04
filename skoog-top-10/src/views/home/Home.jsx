import TopBannerComponent from "../../components/top-banner/top-banner";
import CountdownSection from "../../components/countdown-section/countdown-section";
import LatestReleaseSection from "../../components/latest-release-section/latest-release-section";
import SectionWrapper from "../../components/section-wrapper/section-wrapper";
import config from "../../assets/configuration.json";

import "./home.css"

const Home = () => {
    const releases = config.releases.map(x => x.catergory === "Top 10 Greatest");
    console.log(releases);

    return <div className="home">
        <TopBannerComponent />
        <div className="home-release-section">
            <LatestReleaseSection />
            <CountdownSection />
        </div>
        {/* <div className="home-release-list">
            <SectionWrapper>
                <h2>Catergory Top 10 Greatest Songs</h2>
                <div>
                    {config.releases.map(release => {
                        if (release.catergory === "Top 10 Greatest") {
                            return <div>
                                <div>{release.name}</div>
                            </div>
                        }
                    })}
                </div>
            </SectionWrapper>
        </div> */}

    </div >
}

export default Home;