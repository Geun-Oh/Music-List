// import { put, takeEvery } from "redux-saga/effects"

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

// export function* modvisible(){
//   yield takeEvery("MOD", yield put({type: "VISIBLE", visible: true}))
// }

export const modifier = (state = initialize, action) => {{
  switch (action.type){
    case "MOD": 
      return {
        ...state, // 기존의 것을 가져와 불변성을 지키는 것은 매우 중요한 문제이다..! 꼭 지키도록 합시다
        name: action.name, artist: action.artist, imgurl: action.imgurl,         visible: action.visible
      }
    case "VISIBLE":
      return {
        ...state,
        visible: action.visible
      }
    default: 
      return state
  }
}}