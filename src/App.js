import "./App.css";

import NavigationBar from "./component/NavigationBar";
import Intro from "./component/Intro";
import Trending from "./component/Trending";
import About from "./component/About";

import "../src/style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending section */}

      {/* about section */}
      <div className="about">
        <About />
      </div>
      {/* end of about section */}
    </div>
  );
}

export default App;
