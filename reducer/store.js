import { put, takeEvery } from "redux-saga/effects"

const initialize = {
  name: "",
  artist: "",
  imgurl: "",
  visible: false
}

export const visibletrue = () => (dispatch) => {
  dispatch({type: "VISIBLE", visible: true})
}

export const visiblefalse = () => (dispatch) => {
  dispatch({type: "VISIBLE", visible: false})
}

export function* modvisible(){
  yield takeEvery("MOD", yield put({type: "VISIBLE", visible: true}))
}

export const modifier = (state = initialize, action) => {{
  switch (action.type){
    case "MOD": 
      return {name: action.name, artist: action.artist, imgurl: action.imgurl}
    case "VISIBLE":
      return {visible: action.visible}
    default: 
      return state
  }
}}