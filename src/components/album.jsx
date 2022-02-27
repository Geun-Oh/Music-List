import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import style from 'styled-components'

function Album() {
  const [selected, setSelected] = React.useState([])
  const {name, artist, image} = useParams()
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=${artist.replace(/ /gi, "%20")}&track=${name.replace(/ /gi, "%20")}&format=json`

  const findSelected = async () => {
    await fetch(url)
    .then(a => a.json())
    .then(a => setSelected(a.track))
    .then(setSelected(selected => [...selected]))
  }

const rname = useSelector(state => state.name)
const rartist = useSelector(state => state.artist)
const rimgurl = useSelector(state => state.imgurl)

  useSelector(state => console.log(state.name))
  React.useEffect(() => findSelected(), [])

  return(
    <StyledArticle>
      <StyleDiv url={rimgurl}>
      <StyleH1>{selected.name}</StyleH1>
      <strong>{rartist} {rname}</strong>
      <h3>{selected.listeners} of listeners love this song!</h3>
      <h3>{selected.playcount} played!</h3>
      </StyleDiv>
      <h1>For more Information</h1>
      <ul>
        <StyledLi><StyledA href={selected.url} target="_blank">{selected.url}</StyledA></StyledLi>
        <StyledLi>{selected.artist === undefined ? null : <StyledA href={selected.artist.url} target="_blank">{selected.artist.url}</StyledA>}</StyledLi>
      </ul>
    </StyledArticle>
  )
}

const StyleDiv = style.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),     url(${props => props.url});
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
background-position: 50% 50%;
height: 40vh;
`

const StyleH1 = style.h1`
margin-top: 0;
margin-bottom: 60px;
padding-top: 40px;
`

const StyledArticle = style.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
color: white;
height: 100vh;
`

const StyledLi = style.li`
  list-style: none;
`

const StyledA = style.a`
  text-decoration: none;
color: skyblue;
`

export default Album;


//url 대충 이런 식으로 작성해야 할 것!
//http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=Lana%20Del%20Rey&track=Norman%20Fucking%20Rockwell!&format=json