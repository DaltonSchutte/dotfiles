"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3667],{64143:(e,t,i)=>{i.d(t,{O:()=>d});var n=i(93523),s=i(8518),a=i(31417),r=i(99701),l=i(98712),o=i(51354),c=i(86070);const d=({isDisliked:e=!1,onClick:t=(()=>{}),className:i,size:d="medium",semanticColor:u="textSubdued",label:m=a.Ru.get("playback-control.ban")})=>{const h=(0,o.y)();return(0,c.jsx)(r.Zp,{label:m,children:(0,c.jsx)(n.H,{role:"switch","aria-label":m,"aria-checked":e,className:i,onClick:t,iconOnly:s.P,semanticColor:u,size:h===l.E.MEDIUM?d:"small"})})}},72954:(e,t,i)=>{i.d(t,{w:()=>m});var n=i(30758),s=i(97500),a=i.n(s),r=i(52439),l=i(31417),o=i(881),c=i(6837);const d="pvGZ831aNzHTQMZ8CA_u";var u=i(86070);const m=(0,n.memo)((function({onClick:e=(()=>{}),size:t,className:i,uri:s,sharingInfo:m,interactionData:h,ariaLabel:g=l.Ru.get("mwp.list.item.share"),condensedAll:x,placement:v,semanticColor:p,disableTooltip:k}){const{onCopyLink:C}=(0,c.L)({sharingInfo:m,uri:s,interactionData:h}),N=(0,n.useCallback)((()=>{C(),e()}),[e,C]);return(0,u.jsx)(o.a,{ariaLabel:g,size:t,onClick:N,className:a()(d,i),icon:r.C,condensedAll:x,placement:v,condensed:!0,semanticColor:p,disableTooltip:k})}))},67787:(e,t,i)=>{i.d(t,{z:()=>s});var n=i(24653);const s=()=>{const{togglePanel:e,isActive:t}=(0,n.C)();return{isPickerOpen:t,triggerRef:{current:null},toggleDevicePicker(t){e(t)}}}},4041:(e,t,i)=>{i.d(t,{a:()=>p});var n=i(30758),s=i(97500),a=i.n(s),r=i(14343),l=i(31417),o=i(64143),c=i(29543),d=i(53133),u=i(60384),m=i(13134),h=i(61451),g=i(5805),x=i(43329),v=i(86070);const p=({context:e,item:t,className:i,onClick:s=(()=>{})})=>{const{dislikeEndpoint:p,shouldShowFeedbackControls:k}=(0,c.d)(e),C=(0,r.NC)(x.en),N=(0,m.j)(),{enqueueSnackbar:b}=(0,d.d)(),j=e.metadata?.[h.W.CONTEXT_DESCRIPTION]??"",{setDislikeFeedback:y}=(0,u.I)({uri:t.uri,setFeedbackPath:p,contextUri:e.uri}),f=(0,n.useCallback)((async()=>{y(),b(l.Ru.get("feedback.hide-song",j)),s?.()}),[b,j,s,y]),w=(0,n.useCallback)((async()=>{N.addContextTrackBan(e.uri,t.uri),b(l.Ru.get("feedback.hide-song",j)),s?.()}),[e.uri,j,b,N,t.uri,s]);return(0,g.v)(t)&&k?(0,v.jsx)(o.O,{className:a()(i,{"control-button":!i,"control-button-feedback":!i}),isDisliked:!1,onClick:C?w:f}):null}},7672:(e,t,i)=>{i.r(t),i.d(t,{PiPMiniPlayer:()=>Ti});var n=i(30758),s=i(97500),a=i.n(s),r=i(14343),l=i(46900),o=i(31417),c=i(33625),d=i(422),u=i(44119),m=i(58192),h=i(83654),g=i(82909),x=i(82804),v=i(99410),p=i(10856),k=i(42156),C=i(67787),N=i(9856),b=i.n(N);const j=()=>!0===b().getParser(window.navigator.userAgent).satisfies({chrome:">=123",edge:">=127"}),y=()=>{j()&&window.focus()};var f=i(43013),w=i(79237),S=i(69693),B=i(21549),R=i(41434);const P="ZTvigd5RaqxtTdBzGide",D="jxNXLdUZfNhmCuYDbAKP",E="BBABURh2CZ6if4dMvq3j";var L=i(86070);const T=()=>{const{isPlayingRemotely:e,connectionStatus:t,remoteDeviceName:i,remoteDeviceType:n}=(0,w.v)((e=>{const t=(0,f.V)(e);return{isPlayingRemotely:t.isPlayingRemotely,connectionStatus:t.connectionStatus,remoteDeviceName:t.remoteDevice?.name,remoteDeviceType:t.remoteDevice?.type}}),R.a),{spec:s,logger:a}=(0,B.r)(p.s,{}),{triggerRef:r,toggleDevicePicker:l,isPickerOpen:o}=(0,C.z)(),{currentSession:c}=(0,S.D)(),u=Boolean(c?.active);if(!(e&&i&&n)&&!u)return(0,L.jsx)(L.Fragment,{});const m=(0,k.$A)(n||"unknown",t);return(0,L.jsxs)("div",{className:P,children:[(0,L.jsx)(m,{size:"xsmall",className:D,role:"presentation",semanticColor:"textPositive"}),(0,L.jsx)(g.r,{title:i,children:(0,L.jsx)(v.Y,{component:"button",onClick:()=>{const e=s.activeDeviceButtonFactory(),{interactionId:t}=a.logInteraction(o?e.hitUiHide():e.hitUiReveal());l(t),y()},ref:r,className:E,semanticColor:"textPositive",children:(0,L.jsx)(d.E,{variant:"bodySmall","aria-live":"polite",semanticColor:"textPositive",children:i})})},"context-item-connection-status")]})};var M=i(48555),I=i(5805);const O=({item:e,className:t})=>{const i=(0,c.L)(),n=i?.context;return(0,I.v)(e)&&n?(0,L.jsx)(M.a,{context:n,item:e,className:t}):null};var A=i(58110),z=i(13464),F=i(29543),U=i(87182),W=i(25357),H=i(24620),_=i(85907);const V=({uri:e,spec:t,logger:i})=>{const s=(0,n.useRef)(e);s.current=e;const a=(0,U.z)(),r=(0,n.useMemo)((()=>t.playerControlsFactory()),[t]),l=(0,n.useCallback)((e=>{let t=null;"pause"===e?t=r.playPauseButtonFactory().hitPause({itemToBePaused:s.current}):"resume"===e&&(t=r.playPauseButtonFactory().hitResume({itemToBeResumed:s.current})),t&&i.logInteraction(t)}),[i,r]),o=(0,n.useCallback)((e=>{const t=r.likeButtonFactory(),n=e?t.hitLike({itemToBeLiked:s.current}):t.hitRemoveLike({itemNoLongerLiked:s.current});i.logInteraction(n)}),[i,r]),c=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=r.previousButtonFactory().hitSkipToPrevious(Z(e));i.logInteraction(t)}),[i,a,r]),d=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=r.nextButtonFactory().hitSkipToNext(Z(e));i.logInteraction(t)}),[i,a,r]),u=(0,n.useCallback)((e=>{const t=r.repeatButtonFactory();let n=null;switch(e){case W.p.REPEAT_TRACK:n=t.hitRepeatOneEnable();break;case W.p.REPEAT_CONTEXT:n=t.hitRepeatEnable();break;case W.p.REPEAT_NONE:n=t.hitRepeatDisable();break;default:(0,_.k)(e)}n&&i.logInteraction(n)}),[i,r]),m=(0,n.useCallback)((e=>{const t=e?"shuffle":"linear",n=e?"linear":"shuffle",a=r.shuffleButtonFactory({uri:s.current}).hitSelectShuffleMode({previousMode:n,selectedMode:t});i.logInteraction(a)}),[i,r]),h=(0,n.useCallback)((e=>{const t=r.volumeMuteButtonFactory();i.logInteraction("muted"===e?t.hitMutePlayback():t.hitUnmutePlayback())}),[i,r]),g=(0,n.useCallback)((e=>{const t=r.volumeBarFactory();i.logInteraction(t.hitSetVolume({newVolumePercentage:K(e)}))}),[i,r]),x=(0,n.useCallback)((e=>{const t=r.volumeBarFactory();i.logInteraction(t.dragSetVolume({newVolumePercentage:K(e)}))}),[i,r]),v=(0,n.useCallback)((e=>{const t=r.seekBackwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,r]);return{onClickSeekForward:(0,n.useCallback)((e=>{const t=r.seekForwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,r]),onClickSeekBack:v,onClickPlayPause:l,onClickLike:o,onClickSkipPrevious:c,onClickSkipNext:d,onClickRepeat:u,onClickShuffle:m,onClickVolumeButton:h,onClickVolumeBar:g,onDragVolumeBar:x,onClickShare:(0,n.useCallback)((()=>{const e=r.shareButtonFactory({uri:s.current});i.logInteraction(e.hitCopyToClipboard())}),[i,r]),onClickProgressBar:(0,n.useCallback)((e=>{const t=r.progressBarFactory();i.logInteraction(t.hitSeekToTime({msToSeekTo:e}))}),[i,r]),onDragProgressBar:(0,n.useCallback)((e=>{const t=r.progressBarFactory();i.logInteraction(t.dragSeekToTime({msToSeekTo:e}))}),[i,r])}};function Z(e){return{itemToBeSkipped:e.item?.uri||"",positionMs:(0,H.s)(e)??-1,totalContentMs:e.duration??-1}}function K(e){return Math.floor(100*e)}var Q=i(16514),q=i(70521),Y=i(29997),J=i(45627);const X="d_srhjvwD_GUA3bcCWe4",G="Y1sIRIE9_S2jPP9L89qs",$="_qTFf4L4feIZxZ9RCcca",ee="xLVzUYXestVWzpfiOPxA",te="alofN0D4rOdnu0Y6xfcw",ie="iKzG3nPAIAbL5CZAbKJU",ne="b6HgoPaw7SCowvemSx0g",se="qFpig0a2GKNJnWJFd1db",ae="PuRqtCWIESfTs0d2dULt",re="fEVqL0T4qWVkozlVqGcy",le="lcyebQsHz0j8IkDXTAlB",oe="enGtDaA6WTTvIFhZz1wz",ce="Kj0qWPCL3_VrCWRyNrMD",de="Jo4RE0VhDecfPElNZucO";let ue=function(e){return e.xs="small",e.sm="medium",e.md="large",e}({});const me=({item:e,spec:t,logger:i,size:n=ue.xs,className:s})=>{const r=e.uri,l=(0,Y.X)(),o=(0,c.L)(),d=o?.context,{shouldShowFeedbackControls:u}=(0,F.d)(d),{onClickLike:m}=V({uri:r,spec:t,logger:i});return(0,I.v)(e)&&d?l&&(0,q.N)(e)?(0,L.jsx)("div",{className:de,children:(0,L.jsx)(Q.o,{contextUri:e.metadata?.context_uri,id:e.uid??void 0,uri:e.uri,isActive:!0})}):(0,L.jsx)("div",{className:ce,children:(0,L.jsx)(z.b,{size:u?ue.xs:n,uri:r,onClick:m,className:a()(le,s),showDelayOnHover:1e3,isMiniPlayer:!0})}):(0,J.p)(e)?(0,L.jsx)(A.b,{size:n,uri:r,onClick:m,className:a()(le,s),condensed:!0}):null};var he=i(82992),ge=i(62642),xe=i(75497);const ve="yb0n1ZOvcsGEP6MtzpHw",pe="wigNir143xMt4ihKMqrK",ke="jbCLA5mslXPNLClPNh8h",Ce="srBfv7LB0I9QnzxBpeTV",Ne="V2fqnNTxbJBIOeX14ZFW",be="N5WQok6ioU_Dmf0F0O31",je="NZlJ5gYuUaWvALQ2gGfg",ye="r5_6Dsophi0MbO6WWawA",fe="kWWqvihyBXMNH5W5rCwb",we="CsqhW5xDG4TO3VV20IZJ";const Se=({item:e,onClick:t,className:i,isSmallWidth:n})=>{const{spec:s,logger:r}=(0,B.r)(l.w,{}),o=(0,xe.N)(e)?u.Q.getAdTitle(e)??e.name:e.name,c=(0,xe.N)(e)?u.Q.getAdSubtitle():e.name,v=(0,he.K)(),p=function(e){switch(e){case"SMALL":return{title:"bodySmall",subtitle:"marginal"};case"MEDIUM":return{title:"bodyMedium",subtitle:"bodySmall"};default:return{title:"titleSmall",subtitle:"bodySmall"}}}(v.vertical),k="SMALL"===v.vertical,{connectionStatus:C}=(0,w.v)((e=>({connectionStatus:(0,f.V)(e).connectionStatus})),R.a);return(0,L.jsxs)("div",{className:a()(ve,i),children:[(0,L.jsx)("div",{className:Ne,children:(0,L.jsxs)(g.r,{title:o,children:[(0,L.jsx)(d.E,{"data-testid":"context-item-info-title",as:"div",variant:p.title,className:be,dir:"auto",children:(0,L.jsx)(h.R,{item:e,onClick:t,adUrl:(0,xe.N)(e)?e.url:void 0,children:o})}),C===ge.zP.CONNECTED&&(0,L.jsxs)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:p.title,className:a()(k?je:Ce,be),semanticColor:"textSubdued",children:[(0,L.jsx)("span",{className:a()(ye,{[fe]:!k}),children:"•"}),(0,L.jsx)(m.n,{item:e,onClick:t})]})]},`${e.uri}-context-item-info-title`)}),(0,L.jsx)(x.l,{className:we,item:e,size:k?"xsmall":"small",variant:k?"marginal":"bodySmall",enableVideoButton:!0,isSmallWidth:n}),(0,L.jsx)("div",{className:je,children:C===ge.zP.CONNECTED?(0,L.jsx)(T,{}):(0,L.jsx)(g.r,{title:c,children:(0,L.jsx)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:p.subtitle,className:je,semanticColor:"textSubdued",children:(0,L.jsx)(m.n,{item:e,onClick:t})})},`${e.uri}-context-item-info-subtitles`)}),!k&&!(0,xe.N)(e)&&(0,L.jsx)("div",{className:pe,children:(0,L.jsxs)("div",{className:ke,children:[(0,L.jsx)(O,{item:e}),(0,L.jsx)(me,{item:e,spec:s,logger:r,size:ue.sm})]})})]})};var Be=i(85387),Re=i(44481),Pe=i(93523),De=i(54454),Ee=i(82432),Le=i(19329);const Te="U7qJ1UbUI0C76xXqYVQY",Me="wSLUJtAztEeB6cSHzEjf",Ie="ivh1pWB_obHbkRTZRwlA",Oe="giy3mj7QBOoIdj6wwTpe",Ae="FZZUfZ2ShpHjnzy_P6Kb",ze="CppZQsRDE7tQVl_Uo22Y";i(28145),i(48261);const Fe=n.memo((({spec:e,logger:t})=>{const{openURLWithSessionTransfer:i}=(0,Le.L)(),s=(0,Ee.D)("loggedin_upgrade_button"),a=(0,Be.Zp)(),r=(0,De.k)(),{url:l,isExternal:c}=r,u=(0,n.useCallback)((()=>{let n;!1===c?(a("/premium"),n=e.upsellComponentFactory().upsellButtonFactory().hitUiNavigate({destination:"/premium"})):(i(s(l),"_blank"),n=e.upsellComponentFactory().upsellButtonFactory().hitNavigateToExternalUri({destination:l})),t.logInteraction(n)}),[c,t,a,e,i,s,l]);return(0,L.jsx)("div",{className:Te,children:(0,L.jsxs)("div",{className:Me,children:[(0,L.jsx)(d.E,{variant:"titleSmall",dir:"auto",className:Ie,children:o.Ru.get("web-player.pip-mini-player.upsell.title")}),(0,L.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",className:Oe,children:o.Ru.get("web-player.pip-mini-player.upsell.subtitle")}),(0,L.jsxs)("div",{className:ze,children:[(0,L.jsx)(Re.$,{onClick:u,size:"small",children:o.Ru.get("web-player.pip-mini-player.upsell.cta-button")}),(0,L.jsx)(Pe.H,{size:"small",onClick:()=>{const e=window.documentPictureInPicture?.window;e&&e.resizeTo(e.outerWidth-e.innerWidth+300,e.outerHeight-e.innerHeight+300)},className:Ae,children:o.Ru.get("action-trigger.button.not-now")})]})]})})}));var Ue=i(39148),We=i(21082);const He="document-pip-hover-element",_e="document-pip-cover-art",Ve="document-pip-cover-art-placeholder";var Ze=i(8268),Ke=i(16783);function Qe(e,t,i,n){try{if(!e)return i;const s=getComputedStyle(e);if(!s)return i;const a=s.getPropertyValue(t),r=parseInt(a.replace(n,""),10);return isNaN(r)?i:r}catch(e){return i}}var qe=i(38501),Ye=i(97844),Je=i(22984),Xe=i(27102),Ge=i(82935);const $e="wF7I8x6BNoB5TCxuQM6p",et="mTVLkxm92ETj9KUKj6We",tt="_ZzrZWfp7kDAE2lh9_Wc",it="Z7EJBI5IBlrJ1ze7IeeW",nt="v5BmE36Bbgt7MSjmR6Xc",st="CAQW4b5xnSED1cuM6jcp",at="Pvgy7FmdedDiDBpWdtwf",rt="GSgApqjTNqV1hBpu3zeT",lt="cRGZivJEkNn8_Q7kaHpT",ot="jOhwShRZLQkG51TckxOL",ct="Jgem6BNDvKfWTBl3cX4W",dt="ePoosDhdXDFF4p3vqKLd",ut="QGE_nRKg4bMbNKF_e7PM",mt="ddMrU_P5vADrfZCD5KQP",ht="x591ODwZ11KBAWKS6SiE",gt="yyE7Kg8ClZLrYU03bSoA",xt="GJYNq4mAAnZScLzJPrZb",vt="mBYWBXnQ_1G3IS2q0zUM",pt="F7RVFhPYBKleXl4ulrwe",kt="Q4qOSqJZ_dfNRxOBhsGE",Ct="hix4I_WU5iQPehn_m5h2",Nt="gOpH1qSy5WZp_dGqBjSO",bt="ZeSR2WPUGMRnwFnGoYp3",jt="NEKBj5FX847wFAhR57Bm",yt="dahc71cxY4Nzk6ebA2ZW",ft="vYL9B3OtXRb7_BrVMqPs",wt="dJY9K_yl2SIFh2sQav8J",St="B62SqNdB5yicbOhkDWDy",Bt="ixLnBGpFXBDXJBwJAFN2",Rt="xG6CoSo4Qt0PDw74JLdM",Pt="COvUYZFLWyAYMoZxYBWV",Dt="GrueVX2aNdOBYUmVxO1g",Et="gDC7KBL5Cbad2gkb2ECA",Lt="YjoaIyvleWu6L_m3iqwr",Tt="Z7MRt3IpXA2HKQSwTZ3p",Mt="UqNXNAlAlrI35gbbTIlL",It="JWR17pOvN2l0NGHVAi9Q",Ot="RwUrgB_h_amNMENcAmKM",At="UuWUqZ0KXYAc2I1R_tdl";const zt=({item:e,imageUrl:t})=>{const i=(0,Ue.b)(e),n=(0,L.jsx)(Je._,{className:ht,src:t,loading:"eager",testid:_e,children:(0,L.jsx)("div",{className:gt,children:(0,L.jsx)(Ye.s,{size:"xlarge",type:e.type,"data-testid":Ve})})});return i.url?(0,L.jsx)(We.N,{className:mt,to:i.url,children:n}):n},Ft=()=>{const{item:e,context:t}=(0,c.L)()??{},i=(0,n.useMemo)((()=>(0,Ge.h)(e?.images??void 0,{desiredSize:640,desiredLabel:"large"})),[e?.images,640]),s=(0,f.l)(),l=(0,r.NC)(qe.a4n),{isYourDJNarrator:o}=(0,Ke.C)(),d=(0,n.useRef)(null),u=(0,n.useCallback)((()=>{if(!d.current)return;const e=d.current?.children[0];if(!e)return;const{offsetWidth:t,offsetHeight:i}=d.current;let n=Math.min(t,i);n=Math.min(n,640),1===Qe(e,"--extra-padding",0,"")&&(n-=Math.max(Math.min(.1*n,64),12)),e.width=e.height=n}),[]),m=(0,Xe.ox)();(0,n.useEffect)((()=>(m?.addEventListener("resize",u),()=>{m?.removeEventListener("resize",u)})),[u,m]);const h=e&&function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e),g=(0,xe.N)(e);let x=!h;!h||!s&&l||(x=!0);const v=(0,n.useMemo)((()=>x&&!g&&j()),[g,x]);let p;p=o?(0,L.jsx)(Ze.aU,{}):g?(0,L.jsx)(zt,{item:e,imageUrl:i}):(0,L.jsx)(Je._,{className:ht,src:i,loading:"eager",testid:_e,children:(0,L.jsx)("div",{className:gt,children:(0,L.jsx)(Ye.s,{size:"xlarge",type:e?.type,"data-testid":Ve})})});const k=(0,n.useCallback)((()=>{v&&y()}),[v]),C=(0,n.useCallback)((e=>{"Enter"===e.key&&k()}),[k]);return e&&t&&x?(0,L.jsx)("div",{className:a()(dt,{[ut]:v}),ref:e=>{d.current=e,u()},role:"button",tabIndex:v?0:-1,onClick:k,onKeyDown:C,children:p}):null};var Ut=i(83812),Wt=i(82846);const Ht="_VL_FbQlIp3QJVkhobVP",_t="QXzDLfTNA9Jec6iN3jCK",Vt=({children:e,hideBackground:t})=>{const i=(0,Wt.w)({contrast:"highContrast"}),n=(0,Wt.w)({contrast:"minContrast"});return(0,L.jsx)("div",{className:a()(Ht,{[_t]:!t&&i&&n}),"data-testid":"pip-hover-element",style:{"--background-base":i?.["--background-base"],"--background-base-min-contrast":n?.["--background-base"]},children:e})},Zt="Y8QW_i_NBCdoV5J6qE6w",Kt="xcYkdasLqYE_e5pNhWAd",Qt=({children:e,hideBackground:t})=>(0,L.jsx)("div",{className:a()(Zt,{[Kt]:!t}),"data-testid":"pip-hover-element",children:e}),qt=({children:e,hideBackground:t})=>(0,L.jsx)(Ut.u,{property:qe.HO,renderOldExperience:()=>(0,L.jsx)(Qt,{hideBackground:t,children:e}),renderNewExperience:()=>(0,L.jsx)(Vt,{hideBackground:t,children:e})});var Yt=i(6491),Jt=i(48093),Xt=i(45415),Gt=i(29195),$t=i(31193),ei=i(909),ti=i(92849),ii=i(95752);const ni=()=>(0,L.jsx)("svg",{width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:nt,children:(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.37397 1.94965C6.60829 1.71534 6.60829 1.33544 6.37397 1.10113C6.13966 0.866812 5.75976 0.866812 5.52544 1.10113L3.47461 3.15196L1.42422 1.10157C1.18991 0.86726 0.81001 0.86726 0.575695 1.10158C0.341381 1.33589 0.341381 1.71579 0.575695 1.9501L2.62608 4.00049L0.575696 6.05087C0.341381 6.28519 0.341381 6.66509 0.575696 6.8994C0.81001 7.13372 1.18991 7.13372 1.42422 6.8994L3.47461 4.84902L5.52544 6.89985C5.75976 7.13416 6.13966 7.13416 6.37397 6.89985C6.60829 6.66554 6.60829 6.28564 6.37397 6.05132L4.32314 4.00049L6.37397 1.94965Z",fill:"#912616"})}),si=n.memo((({className:e})=>"SMALL"!==(0,he.K)().vertical?(0,L.jsx)(Yt.U,{className:e}):(0,L.jsx)(Jt.M,{className:e}))),ai=({className:e})=>{const{setVideoPlayerUIFlag:t}=(0,$t.d)(),{onClick:i}=(0,ti.D)({}),s=(0,n.useCallback)((()=>{t(ei.n.documentPip,!1),i()}),[t,i]),r=(0,Gt.mv)();return(0,L.jsxs)("div",{style:{display:"var(--mini-player-drag-display)"},className:a()(e,tt),children:[(0,L.jsx)("button",{className:it,onClick:s,children:r.operatingSystem===ii.f.macOS?(0,L.jsx)(ni,{}):(0,L.jsx)(Xt.M,{size:"xsmall",className:nt})}),(0,L.jsx)(si,{className:at}),(0,L.jsx)("div",{className:st})]})};var ri=i(85172),li=i(40638),oi=i(97827),ci=i(7259),di=i(22726),ui=i(72954),mi=i(99701);const hi=({onClick:e,item:t,className:i,showDelayOnHover:n})=>(0,L.jsx)(mi.Zp,{label:(0,di.gHQ)(t.uri)?o.Ru.get("context-menu.copy-episode-link"):o.Ru.get("context-menu.copy-track-link"),showDelay:n,children:(0,L.jsx)("div",{className:a()(i),children:(0,L.jsx)(ui.w,{sharingInfo:null,uri:t.uri,onClick:e,size:"small",interactionData:{type:"click",intent:"share"},disableTooltip:!0,ariaLabel:(0,di.gHQ)(t.uri)?o.Ru.get("context-menu.copy-episode-link"):o.Ru.get("context-menu.copy-track-link"),className:ie})})});var gi=i(56507),xi=i(32277),vi=i(13947);const pi=n.memo((({pipWindowSize:e,item:t,spec:i,logger:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:l,onClickVolumeButton:o,onClickVolumeBar:c,onDragVolumeBar:d,onClickSeekBack:u,onClickSeekForward:m}=V({uri:t.uri,spec:i,logger:n}),h=(0,li.YQ)(d,500,{leading:!1,trailing:!0});return"DEFAULT"===e.vertical?(0,L.jsx)(oi.v3,{onClick:m,className:X}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(ci.M,{mode:ci.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:o,onVolumeBarClick:c,onVolumeBarDrag:h,className:X,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(oi.hC,{onClick:u,className:X,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(oi.xJ,{onClick:l,className:a()(X,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(oi.v3,{onClick:m,className:X,showDelayOnHover:1e3})})]})})),ki=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:l,onClickSkipPrevious:o,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickSeekBack:h,onClickSeekForward:g,onClickShare:x}=V({uri:e.uri,spec:t,logger:i}),v=(0,li.YQ)(m,500,{leading:!1,trailing:!0}),p="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,N=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[p&&(0,L.jsx)("div",{className:Dt,children:(0,L.jsx)(O,{item:e})}),p&&(0,L.jsx)("div",{className:ft,children:(0,L.jsx)("div",{className:G,children:(0,L.jsx)(me,{item:e,spec:t,logger:i,className:a()(X,le,"encore-base-set")})})}),(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ci.M,{mode:ci.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:p?"horizontal":s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:X,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(oi.hC,{onClick:h,className:ae,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Rt,children:(0,L.jsx)(oi.dQ,{onClick:o,className:ne,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(oi.xJ,{iconSize:N?"medium":"small",onClick:l,className:a()(X,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Bt,children:(0,L.jsx)(oi.$K,{onClick:c,className:se,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(oi.v3,{onClick:g,className:re,showDelayOnHover:1e3})}),!p&&(0,L.jsx)(hi,{item:e,onClick:x,className:X,showDelayOnHover:1e3}),p&&(0,L.jsx)("div",{className:Pt,children:(0,L.jsx)(hi,{item:e,onClick:x,className:X,showDelayOnHover:1e3})})]})})),Ci=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:l,onClickSkipPrevious:o,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickShuffle:h,onClickRepeat:g,onClickShare:x}=V({uri:e.uri,spec:t,logger:i}),v=(0,li.YQ)(m,500,{leading:!1,trailing:!0}),p="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,N=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[p&&(0,L.jsx)("div",{className:Dt,children:(0,L.jsx)(O,{item:e,className:X})}),p&&(0,L.jsx)("div",{className:ft,children:(0,L.jsx)("div",{className:G,children:(0,L.jsx)(me,{item:e,spec:t,logger:i,className:a()(X,le,"encore-base-set")})})}),!p&&(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ci.M,{mode:ci.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:X,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),p&&(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ci.M,{mode:ci.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:"horizontal",onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:X,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:a()(Rt,X),children:(0,L.jsx)(xi.w,{renderEnabled:()=>(0,L.jsx)(gi.a,{size:"small",withSnackbar:!1,className:ee,showDelayOnHover:1e3}),renderDisabled:()=>(0,L.jsx)(oi.uP,{onClick:h,className:ee,showDelayOnHover:1e3})})}),(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(oi.dQ,{onClick:o,className:$,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(oi.xJ,{iconSize:N?"medium":"small",onClick:l,className:a()(X,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(oi.$K,{onClick:c,className:$,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Bt,children:(0,L.jsx)(oi.s_,{onClick:g,className:te,showDelayOnHover:1e3})}),!p&&(0,L.jsx)(hi,{item:e,onClick:x,className:X,showDelayOnHover:1e3}),p&&(0,L.jsx)("div",{className:Pt,children:(0,L.jsx)(hi,{item:e,onClick:x,className:X,showDelayOnHover:1e3})})]})})),Ni=n.memo((({item:e,spec:t,logger:i})=>{const s=e.uri,[a,r]=n.useState("vertical"),l=n.useRef(null),o=(0,he.K)();if(n.useEffect((()=>{if(l.current){const e=l.current.getBoundingClientRect().top;r(e-26<80?"horizontal":"vertical")}}),[o.height]),!s)return null;if((0,xe.N)(e))return(0,L.jsx)(pi,{item:e,spec:t,logger:i,pipWindowSize:o,direction:a,volumeIconRef:l});const c=function(e){if((0,J.p)(e)||(0,vi.d)(e))return"audio"===e.mediaType||"mixed"===e.mediaType;return!1}(e);return c?(0,L.jsx)(ki,{item:e,spec:t,logger:i,pipWindowSize:o,direction:a,volumeIconRef:l}):(0,L.jsx)(Ci,{item:e,spec:t,logger:i,pipWindowSize:o,direction:a,volumeIconRef:l})}));var bi=i(85771);const ji=n.memo((({item:e,spec:t,logger:i,onDragEnd:s,onDragStart:a})=>{const r=e.uri,{onClickProgressBar:l,onDragProgressBar:o}=V({uri:r,spec:t,logger:i}),c=(0,n.useCallback)(((e,t)=>{switch(t){case"drag":return o(e);case"hit":return l(e);default:return(0,_.k)(t)}}),[l,o]);return(0,L.jsx)(bi.x,{isPreview:!1,onChange:c,onDragStart:a,onDragEnd:s,timerPlacement:"above"})}));function yi(e){if(!e)return null;return{width:e.innerWidth,height:e.innerHeight}}var fi=i(42878);var wi=i(19616),Si=i(53133),Bi=i(83158),Ri=i(37948),Pi=i(33449),Di=i(5179),Ei=i(50671);const Li=()=>(0,L.jsxs)("svg",{className:At,width:"9",height:"9",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("line",{x1:"0.823223",y1:"8.82322",x2:"8.82322",y2:"0.823223",stroke:"#727272",strokeWidth:"0.5"}),(0,L.jsx)("line",{x1:"4.82322",y1:"8.82322",x2:"8.82322",y2:"4.82322",stroke:"#727272",strokeWidth:"0.5"})]}),Ti=(0,n.memo)((()=>{const e=(0,n.useRef)(null),[t,i]=(0,n.useState)(!1),s=(0,he.K)(),d="SMALL"===s.vertical,u="SMALL"===s.horizontal,[m,h]=(0,n.useState)(null),[g,x]=(0,n.useState)(null),v=(0,n.useRef)(null),[p,k]=(0,n.useState)(!1),{item:C,context:N}=(0,c.L)()??{},b=640,f="xlarge",w=(0,r.NC)(qe.Ln9),S=(0,n.useMemo)((()=>(0,Ge.h)(C?.images??void 0,{desiredSize:b,desiredLabel:f})),[C?.images,b]),R=(0,Di.H)(),P=(0,Ri.z)(S,"transparent"),D=(0,r.NC)(qe.a4n);(0,Bi.M)({desiredSize:b,desiredLabel:f});const{spec:E,logger:T}=(0,B.r)(l.w,{});(({spec:e,logger:t})=>{const i=(0,Xe.ox)(),s=(0,n.useRef)(null);null===s.current&&(s.current=yi(i)),(0,fi.s)((()=>{const n=yi(i);null!==n&&null!==s.current&&(t.logInteraction(e.dragUiResize2d({startWidthPx:s.current.width,startHeightPx:s.current.height,endWidthPx:n.width,endHeightPx:n.height})),s.current=n)}),{throttleTime:500,leading:!1,trailing:!0})})({logger:T,spec:E}),(({spec:e,logger:t,pipWindow:i})=>{(0,n.useEffect)((()=>{if(!i)return;const n=n=>{if(n.currentTarget===i){const i=e.windowControlsFactory().closeButtonFactory().hitUiHide();t.logInteraction(i)}};return i.addEventListener("pagehide",n),()=>{i.removeEventListener("pagehide",n)}}),[t,i,e])})({logger:T,spec:E,pipWindow:window.documentPictureInPicture?.window??null});const{setVideoPlayerUIFlag:M}=(0,$t.d)(),[I,O]=(0,n.useState)("");(0,n.useLayoutEffect)((()=>{O(et)}),[]),(0,n.useEffect)((()=>{D&&M(ei.n.documentPip,!0)}),[D,M]);const{enqueueSnackbar:A}=(0,Si.d)(),z=(0,n.useCallback)((e=>{var t;(t=e.target)&&"object"==typeof t&&"nodeName"in t&&"A"===t.nodeName&&"_blank"!==e.target.target&&(j()?y():A(o.Ru.get("web-player.pip-mini-player.snackbar.link-opened-in-main-window")))}),[A]);((e,t)=>{const i=(0,Xe.ox)(),s=t??i;(0,n.useEffect)((()=>{e&&s&&(s.document.title=e)}),[e,s])})(o.Ru.get("web-player.pip-mini-player.window-title"));const F=(0,n.useRef)(null),U=(0,r.NC)(qe.HYy),W=(0,Ei.t)(E,U),[H,_]=(0,n.useState)(!1),[V,Z]=(0,n.useState)(!1),K=(0,n.useRef)(null),Q=(0,n.useRef)(null),q=(0,n.useCallback)((()=>{_(!0),K.current&&clearTimeout(K.current),K.current=setTimeout((()=>{_(!1);const e=Qe(F.current,"--mouse-active-over-controls-fadeout-timeout",300,"ms");Q.current&&clearTimeout(Q.current),Q.current=setTimeout((()=>{Q.current=null}),e)}),1e3)}),[]),Y=(0,n.useCallback)((()=>{Q.current||_(!1)}),[]),J=(0,n.useCallback)((()=>{Z(!0)}),[]),X=(0,n.useCallback)((()=>{Z(!1)}),[]),G=(0,n.useCallback)((()=>{i(!0)}),[]),$=(0,n.useCallback)((()=>{i(!1)}),[]),ee=(0,n.useCallback)((()=>{k(!0)}),[]),te=(0,n.useCallback)((()=>{k(!1),$()}),[$]),ie=(0,n.useCallback)((()=>{if(v.current){const e=v.current.getBoundingClientRect(),t=.5,i=.5,n=e.width*t-2.5,s=e.width*i-2.5;h(n),x(s)}}),[]);(0,n.useEffect)((()=>{ie()}),[s.width,s.height,ie]),(0,n.useEffect)((()=>{const e=()=>{ie()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[ie]),(0,n.useEffect)((()=>{const e=new ResizeObserver(ie),t=v.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[ie]);const ne=(0,n.useCallback)((e=>{if(!t)return;const i=v.current;if(i){const t=i.getBoundingClientRect(),n=("rtl"===document.documentElement.dir?t.right-e.clientX:e.clientX-t.left)/t.width,s=1-n,a=t.width*n-2.5,r=t.width*s-2.5;a>40&&r>80&&(h(a),x(r))}}),[t]);if(!C||!N)return null;const se=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(C),ae=(0,xe.N)(C),re=!w&&!ae,le={"--background-color":P,"--background-image-url":`url(${S})`,"--background-image-width":"640px","--background-image-height":"640px","--player-controls-max-width":ae?"140px":"260px",display:"var(--mini-player-display)",cursor:t?"grabbing":"default"};return(0,L.jsxs)(wi.SnackbarProvider,{domRootRef:e,children:[(0,L.jsxs)("div",{ref:F,className:a()("encore-dark-theme","encore-small-devices-theme",$e),style:{"--mini-player-display":"none","--mini-player-drag-display":"none"},children:[(0,L.jsx)(ai,{}),(0,L.jsxs)("div",{className:a()(lt,ot),style:le,ref:W,onMouseLeave:te,onMouseEnter:ee,children:[re&&(0,L.jsx)(Fe,{spec:E,logger:T}),(0,L.jsx)(Pi.d,{dynamicColors:R,children:(0,L.jsx)(qt,{hideBackground:se,children:(0,L.jsx)("div",{className:ct,id:"document-pip-main-container",children:(0,L.jsx)(Ft,{})})})}),!d&&(0,L.jsx)(Se,{item:C,className:Nt,onClick:z,isSmallWidth:u}),d?(0,L.jsxs)("div",{ref:v,className:bt,style:{display:"grid",gridTemplateColumns:`${m}px 5px ${g}px`,gridTemplateAreas:"'contextinfo divider playercontrols'"},role:"button",tabIndex:0,onMouseMove:ne,onMouseUp:$,onMouseLeave:$,children:[(0,L.jsx)("div",{className:It,children:(0,L.jsx)(Se,{item:C,className:Nt,onClick:z,isSmallWidth:u})}),p&&!u&&(0,L.jsx)("div",{className:Et,dir:"ltr",children:(0,L.jsx)("div",{className:a()(Tt,{[Mt]:t}),onMouseDown:G,tabIndex:-1,role:"button",children:(0,L.jsx)("div",{className:Lt})})}),(0,L.jsxs)("div",{className:a()("encore-over-media-set",xt,{[Ct]:H||V,[kt]:(0,xe.N)(C)}),dir:"ltr","data-testid":He,onMouseEnter:q,onMouseMove:q,onMouseLeave:Y,children:[(0,L.jsx)("div",{className:a()(vt,Ot),dir:"ltr",children:(0,L.jsx)(Ni,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(pt),dir:"ltr",children:(0,L.jsx)(ji,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:J})})]})]}):(0,L.jsxs)("div",{className:a()("encore-over-media-set",xt,{[Ct]:H||V,[kt]:(0,xe.N)(C)}),dir:"ltr","data-testid":He,onMouseEnter:q,onMouseMove:q,onMouseLeave:Y,children:[(0,L.jsx)("div",{className:a()(vt),dir:"ltr",children:(0,L.jsx)(Ni,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(pt),dir:"ltr",children:(0,L.jsx)(ji,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:J})})]})]}),(0,L.jsx)("div",{className:I,children:(0,L.jsx)(ri.B,{fadeIn:!1})}),(0,L.jsx)("div",{ref:e,className:rt})]}),(0,L.jsx)(Li,{})]})}))},29543:(e,t,i)=>{i.d(t,{d:()=>n});const n=e=>{const t=e?.metadata?.["dislike-endpoint"]??null;return{dislikeEndpoint:t,shouldShowFeedbackControls:"1"===e?.metadata?.["dislike-feedback-available"]&&null!==t}}},48555:(e,t,i)=>{i.d(t,{a:()=>n.a});var n=i(4041)},85771:(e,t,i)=>{i.d(t,{x:()=>n.x});var n=i(98676)},97827:(e,t,i)=>{i.d(t,{$K:()=>c.$,dQ:()=>o.d,hC:()=>a.h,s_:()=>s.s,uP:()=>l.u,v3:()=>r.v,w0:()=>d.w,xJ:()=>n.x});var n=i(92699),s=i(85601),a=i(12253),r=i(61711),l=i(89059),o=i(97127),c=i(62747),d=i(83019)},7259:(e,t,i)=>{i.d(t,{M:()=>n.M,V:()=>n.V});var n=i(86286)},16514:(e,t,i)=>{i.d(t,{o:()=>w});var n=i(30758),s=i(97500),a=i.n(s),r=i(93523),l=i(8518),o=i(78350),c=i(14503),d=i(22726),u=i(31417),m=i(99701),h=i(38165),g=i(98712),x=i(51354),v=i(608),p=i(11893),k=i(33329),C=i(21549);const N="VcqCvLW71lZT4kqnCgt0";var b=i(86070);const j=({contextUri:e="",uri:t,id:i=t,className:s,canAdd:d})=>{const{description:p}=(0,v.f)(),j=(0,k.s)(),{spec:y}=(0,C.r)(c.A,{data:{uri:e}}),f=(0,n.useCallback)((()=>{j.logInteraction(y.undoButtonFactory({uri:t}).hitUiHide())}),[j,y,t]),w=(0,n.useCallback)((()=>{j.logInteraction(y.removeRecommendationButtonFactory({uri:t}).hitRemoveRecommendation({recommendedItemUri:t,contextUri:e}))}),[e,j,y,t]),S=(0,n.useCallback)((()=>{j.logInteraction(y.addRecommendationButtonFactory({uri:t}).hitAddToPlaylist({playlist:e,itemToBeAdded:t}))}),[e,j,y,t]),{removeRecommendation:B,addRecommendation:R,canRemoveRecommendation:P,canAddRecommendation:D}=(0,h.t)({uri:t,uid:i,contextUri:e,onUndo:f,onRemoveRecommendation:w,onAddRecommendation:S}),E=(0,n.useCallback)((()=>p?u.Ru.get("web-player.smart-shuffle.add-to-playlist-button",p):u.Ru.get("web-player.smart-shuffle.add-to-playlist-button-fallback")),[p]),L=(0,x.y)();return(0,b.jsxs)("div",{className:a()(N,s),children:[P&&(0,b.jsx)(m.Zp,{label:u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),children:(0,b.jsx)(r.H,{onClick:B,iconOnly:l.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),condensedAll:!0})}),d&&D&&(0,b.jsx)(m.Zp,{label:E(),children:(0,b.jsx)(r.H,{onClick:R,iconOnly:o.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":E(),condensedAll:!0})})]})},y=e=>{const t=(0,p.J)(e.contextUri);return(0,b.jsx)(j,{...e,canAdd:t?.canAdd??!1})},f=e=>(0,b.jsx)(j,{...e,canAdd:!0}),w=e=>e.contextUri&&(0,d.tbX)(e.contextUri)?(0,b.jsx)(y,{...e,contextUri:e.contextUri}):e.contextUri&&(0,d.Z0m)(e.contextUri)?(0,b.jsx)(f,{...e,contextUri:e.contextUri}):(0,b.jsx)(j,{...e,canAdd:!1})},29997:(e,t,i)=>{i.d(t,{X:()=>n.X});var n=i(41364)},92849:(e,t,i)=>{i.d(t,{D:()=>d});var n=i(30758),s=i(86996);var a=i(31193),r=i(909),l=i(89402),o=i(29634),c=i(21549);const d=({item:e,onClick:t})=>{const i=(0,l.W)(),{capabilities:{isEnabled:d},isOpen:u,close:m,open:h,canOpen:g}=(0,o.H)(),{videoPlayerMode:x}=(0,a.d)(),{spec:v,logger:p}=(0,c.r)(s.h9,{data:{identifier:x===r.K.cinemaLegacy?s.gw.CINEMA:s.gw.DESKTOP}}),k=(0,n.useCallback)((()=>{let n;d&&(u?(m(),e?.uri&&p.logInteraction(v.pipButtonFactory({uri:e.uri}).hitUiHide()),n="close-picture-in-picture"):(h(),e?.uri&&(({spec:e,logger:t,uri:i})=>{const n=window.documentPictureInPicture;if(!n)return;const s=a=>{setTimeout((()=>{const n=a.window?.innerWidth,s=a.window?.innerHeight;if(!n||!s)return;const r=e.pipButtonFactory({uri:i}).hitUiOpenWindow({widthPx:n,heightPx:s});t.logInteraction(r)}),100),n.removeEventListener("enter",s)};n.addEventListener("enter",s)})({spec:v,logger:p,uri:e.uri}),n="show-picture-in-picture"),t?.(!u,e?.uri),i({type:"click",intent:n,targetUri:e?.uri,itemIdSuffix:"picture-in-picture-toggle"}))}),[m,d,u,e?.uri,p,t,i,h,v]);return{showButton:g,isActive:u,onClick:k}}},42878:(e,t,i)=>{i.d(t,{s:()=>l});var n=i(30758),s=i(40638),a=i(27102);const r={throttleTime:100,leading:!0};function l(e,t=r){const i=(0,a.ox)(),{throttleTime:l,...o}=t,c=(0,s.YQ)(e,l,o);(0,n.useEffect)((()=>(i?.addEventListener("resize",c),()=>{i?.removeEventListener("resize",c),c.cancel()})),[c,i])}},60384:(e,t,i)=>{i.d(t,{I:()=>c});var n=i(30758),s=i(1599),a=i(72671);var r=i(87182),l=i(29074),o=i(2679);const c=({uri:e,setFeedbackPath:t,removeFeedbackPath:i,contextUri:c})=>{const d=(0,r.z)(),u=(0,l.m)(),{isPlaying:m}=(0,o.te)(e),h=(0,n.useCallback)((()=>{c&&u.resync(c)}),[c,u]);return{setDislikeFeedback:(0,n.useCallback)((async()=>{t&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("POST").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),t,e),h(),m&&d.skipToNext())}),[t,e,h,m,d]),removeDislikeFeedback:(0,n.useCallback)((async()=>{i&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("DELETE").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),i,e),h())}),[i,h,e])}}},5179:(e,t,i)=>{i.d(t,{H:()=>r});var n=i(23300),s=i(58685),a=i(82935);function r(){const e=(0,s.o)((e=>e?.item),((e,t)=>e?.uri===t?.uri)),t=(0,a.h)(e?.images||void 0,{desiredLabel:"large",desiredSize:600})??e?.images?.[0]?.url??"",{data:i}=(0,n.g)([t]);return i??null}},28145:(e,t,i)=>{i.d(t,{A:()=>n});const n={videoPlayerContainer:"ngkFeIGFyNUaxRspbs5H"}}}]);
//# sourceMappingURL=xpui-pip-mini-player.js.map