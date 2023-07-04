import "./App.css";
import StudioBlog from "./Layout/blog";
import StudioEdit from "./Layout/clipEdit";
import JoinUs from "./Layout/contentStudio";
import StudioPlayer from "./Layout/embededPlayer";
import Event from "./Layout/event";
import NavBar from "./Layout/header";
import StudioJoin from "./Layout/join";
import { StudioFuture } from "./Layout/moreFeature";
import ContentStudio from "./Layout/studio";
import StudioClip from "./Layout/videoClip";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <JoinUs></JoinUs>
      <Event></Event>
      <ContentStudio></ContentStudio>
      <StudioClip></StudioClip>
      <StudioEdit></StudioEdit>
      <StudioBlog></StudioBlog>
      <StudioPlayer></StudioPlayer>
      <StudioFuture></StudioFuture>
      <StudioJoin></StudioJoin>
    </div>
  );
}

export default App;
