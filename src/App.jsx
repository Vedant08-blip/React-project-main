import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './pages/Counter'

import Input from './pages/input'
import Store from './pages/store'
import Data from './pages/data'
import TweetInput from './pages/twitter'
import Navbar from './components/nav'
import APIfetchdata from './pages/APIfetchdata'
import EmojiPicker from './pages/emoji'
import API from './pages/API'
import Form from './pages/form'
import './index.css'

function App() {
    return (
    <>
      <Navbar />
      <Routes>

        <Route path="/counter" element={<Counter />} />
        <Route path="/twitterr"  element={<TweetInput/>}/>
        <Route path="/input" element={<Input />} />
        <Route path="/data"  element={<Data/>}/>
        <Route path="/store"  element={<Store/>}/>
        <Route path="/api" element= {<APIfetchdata/>}/>
         <Route path="/apidata" element={<API/>}/>
       <Route path="/emoji" element={<EmojiPicker/>}/>
       <Route path="/form" element={<Form/>}/>
      </Routes>

    </>
  );
}


export default App
