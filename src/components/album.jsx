import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import style from 'styled-components'
import backimg from './background.svg'
import heartimg from './heart.svg'

function Album() {
  const [albumSelected, setAlbumSelected] = React.useState([])
  const rname = useSelector(state => state.name)
  const rartist = useSelector(state => state.artist)
  const rimgurl = useSelector(state => state.imgurl)
  const findSelected = async () => {
    await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=${rartist.replace(/ /gi, "%20")}&album=${rname.replace(/ /gi, "%20")}&format=json`)
    .then(a => a.json())
    .then(a => {setAlbumSelected(a.album)})
  }
  React.useEffect(() => findSelected(), [])
  React.useEffect(() => console.log(albumSelected.tracks && albumSelected.tracks.track), [albumSelected])
  // 태그는 일단 보류하고 나중에 첨부하기로 한다!
  
  return(
    <StyledArticle>
      <StyleDiv url={rimgurl}>
        <StyleSpan>
      <StyleH1>{albumSelected && albumSelected.name}</StyleH1>
        {albumSelected.tags === undefined ? <p>you selected not album but music!</p> :
        <TagStyleUl>
        {[...albumSelected.tags.tag].map((item, index) =>
          <li key={index} style={tagstyle}>#{item.name}&nbsp;&nbsp;</li>
        )}
        </TagStyleUl>
        }
      <strong>{albumSelected && albumSelected.artist}</strong>
      <h3 style={{paddingTop: "30px"}}>{albumSelected && albumSelected.listeners} of listeners love this song!</h3>
      <h3>{albumSelected && albumSelected.playcount} played!</h3>
        </StyleSpan>
      </StyleDiv>
      <StyleSpan>
        {albumSelected.tracks === undefined ? <p>you selected not album but music!</p> :
        <ul style={ulstyle}>
        {[...albumSelected.tracks.track].map((item, index) =>
          <TrackStyleLi key={index}>&nbsp;&nbsp;{item.name}
            <img src={heartimg} className="heart" align="right" />
          </TrackStyleLi>
        )}
        </ul>
        }
        <hr />
      <h1>For more Information</h1>
        <ul style={ulstyle}>
        <StyledLi><StyledA href={albumSelected.url} target="_blank">{albumSelected.url}</StyledA></StyledLi>
      </ul>
      </StyleSpan>
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

const TagStyleUl = style.ul`
  display: flex;
  flex-direction: row;
  font-size: 10px;
   color: lightgray;
  padding-left: 0;
`

const tagstyle = {
  listStyleType: "none"
}

const StyleSpan = style.div`
padding-right: 30vw;
padding-left: 30vw;
bottom: 0;

  @media only screen and (max-width: 768px) {
    padding-left: 10px;
  padding-right: 10px;
  }
`

const TrackStyleLi = style.li`
  height: 50px;
  list-style-type: none;
  border-radius: 25px;
  border: 1px solid;
  border-color: gray;
  color: white;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
justify-content: space-between;
  font: 1rem bolder;
padding-right: 20px;
`

const StyleH1 = style.h1`
margin-top: 0;
margin-bottom: 0;
padding-top: 10vh;
`

const StyledArticle = style.div`
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: cover;
color: white;
height: 100%;
`

const StyledLi = style.li`
  list-style: none;
`

const StyledA = style.a`
  text-decoration: none;
color: skyblue;
`

const ulstyle = {
  paddingLeft: "0px"
}

export default Album;
//        <StyledLi>{albumSelected.artist === undefined ? null : <StyledA href={albumSelected.artist.url} target="_blank">{albumSelected.artist.url}</StyledA>}</StyledLi> 나중에 undefined 다루는 글에 첨부해두기

