import{j as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-o1lFxRFU.js";import{r as p}from"./index-caxmlYbZ.js";import{g as D,b as v,s as d,m as L,c as m,a as b}from"./memoTheme-CtKMhVhH.js";import{u as ro}from"./useTheme-B_00P1wf.js";import{B as io,F as ao}from"./Backdrop-B5PLE_Ks.js";import{M as lo}from"./Modal-1Y4qnMwn.js";import{c as g,u as y}from"./DefaultPropsProvider-C-EGLtJD.js";import{P as Y}from"./Paper-6MAfx-1M.js";import{u as po}from"./useId-D8TmcrIr.js";import{T as co}from"./Typography-BpcV8GlC.js";import{B as C}from"./Button-BPxHJIT8.js";import"./extends-CF3RwP-h.js";import"./useTheme-js8xzI_O.js";import"./useSlot-D9bplHaG.js";import"./resolveComponentProps-eMZxqe1w.js";import"./useForkRef-Plrw27Ce.js";import"./utils-DqqG1i7C.js";import"./TransitionGroupContext-Cc0PzDYn.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DIE_uK0V.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useEventCallback-D-j5pFnD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-t2c3skml.js";import"./index-jmn92H5i.js";import"./emotion-react.browser.esm-D9YfGLo1.js";import"./extendSxProp-B1nIj3LR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Dd4UDY4p.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";function uo(e){return v("MuiDialog",e)}const T=D("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),q=p.createContext({}),mo=d(io,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),go=e=>{const{classes:o,scroll:t,maxWidth:s,fullWidth:r,fullScreen:i}=e,l={root:["root"],container:["container",`scroll${g(t)}`],paper:["paper",`paperScroll${g(t)}`,`paperWidth${g(String(s))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return b(l,uo,o)},fo=d(lo,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),xo=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.container,o[`scroll${g(t.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),ho=d(Y,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.paper,o[`scrollPaper${g(t.scroll)}`],o[`paperWidth${g(String(t.maxWidth))}`],t.fullWidth&&o.paperFullWidth,t.fullScreen&&o.paperFullScreen]}})(L(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${T.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${e.breakpoints.values[o]}${e.breakpoints.unit}`,[`&.${T.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${T.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Co=p.forwardRef(function(o,t){const s=y({props:o,name:"MuiDialog"}),r=ro(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":a,BackdropComponent:c,BackdropProps:k,children:z,className:H,disableEscapeKeyDown:R=!1,fullScreen:K=!1,fullWidth:V=!1,maxWidth:G="sm",onBackdropClick:B,onClick:O,onClose:S,open:$,PaperComponent:J=Y,PaperProps:P={},scroll:Q="paper",TransitionComponent:Z=ao,transitionDuration:U=i,TransitionProps:oo,...eo}=s,h={...s,disableEscapeKeyDown:R,fullScreen:K,fullWidth:V,maxWidth:G,scroll:Q},M=go(h),w=p.useRef(),to=u=>{w.current=u.target===u.currentTarget},no=u=>{O&&O(u),w.current&&(w.current=null,B&&B(u),S&&S(u,"backdropClick"))},W=po(a),so=p.useMemo(()=>({titleId:W}),[W]);return n.jsx(fo,{className:m(M.root,H),closeAfterTransition:!0,components:{Backdrop:mo},componentsProps:{backdrop:{transitionDuration:U,as:c,...k}},disableEscapeKeyDown:R,onClose:S,open:$,ref:t,onClick:no,ownerState:h,...eo,children:n.jsx(Z,{appear:!0,in:$,timeout:U,role:"presentation",...oo,children:n.jsx(xo,{className:m(M.container),onMouseDown:to,ownerState:h,children:n.jsx(ho,{as:J,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":W,...P,className:m(M.paper,P.className),ownerState:h,children:n.jsx(q.Provider,{value:so,children:z})})})})})});function Do(e){return v("MuiDialogActions",e)}D("MuiDialogActions",["root","spacing"]);const vo=e=>{const{classes:o,disableSpacing:t}=e;return b({root:["root",!t&&"spacing"]},Do,o)},bo=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:e})=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),yo=p.forwardRef(function(o,t){const s=y({props:o,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1,...l}=s,a={...s,disableSpacing:i},c=vo(a);return n.jsx(bo,{className:m(c.root,r),ownerState:a,ref:t,...l})});function ko(e){return v("MuiDialogContent",e)}D("MuiDialogContent",["root","dividers"]);function So(e){return v("MuiDialogTitle",e)}const Mo=D("MuiDialogTitle",["root"]),wo=e=>{const{classes:o,dividers:t}=e;return b({root:["root",t&&"dividers"]},ko,o)},Wo=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})(L(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${Mo.root} + &`]:{paddingTop:0}}}]}))),To=p.forwardRef(function(o,t){const s=y({props:o,name:"MuiDialogContent"}),{className:r,dividers:i=!1,...l}=s,a={...s,dividers:i},c=wo(a);return n.jsx(Wo,{className:m(c.root,r),ownerState:a,ref:t,...l})}),jo=e=>{const{classes:o}=e;return b({root:["root"]},So,o)},Ro=d(co,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Bo=p.forwardRef(function(o,t){const s=y({props:o,name:"MuiDialogTitle"}),{className:r,id:i,...l}=s,a=s,c=jo(a),{titleId:k=i}=p.useContext(q);return n.jsx(Ro,{component:"h2",className:m(c.root,r),ownerState:a,ref:t,variant:"h6",id:i??k,...l})}),j=({title:e,content:o,actions:t,children:s,...r})=>n.jsxs(Co,{...r,children:[e&&n.jsx(Bo,{children:e}),o&&n.jsx(To,{children:o}),t&&n.jsx(yo,{children:t}),s]});j.__docgenInfo={description:"",methods:[],displayName:"MUIDialog",props:{title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["MUIDialogProps"]};const ce={title:"Feedback/Dialog",component:j,argTypes:{open:{control:"boolean"},title:{control:"text"},content:{control:"text"}}},X=e=>{const[o,t]=p.useState(e.open),s=()=>{t(!0)},r=()=>{t(!1)};return n.jsxs("div",{children:[n.jsx(C,{variant:"contained",onClick:s,children:"Open Dialog"}),n.jsx(j,{...e,open:o,onClose:r,children:e.children})]})},f=X.bind({});f.args={open:!1,title:"Default Dialog",content:"This is a default dialog content.",actions:n.jsxs(n.Fragment,{children:[n.jsx(C,{onClick:()=>{},children:"Cancel"}),n.jsx(C,{onClick:()=>{},children:"Ok"})]})};const x=X.bind({});x.args={open:!1,title:"Custom Dialog",content:"This is a custom dialog content.",actions:n.jsx(n.Fragment,{children:n.jsx(C,{onClick:()=>{},children:"Close"})})};var I,N,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <MUIDialog {...args} open={open} onClose={handleClose}>
        {args.children}
      </MUIDialog>
    </div>;
}`,...(A=(N=f.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,_,E;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <MUIDialog {...args} open={open} onClose={handleClose}>
        {args.children}
      </MUIDialog>
    </div>;
}`,...(E=(_=x.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","WithCustomContent"];export{f as Default,x as WithCustomContent,de as __namedExportsOrder,ce as default};