import { Header, Menu, Timeline } from "../components";
import { CSSReset } from "../components/CSSReset/CSSReset";
import config from "../config.json" ;

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline 
          playlist={config.playlists}
        />
      </div>
    </>
  );
}

export default HomePage;
