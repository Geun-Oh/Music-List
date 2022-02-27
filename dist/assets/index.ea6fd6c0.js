import{H as e,R as t,u as a,L as n,a as r,b as l,B as o,c as i,d as c,e as m,f as s,P as u}from"./vendor.a22a73bb.js";function d(){const[e,r]=t.useState(),l=a();return t.useEffect((()=>{console.log(e)}),[e]),t.createElement("div",null,t.createElement(g,null,t.createElement("h1",null,"Music Search Engine"),t.createElement(p,{onSubmit:async e=>{e.preventDefault(),await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${e.target[0].value}&api_key=91c5c92bb86941ab984a066b1da980ed&format=json`).then((e=>e.json())).then((e=>{r(e.results.albummatches.album)}))}},t.createElement(b,{type:"text",placeholder:" Wanna get Info of?"}),t.createElement(h,{type:"submit"},"Submit")),t.createElement("hr",null),void 0===e?t.createElement("h1",null,"Please input your own keyword!"):t.createElement(E,null,[...e].map(((e,a)=>t.createElement(f,{key:a},t.createElement(x,{onClick:()=>l({type:"MOD",name:e.name,artist:e.artist,imgurl:e.image[3]["#text"]})},t.createElement(n,{to:`/album/${e.name}/${e.artist}`,style:y},e.name)),t.createElement("h2",null,"-",e.artist,"-"),t.createElement("img",{src:e.image[3]["#text"],style:k}),t.createElement("br",null)))))))}const g=e.div`
  margin-left: 18vw;
  margin-right: 18vw;
  overflow: hidden;

  @media only screen and (max-width: 550px) {
    margin-left: 10px;
  margin-right: 10px;
  }
`,p=e.form`
  width: 100%;
  display: flex;
  align-content: space-between;
margin-top: 30px;
margin-bottom: 30px;
`,b=e.input`
  width: 50%;
  height: 30px;
  border: none;
  background: lightgray;
  border-radius: 10px;
`,h=e.button`
  border: none;
  background: none;
`,E=e.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,f=e.div`
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
`,x=e.div`
  font-size: 1.5rem;
  margin-top: 30px;
`,y={textDecoration:"none",color:"black"},k={borderRadius:"20px"};function w(){const[e,a]=t.useState([]),{name:n,artist:o,image:i}=r(),c=`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=91c5c92bb86941ab984a066b1da980ed&artist=${o.replace(/ /gi,"%20")}&track=${n.replace(/ /gi,"%20")}&format=json`,m=l((e=>e.name)),s=l((e=>e.artist)),u=l((e=>e.imgurl));return l((e=>console.log(e.name))),t.useEffect((()=>(async()=>{await fetch(c).then((e=>e.json())).then((e=>a(e.track))).then(a((e=>[...e])))})()),[]),t.createElement(S,null,t.createElement(v,{url:u},t.createElement(j,null,e.name),t.createElement("strong",null,s," ",m),t.createElement("h3",null,e.listeners," of listeners love this song!"),t.createElement("h3",null,e.playcount," played!")),t.createElement("h1",null,"For more Information"),t.createElement("ul",null,t.createElement($,null,t.createElement(D,{href:e.url,target:"_blank"},e.url)),t.createElement($,null,void 0===e.artist?null:t.createElement(D,{href:e.artist.url,target:"_blank"},e.artist.url))))}const v=e.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),     url(${e=>e.url});
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
background-position: 50% 50%;
height: 40vh;
`,j=e.h1`
margin-top: 0;
margin-bottom: 60px;
padding-top: 40px;
`,S=e.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
color: white;
height: 100vh;
`,$=e.li`
  list-style: none;
`,D=e.a`
  text-decoration: none;
color: skyblue;
`;function I(){return t.createElement(o,null,t.createElement(i,null,t.createElement(c,{path:"/",element:t.createElement(d,null)}),t.createElement(c,{path:"/album/:name/:artist",element:t.createElement(w,null)})))}const M={name:"",artist:"",imgurl:""},_=m(((e=M,t)=>{switch(t.type){case"MOD":return{name:t.name,artist:t.artist,imgurl:t.imgurl};default:return e}}));s.render(t.createElement(t.StrictMode,null,t.createElement(u,{store:_},t.createElement(I,null))),document.getElementById("root"));
