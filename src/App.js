import "./styles.css";
import TopBanner from "./components/TopBanner";
import SideBar from "./components/SideBar";
import VideosContainer from "./components/VideosContainer";

export default function App() {
  return (
    <div className="App">
      <TopBanner />
      <div className="contentContainer">
        <SideBar />
        <VideosContainer />
      </div>
    </div>
  );
}
