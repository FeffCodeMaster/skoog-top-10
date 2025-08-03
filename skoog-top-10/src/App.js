import './App.css';
import CountdownToDate from './components/countdown'
import elin from './assets/members/elin.jpg'


function App() {
  return (
    <div className="App">
      <h1>Skoog Top 10</h1>
      <h2>Next to release their top 10 Spotify playlist is:</h2>
      <img src={elin}></img>
      <br />
      <span>Time until next playlist reveal</span>
      <CountdownToDate targetDate="2025-08-07T16:00:00" />
      <br />
      <span>Until then, enjoy some German Schlager </span>
      <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/352uZJbMoJhiCiDLL7UhQh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div >
  );
}

export default App;
