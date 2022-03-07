import React from 'react'
import style from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { visibletrue, visiblefalse } from '../../reducer/store'
import { Link } from 'react-router-dom'

function Modal() {
  const [selected, setSelected] = React.useState([])
  const [albumSelected, setAlbumSelected] = React.useState([])
  const dispatch = useDispatch()
  const visible = useSelector(state => state.visible)
  const rname = useSelector(state => state.name)
  const rartist = useSelector(state => state.artist)
  const rimgurl = useSelector(state => state.imgurl)
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=${rartist.replace(/ /gi, "%20")}&track=${rname.replace(/ /gi, "%20")}&format=json`
  const getInfoUrl = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=${rartist.replace(/ /gi, "%20")}&album=${rname.replace(/ /gi, "%20")}&format=json`
    
    const findSelected = async () => {
    await fetch(url)
    .then(a => a.json())
    .then(a => setSelected(a.track))
  }

    const findAlbumSelected = async () => {
      await fetch(getInfoUrl)
      .then(a => a.json())
      .then(a => setAlbumSelected(a.album))
    }
  React.useEffect(() => findSelected(), [url])
  React.useEffect(() => console.log(selected), [selected])
  React.useEffect(() => findAlbumSelected(), [getInfoUrl])
  React.useEffect(() => console.log(albumSelected), [albumSelected])
  return(
    <StyledDiv visible={visible}>
        <StyledMain url={rimgurl}>{ rname !== undefined ? 
          <div style={pcolor}>
          <button style={btnstyle} onClick={() => dispatch(visiblefalse())}>X</button>
          <h1>{albumSelected && albumSelected.name}</h1>
          <p>{albumSelected && albumSelected.artist}</p>
          <h3>{albumSelected && albumSelected.listeners} of listeners love this song!</h3>
          <h3>{albumSelected && albumSelected.playcount} played!</h3>
          <Link to="/album">For more Information</Link>
        </div>
        : <p>Loading...</p> }
        </StyledMain>
    </StyledDiv>
  )
}

const pcolor = {
  color: "white"
}

const btnstyle = {
  color: "white",
  background: "none",
  border: "none",
  position: "fixed",
  top: "15px",
  right: "15px"
}

  const StyledDiv = style.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${(props) => (props.visible ? 999 : -1)};
`

const StyledMain = style.main`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0,     0.5) ), url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export default Modal;