import "./App.css";
import Navigation from "./components/nav/navigationbar";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <body>
        <main>
          <h1 className="text-5xl">StarQuest</h1>
        </main>
      </body>
    </>
  );
}

export default App;
