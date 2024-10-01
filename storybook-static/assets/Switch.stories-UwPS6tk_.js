import{j as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{r as B}from"./index-caxmlYbZ.js";import{g as j,b as M,s as u,m as p,c as D,a as I}from"./memoTheme-CtKMhVhH.js";import{c as T}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as O}from"./SwitchBase-p0DrBTiZ.js";import{c as o,a as f,l as N,e as U,u as E}from"./DefaultPropsProvider-C-EGLtJD.js";import"./extends-CF3RwP-h.js";import"./useFormControl-kznOudH-.js";import"./ButtonBase-Dd4UDY4p.js";import"./emotion-react.browser.esm-D9YfGLo1.js";import"./TransitionGroupContext-Cc0PzDYn.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-Plrw27Ce.js";import"./useEventCallback-D-j5pFnD.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-BzlaMV7b.js";function P(a){return M("MuiSwitch",a)}const e=j("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),V=a=>{const{classes:t,edge:r,size:s,color:m,checked:h,disabled:g}=a,w={root:["root",r&&`edge${o(r)}`,`size${o(s)}`],switchBase:["switchBase",`color${o(m)}`,h&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=I(w,P,t);return{...t,...v}},_=u("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.edge&&t[`edge${o(r.edge)}`],t[`size${o(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${e.thumb}`]:{width:16,height:16},[`& .${e.switchBase}`]:{padding:4,[`&.${e.checked}`]:{transform:"translateX(16px)"}}}}]}),q=u(O,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.switchBase,{[`& .${e.input}`]:t.input},r.color!=="default"&&t[`color${o(r.color)}`]]}})(p(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:`${a.palette.mode==="light"?a.palette.common.white:a.palette.grey[300]}`,transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),[`&.${e.checked}`]:{transform:"translateX(20px)"},[`&.${e.disabled}`]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:`${a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[600]}`},[`&.${e.checked} + .${e.track}`]:{opacity:.5},[`&.${e.disabled} + .${e.track}`]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:`${a.palette.mode==="light"?.12:.2}`},[`& .${e.input}`]:{left:"-100%",width:"300%"}})),p(({theme:a})=>({"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:f(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(a.palette).filter(T(["light"])).map(([t])=>({props:{color:t},style:{[`&.${e.checked}`]:{color:(a.vars||a).palette[t].main,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:f(a.palette[t].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${e.disabled}`]:{color:a.vars?a.vars.palette.Switch[`${t}DisabledColor`]:`${a.palette.mode==="light"?N(a.palette[t].main,.62):U(a.palette[t].main,.55)}`}},[`&.${e.checked} + .${e.track}`]:{backgroundColor:(a.vars||a).palette[t].main}}}))]}))),A=u("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,t)=>t.track})(p(({theme:a})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:`${a.palette.mode==="light"?a.palette.common.black:a.palette.common.white}`,opacity:a.vars?a.vars.opacity.switchTrack:`${a.palette.mode==="light"?.38:.3}`}))),X=u("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,t)=>t.thumb})(p(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),F=B.forwardRef(function(t,r){const s=E({props:t,name:"MuiSwitch"}),{className:m,color:h="primary",edge:g=!1,size:w="medium",sx:v,...R}=s,i={...s,color:h,edge:g,size:w},c=V(i),b=l.jsx(X,{className:c.thumb,ownerState:i});return l.jsxs(_,{className:D(c.root,m),sx:v,ownerState:i,children:[l.jsx(q,{type:"checkbox",icon:b,checkedIcon:b,ref:r,ownerState:i,...R,classes:{...c,root:c.switchBase}}),l.jsx(A,{className:c.track,ownerState:i})]})}),z=({color:a="primary",size:t="medium",disabled:r=!1,...s})=>l.jsx(F,{color:a,size:t,disabled:r,...s});z.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["MUISwitchProps"]};const la={title:"Inputs/Switch",component:z,tags:["autodocs"]},n={args:{defaultChecked:!0}},d={args:{disabled:!0}};var S,k,$;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...($=(k=n.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var y,x,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const na=["Default","Disabled"];export{n as Default,d as Disabled,na as __namedExportsOrder,la as default};
