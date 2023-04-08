import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {SiDiscord} from "react-icons/si";
import Connect from './Components/Connect';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a target="blank"  href='https://mobile.twitter.com/CantoWoof'>   <img className='img' alt='logo' style={{width: "5%", marginLeft: "80%"}} src={(require("/Users/macbook/woof/src/assets/Twitter Button.png"))} /></a>  &nbsp;
        <a target="blank"  href='https://discord.gg/cantowoof'>   <img className='img-1' alt='logo' style={{width: "5%"}} src={(require("/Users/macbook/woof/src/assets/Discord Button.png"))} /></a>
        <Home />
      </header>
    </div>
  );
}

export default App;
