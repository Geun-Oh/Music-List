import React from 'react'
import style from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { visibletrue, visiblefalse } from '../../reducer/store'

function Modal() {

  const dispatch = useDispatch()
  const visible = useSelector(state => state.visible)
  const rname = useSelector(state => state.name)
  const rartist = useSelector(state => state.artist)
  const rimgurl = useSelector(state => state.imgurl)
  
  return(
    <StyledDiv visible={visible}>
        <StyledMain>{ rname !== undefined ? rname : <p>Loading...</p> }</StyledMain>
      <button onClick={() => dispatch(visiblefalse())}>Bye!</button>
    </StyledDiv>
  )
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
`

export default Modal;