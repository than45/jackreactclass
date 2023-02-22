
import './App.css';
import  Pious  from './pious.js';
import Ethan from './Components/ccuc/uncontrolled';
import Jack from './Components/props/propp';
import Counter from './Components/state/state';
import InputComponent from './Components/ccuc/conrolled';
import MyComponentWithLoading from './Components/Hoc/ethan';
import Happy from './Components/pure/pc';
import Apple from './Components/Hooks/usecallback';
import Ball from './Components/Hooks/usecontext';
import Cat from './Components/Hooks/useeffect';
import Dog from './Components/Hooks/usememo';
import Counte from './Components/Hooks/usereducer';
import Elephas from './Components/Hooks/useref';
import Fool from './Components/Hooks/usestate';
import MyComponent from './Components/lifecycle/life';
function App() {
  return (

    <div className="App">
      <MyComponentWithLoading/>
      <Apple/>
      <Ball/>
      <Cat/>
      <Counte/>
      <Dog/>
      <Elephas/>
      <Fool/>
      <Pious />
      <Counter/>
      <InputComponent/>
      <Ethan/>
      <Happy/>
       <MyComponent/>
      <Jack/>
    </div>
  );
}

export default App;
