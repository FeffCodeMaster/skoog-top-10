import './App.css';
import CountdownToDate from './components/countdown'
import elin from './assets/members/elin.jpg'


function App() {
  return (
    <div className="App">
      <h1>Skoog Top 10</h1>
      <h2>Up next to share their Top 10 Spotify playlist:</h2>
      <img src={elin}></img>
      <br />
      <span>Countdown to reveal</span>
      <CountdownToDate targetDate="2025-08-07T16:00:00" />
      <br />
      <span>In the meantime, enjoy some German Schlager 🎶 </span>
      <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/352uZJbMoJhiCiDLL7UhQh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div >
  );
}

export default App;
