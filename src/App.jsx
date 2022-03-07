import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumSearch from './components/AlbumSearch'
import Album from './components/album'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumSearch />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// album getInfo src: "https://ws.audioscrobbler.com/2.0/?method=album.search&album=x&api_key=91c5c92bb86941ab984a066b1da980ed&format=json"

//album serach src: "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=YOUR_API_KEY&format=json"

// artist getInfo src: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json"

//artist search src: "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json"

//track getInfo src: "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=YOUR_API_KEY&artist=cher&track=believe&format=json"

// track serach src: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=YOUR_API_KEY&format=json"

//shared secret b08b91392f96325880bfe621eeb4b011

//검색어에서 띄어쓰기는 + 기호로 표시한다