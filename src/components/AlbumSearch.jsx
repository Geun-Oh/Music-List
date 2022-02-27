import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'

function AlbumSearch() {
  const [ albumlist, setAlbumlist ] = React.useState()
  const dispatch = useDispatch()
  const findAlbum = async (event) => {
    event.preventDefault()
    await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${event.target[0].value}&api_key=91c5c92bb86941ab984a066b1da980ed&format=json`).then(a => a.json()).then(a => {
      setAlbumlist(a.results.albummatches.album)
    })
  }


React.useEffect(() => {console.log(albumlist)}, [albumlist])


  return(
    <div>
    <BackDiv>
      <h1>Music Search Engine</h1>
      <StyledForm onSubmit={findAlbum}>
        <StyledInput type="text" placeholder=" Wanna get Info of?" />
        <StyledButton type="submit">Submit</StyledButton>

      </StyledForm>
      <hr />
         {albumlist === undefined ? <h1>Please input your own keyword!</h1> : 
            <AlbumListDiv>
            {[...albumlist].map((item, index) =>
              <AlbumDiv key={index}>
                <AlbumTitleDiv onClick={() => dispatch({type: "MOD", name: item.name, artist: item.artist, imgurl: item.image[3]['#text']})}><Link to={`/album/${item.name}/${item.artist}`} style={LinkStyle}>{item.name}</Link></AlbumTitleDiv>
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


const BackDiv = styled.div`
  margin-left: 18vw;
  margin-right: 18vw;
  overflow: hidden;

  @media only screen and (max-width: 550px) {
    margin-left: 10px;
  margin-right: 10px;
  }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-content: space-between;
margin-top: 30px;
margin-bottom: 30px;
`

const StyledInput = styled.input`
  width: 50%;
  height: 30px;
  border: none;
  background: lightgray;
  border-radius: 10px;
`
const StyledButton = styled.button`
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
  box-shadow: 5px 5px 10px 1px #dadce0;
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