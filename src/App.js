import './App.css';
import FilmContainer from "./containers/FilmContainer";

function App() {
  function goToWebsite() {
      window.location.href='https://www.imdb.com/calendar/?region=gb';
  }

  return (
      <>
        <FilmContainer/>
        <button onClick={() => goToWebsite()}>View more</button>
      </>
  );
}

export default App;
