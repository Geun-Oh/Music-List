const initialize = {
  name: "",
  artist: "",
  imgurl: ""
}

export const modifier = (state = initialize, action) => {{
  switch (action.type){
    case "MOD": 
  return {name: action.name, artist: action.artist, imgurl: action.imgurl}
    default: 
      return state
  }
}}