import TopBannerComponent from "../../components/top-banner/top-banner";
import CountdownSection from "../../components/countdown-section/countdown-section";
import LatestReleaseSection from "../../components/latest-release-section/latest-release-section";
import ReleaseList from "../../components/release-list/release-list";
import config from "../../assets/configuration.json";
import SectionWrapper from "../../components/section-wrapper/section-wrapper";

import "./home.css"

const Home = () => {
    const releases = config.releases.map(x => x.catergory === "Top 10 Greatest");

    return <div className="home">
        <TopBannerComponent />
        <div className="home-release-section">
            <LatestReleaseSection />
            <div className="home-youtube-container">
                <SectionWrapper>
                    <div className="home-youtube-container-title">Songs missing on Spotify</div>
                    <div>
                        <span>#3</span>
                        <iframe src="https://www.youtube.com/embed/z96e2aGBhbo?si=eNmfxKDBUkVB3ztr" allowfullscreen></iframe>
                    </div>
                    <div>
                        <span>#4</span>
                        <iframe src="https://www.youtube.com/embed/IBUd6umotmI?si=U6Iubr6E1YsZXYej" allowfullscreen></iframe>
                    </div>
                    <div>
                        <span>#6</span>
                        <iframe src="https://www.youtube.com/embed/6dKKTTlfG3Q?si=o8GJ1vOplYliFCSA" allowfullscreen></iframe>
                    </div>
                </SectionWrapper>
            </div>
        </div>
        <div className="home-release-list">
            <ReleaseList catergory={"Top 10 Best Songs"} />
        </div>
    </div >
}

export default Home;