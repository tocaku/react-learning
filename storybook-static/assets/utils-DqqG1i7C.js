import{r as C,a as m}from"./index-caxmlYbZ.js";import{_ as D,a as S}from"./TransitionGroupContext-Cc0PzDYn.js";import{_ as O}from"./inheritsLoose-DR8r8Ogv.js";import{R as v}from"./index-DIE_uK0V.js";function _(a){return!a||!C.isValidElement(a)?null:a.props.propertyIsEnumerable("ref")?a.props.ref:a.ref}const N={disabled:!1};var R=function(u){return u.scrollTop},x="unmounted",l="exited",f="entering",E="entered",T="exiting",p=function(a){O(u,a);function u(i,e){var t;t=a.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,s;return t.appearStatus=null,i.in?r?(s=l,t.appearStatus=f):s=E:i.unmountOnExit||i.mountOnEnter?s=x:s=l,t.state={status:s},t.nextCallback=null,t}u.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:l}:null};var o=u.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(t=f):(n===f||n===E)&&(t=T)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},o.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&R(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:x})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,s=this.props.nodeRef?[r]:[v.findDOMNode(this),r],c=s[0],h=s[1],b=this.getTimeouts(),g=r?b.appear:b.enter;if(!e&&!n||N.disabled){this.safeSetState({status:E},function(){t.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:f},function(){t.props.onEntering(c,h),t.onTransitionEnd(g,function(){t.safeSetState({status:E},function(){t.props.onEntered(c,h)})})})},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||N.disabled){this.safeSetState({status:l},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(r)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=s[0],h=s[1];this.props.addEndListener(c,h)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=D(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(S.Provider,{value:null},typeof n=="function"?n(e,r):m.cloneElement(m.Children.only(n),r))},u}(m.Component);p.contextType=S;p.propTypes={};function d(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};p.UNMOUNTED=x;p.EXITED=l;p.ENTERING=f;p.ENTERED=E;p.EXITING=T;const L=a=>a.scrollTop;function U(a,u){const{timeout:o,easing:i,style:e={}}=a;return{duration:e.transitionDuration??(typeof o=="number"?o:o[u.mode]||0),easing:e.transitionTimingFunction??(typeof i=="object"?i[u.mode]:i),delay:e.transitionDelay}}export{p as T,U as a,_ as g,L as r};