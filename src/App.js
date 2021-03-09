import logo from './logo.svg';
import './App.css';
import BT3Header from './BaiTap-LMS/b1-BTThucHanhLayout/BT3Header';
import BT3Content from './BaiTap-LMS/b1-BTThucHanhLayout/BT3Content';
import BT3Footer from './BaiTap-LMS/b1-BTThucHanhLayout/BT3Footer';
import GlassesUI from './BaiTap-LMS/b2-BTGlasses-State-Props/GlassesUI';
import GameOTTRedux from './BaiTap-LMS/b3-BTGameOTT/GameOTTRedux';

function App() {
  return (
    <div className="App">
      {/* <BT3Header />
      <BT3Content />
      <BT3Footer /> */}
      {/* <GlassesUI/> */}
      <GameOTTRedux/>
    </div>
  );
}

export default App;
