import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch, batch } from "react-redux"
import styled from 'styled-components'
import Modal from './Modal'
import { visibletrue, visiblefalse } from '../../reducer/store'
import backimg from './background.svg'
import arrowimg from './arrow.svg'
import './AlbumSearch.css'

function AlbumSearch() {
  const [ albumlist, setAlbumlist ] = React.useState()
  const dispatch = useDispatch()
  const findAlbum = async (event) => {
    event.preventDefault()
    await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${event.target[0].value}&api_key=91c5c92bb86941ab984a066b1da980ed&format=json`).then(a => a.json()).then(a => {
      setAlbumlist(a.results.albummatches.album)
    })
  }
  const album = React.useRef()
  const rname = useSelector(state => state.name)
  React.useEffect(() => {console.log(albumlist)}, [rname]) 
  
  return(
    <div>
      <Modal />
    <BackDiv>
      <h1 className="title">Music.rsnc</h1>
      <StyledForm onSubmit={findAlbum}>
        <StyledInput type="text" placeholder=" Wanna get Info of?" />
        <button type="submit" className="submitbutton"><img src={arrowimg} /></button>
      </StyledForm>
         {albumlist === undefined ? null : 
            <AlbumListDiv>
            {[...albumlist].map((item, index) =>
              <AlbumDiv ref={album} key={index} onClick={() => dispatch({type: "MOD", name: item.name, artist: item.artist, imgurl: item.image[3]['#text'], visible: true})}>
                <AlbumTitleDiv>{item.name}</AlbumTitleDiv>
                <h2>-{item.artist}-</h2>
                <img src={item.image[3]['#text']} style={ImgStyle}/>
                <br />
              </AlbumDiv>
              )}
            </AlbumListDiv>
         }
    </BackDiv>
    </div>
  )
}

const svgstyle = {
  position: "absolute",
  objectFit: "cover",
  objectPosition: "center bottom"
}

const BackDiv = styled.div`
  position: relative;
  padding-left: 18vw;
  padding-right: 18vw;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  overflow: auto;

  @media only screen and (max-width: 550px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const StyledForm = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
margin-top: 100px;
margin-bottom: 30px;
`

const StyledInput = styled.input`
  width: 300px;
  text-align: center;
  font-size: 1rem;
  color: white;
  height: 30px;
  border: none;
  background: none;

`

const AlbumListDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const AlbumDiv = styled.div`
  width: 320px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  box-shadow: 0px 0px 10px #000;
`

const AlbumTitleDiv = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`

const LinkStyle = {
  textDecoration: "none",
  color: "black"
}

const ImgStyle = {
  borderRadius: "20px"
}

export default AlbumSearch;

//<Link to={`/album/${item.name}/${item.artist}`} style={LinkStyle}>{item.name}</Link>

//  dispatch({type: "VISIBLE", visible: true});