"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3417],{85277:(e,t,i)=>{i.d(t,{FeatureActivationSection:()=>Ee});var a=i(30758),l=i(57914),n=i(31417),o=i(85387),s=i(422),r=i(56515),c=i(77567),d=i(97500),u=i.n(d);const f="NTywvDEuW1PlcoR__9XV",v="BkQ1MPUWBY0WvjENXmC7",h="hwhquP1FOxRcCnf84P2M",p="MIBwSRJ5XZaCw1WWXXBn",g="dEuzpK3s_BmlRiVNFude",y="IeJGaG6QXRvfMka0gCSG",m="Wh0HGq_CXEX_JqbSYvx7",C="MVRnUhNC4ZMglLR56YMn",S="jjQUaCx5rvU20rWBzyLA";var b=i(86070);const j=({children:e,isActivated:t,inShelf:i})=>(0,b.jsx)(s.E,{as:"p",variant:"bodyMediumBold",className:u()(g,{[y]:!i}),style:{paddingInlineEnd:t?"18px":"initial"},children:e});var x=i(97548),F=i(75943),A=i(42024);const E=a.memo((function({image:e,onClick:t,id:i,title:a,body:l,footer:n,activated:o,premiumOnlyFeature:s}){return(0,b.jsx)(x.v,{className:h,media:e,id:i||"",title:a,body:l,layout:"wide",size:"xl",pretitle:(0,b.jsxs)(b.Fragment,{children:[s&&(0,b.jsx)(A.T,{color: getComputedStyle(document.body).getPropertyValue("--spice-text").trim(),height:"18",className:p}),o&&(0,b.jsx)(F.i,{size:"small",className:v})]}),variant:"elevated",footer:n,onClick:t})}));var N=i(81669),R=i(21549);const w=a.memo((function({activated:e,position:t,inShelf:i,onFeatureActivate:d}){const u=(0,o.Zp)(),f="/blend/invitation",{eventFactory:v,logger:h}=function(e,t,i,a){const{spec:n,logger:o}=(0,R.r)(l.i,{}),{spec:s,logger:r}=(0,R.r)(N.d,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedBlendCardFactory({position:i,uri:a}):n.shelfContainerFactory().blendCardFactory({position:i,uri:a}),logger:o}:{eventFactory:t?s.activatedBlendCardFactory({position:i,uri:a}):s.blendCardFactory({position:i,uri:a}),logger:r}}(i,e,t,f);(0,a.useEffect)((()=>{h.logImpression(v.impression())}),[]);const p=()=>{d(),h.logInteraction(v.hitUiNavigate({destination:f})),u(f)};return(0,b.jsx)(E,{activated:e,premiumOnlyFeature:!1,image:(0,c.b)("images/feature-activation-shelf-blend.png"),onClick:p,title:(0,b.jsx)(j,{isActivated:e,inShelf:i,children:n.Ru.get("web-player.feature-activation-shelf.blend.title")}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.blend.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{size:"small",onClick:p,children:n.Ru.get("web-player.feature-activation-shelf.invite.cta")})})]})})}));var X=i(22726);var V=i(41547);const k=a.memo((function({playlist:e,activated:t,position:i,inShelf:c,onFeatureActivate:d}){const u=(0,o.Zp)(),{eventFactory:f,logger:v}=function(e,t,i,a){const{spec:n,logger:o}=(0,R.r)(l.i,{}),{spec:s,logger:r}=(0,R.r)(N.d,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedCollaborativePlaylistCardFactory({position:i,uri:a}):n.shelfContainerFactory().collaborativePlaylistCardFactory({position:i,uri:a}),logger:o}:{eventFactory:t?s.activatedCollaborativePlaylistCardFactory({position:i,uri:a}):s.collaborativePlaylistCardFactory({position:i,uri:a}),logger:r}}(c,t,i,e?.metadata?.uri??"");(0,a.useEffect)((()=>{e&&v.logImpression(f.impression())}),[e]);const h=()=>{if(!e)return;d();const t=`${(0,X.o_h)(e.metadata.uri).toURLPath(!0)}?feature-activation=${V.X.CollaborativePlaylists}`;v.logInteraction(f.hitUiNavigate({destination:t})),u(t)};return e?(0,b.jsx)(E,{premiumOnlyFeature:!1,activated:t,image:e.metadata.images[0].url,id:"collaborative-playlists-card",onClick:h,title:(0,b.jsx)(j,{isActivated:t,inShelf:c,children:n.Ru.get("web-player.feature-activation-shelf.collaborative-playlists.title",{playlist:e.metadata.name})}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.collaborative-playlists.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{onClick:h,size:"small",children:n.Ru.get("web-player.feature-activation-shelf.invite.cta")})})]})}):null}));var H=i(134),L=i(59343),I=i(15011),B=i(30349);const M=a.memo((function({activated:e,position:t,inShelf:i,onFeatureActivate:o}){const{context:c,metadata:d}=(0,L._)(),{triggerPlay:u,isPlaying:f}=c,{maybeAddDJToLibrary:v}=(0,B.F)(),h=(0,I._)()&&d,{eventFactory:p,logger:g}=function(e,t,i){const{spec:a,logger:n}=(0,R.r)(l.i,{}),{spec:o,logger:s}=(0,R.r)(N.d,{});return e?{eventFactory:t?a.shelfContainerFactory().activatedDjCardFactory({position:i}):a.shelfContainerFactory().djCardFactory({position:i}),logger:n}:{eventFactory:t?o.activatedDjCardFactory({position:i}):o.djCardFactory({position:i}),logger:s}}(i,e,t);(0,a.useEffect)((()=>{h&&g.logImpression(p.impression())}),[h]);const y=()=>{o(),g.logInteraction(p.hitPlay({itemToBePlayed:H.N6})),f||(v(),u())};return h?(0,b.jsx)(E,{activated:e,premiumOnlyFeature:!1,image:d.images[0].url,onClick:y,title:(0,b.jsx)(j,{isActivated:e,inShelf:i,children:n.Ru.get("web-player.feature-activation-shelf.ai-dj.title")}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.ai-dj.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{size:"small",onClick:y,disabled:f,children:n.Ru.get("web-player.feature-activation-shelf.ai-dj.cta")})})]})}):null}));var Q=i(19862);const P=a.memo((function({inShelf:e,activated:t,position:i,destination:o,onFeatureActivate:d}){const{eventFactory:u,logger:f}=function(e,t,i){const{spec:a,logger:n}=(0,R.r)(l.i,{}),{spec:o,logger:s}=(0,R.r)(N.d,{});return e?{eventFactory:t?a.shelfContainerFactory().activatedGroupSessionsCardFactory({position:i}):a.shelfContainerFactory().groupSessionsCardFactory({position:i}),logger:n}:{eventFactory:t?o.activatedGroupSessionsCardFactory({position:i}):o.groupSessionsCardFactory({position:i}),logger:s}}(e,t,i);(0,a.useEffect)((()=>{f.logImpression(u.impression())}),[]);const v=()=>{d(),f.logInteraction(u.hitNavigateToExternalUri({destination:o})),window.open(o,"_blank","noopener")};return(0,b.jsx)(E,{activated:t,premiumOnlyFeature:!1,image:(0,c.b)("images/feature-activation-shelf-group-sessions.png"),onClick:v,title:(0,b.jsx)(j,{isActivated:t,inShelf:e,children:n.Ru.get("web-player.feature-activation-shelf.group-sessions.title")}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.group-sessions.description-general")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{size:"small",onClick:v,iconTrailing:Q.p,children:n.Ru.get("web-player.feature-activation-shelf.group-sessions.cta")})})]})})}));var D=i(91178),U=i(97697),Z=i(82516);const _=()=>{const e=(0,U.t)(),[{data:t},{mutate:i}]=(0,Z.K)(e.quality.streamingQuality),[{data:a}]=(0,Z.K)(e.quality.maxSupportedQuality);if(void 0===t||void 0===a)return{isAvailable:!1,isEnabled:!1,enableVeryHighQualityAudio:()=>{}};return{isAvailable:a>=D.Qi.VERY_HIGH,isEnabled:t===D.a1.VERY_HIGH,enableVeryHighQualityAudio:()=>{i(D.a1.VERY_HIGH)}}},G=a.memo((function({position:e,inShelf:t,onFeatureActivate:i}){const d=(0,o.Zp)(),{isAvailable:u,isEnabled:f,enableVeryHighQualityAudio:v}=_(),{eventFactory:h,logger:p}=function(e,t,i){const{spec:a,logger:n}=(0,R.r)(l.i,{}),{spec:o,logger:s}=(0,R.r)(N.d,{});return e?{eventFactory:t?a.shelfContainerFactory().activatedAudioQualityCardFactory({position:i}):a.shelfContainerFactory().audioQualityCardFactory({position:i}),logger:n}:{eventFactory:t?o.activatedAudioQualityCardFactory({position:i}):o.audioQualityCardFactory({position:i}),logger:s}}(t,f,e);(0,a.useEffect)((()=>{u&&p.logImpression(h.impression())}),[]);const g=e=>{i();const t="/preferences"+(e?`?${e}`:"");p.logInteraction(h.hitUiNavigate({destination:t})),d(t)},y=()=>{p.logInteraction(h.hitSetSettingField()),v(),g(`feature-activation=${V.X.VeryHighQualityAudio}`)};return u?(0,b.jsx)(E,{activated:f,premiumOnlyFeature:!1,image:(0,c.b)("images/feature-activation-shelf-audio-quality.png"),id:"audio-quality-card",onClick:f?()=>g():y,title:(0,b.jsx)(j,{isActivated:f,inShelf:t,children:n.Ru.get("web-player.feature-activation-shelf.audio-quality.title")}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.audio-quality.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{onClick:f?()=>g():y,size:"small",iconLeading:f?F.i:void 0,children:f?n.Ru.get("web-player.feature-activation-shelf.audio-quality.cta_alt"):n.Ru.get("web-player.feature-activation-shelf.audio-quality.cta")})})]})}):null}));const z="/concerts",T=a.memo((function({activated:e,position:t,inShelf:i,onFeatureActivate:d}){const u=(0,o.Zp)(),{eventFactory:f,logger:v}=function(e,t,i,a){const{spec:n,logger:o}=(0,R.r)(l.i,{}),{spec:s,logger:r}=(0,R.r)(N.d,{});return e?{eventFactory:t?n.shelfContainerFactory().activatedLiveEventsCardFactory({position:i,uri:a}):n.shelfContainerFactory().liveEventsCardFactory({position:i,uri:a}),logger:o}:{eventFactory:t?s.activatedLiveEventsCardFactory({position:i,uri:a}):s.liveEventsCardFactory({position:i,uri:a}),logger:r}}(i,e,t,z);(0,a.useEffect)((()=>{v.logImpression(f.impression())}),[]);const h=()=>{d(),v.logInteraction(f.hitUiNavigate({destination:z})),u(z)};return(0,b.jsx)(E,{activated:e,premiumOnlyFeature:!1,image:(0,c.b)("images/feature-activation-shelf-live-events.png"),id:"live-events-card",onClick:h,title:(0,b.jsx)(j,{isActivated:e,inShelf:i,children:n.Ru.get("web-player.feature-activation-shelf.live-events.title")}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.live-events.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{onClick:h,size:"small",children:n.Ru.get("web-player.feature-activation-shelf.live-events.cta")})})]})})}));var q=i(10502),O=i(57478);const Y="ES02HhKmADP_AdcKPs1e",W="IYwEYGRUJ5RTtr0EyBV1",$="YYlv5PB5fGQthi9XzTQg",J=a.memo((({isLoading:e})=>{const t=(0,O.h)("shimmer");return(0,b.jsx)("div",{ref:t,className:u()(f,{[$]:e})})})),K=a.memo((({cardImage:e,isLoading:t})=>(0,b.jsx)(x.v,{className:h,media:e||(0,b.jsx)(J,{isLoading:t}),id:"feature-skeleton-card-id",title:(0,b.jsx)(q.Y,{as:"div",variant:"bodyMediumBold",className:Y,charCount:10,isLoading:t}),body:(0,b.jsx)(q.Y,{as:"div",variant:"bodySmall",className:W,charCount:15,isLoading:t}),layout:"wide",size:"xl",variant:"elevated"})));var ee=i(46922);const te=a.memo((function({activated:e,playlist:t,position:i,inShelf:c,onFeatureActivate:d}){const{setSeen:u}=(0,ee.i)(),f=(0,o.Zp)(),{eventFactory:v,logger:h}=function(e,t,i){const{spec:a,logger:n}=(0,R.r)(l.i,{}),{spec:o,logger:s}=(0,R.r)(N.d,{});return e?{eventFactory:t?a.shelfContainerFactory().activatedSmartShuffleCardFactory({position:i}):a.shelfContainerFactory().smartShuffleCardFactory({position:i}),logger:n}:{eventFactory:t?o.activatedSmartShuffleCardFactory({position:i}):o.smartShuffleCardFactory({position:i}),logger:s}}(c,e,i);(0,a.useEffect)((()=>{t&&h.logImpression(v.impression())}),[t]);const p=(0,a.useCallback)((()=>{if(!t)return;d(),h.logInteraction(v.hitUiNavigate({destination:t.metadata.uri})),u(!1);const e=(0,X.o_h)(t.metadata.uri).toURLPath(!0);f(`${e}?feature-activation=${V.X.SmartShuffle}`)}),[f,t,u,h,v,d]);return t?(0,b.jsx)(E,{activated:e,premiumOnlyFeature:!1,image:t.metadata.images[0].url,onClick:p,title:(0,b.jsx)(j,{isActivated:e,inShelf:c,children:n.Ru.get("web-player.feature-activation-shelf.smart-shuffle.title",{playlist:t.metadata.name})}),body:(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(s.E,{as:"p",variant:"bodySmall",className:C,children:n.Ru.get("web-player.feature-activation-shelf.smart-shuffle.description")}),(0,b.jsx)("div",{className:S,children:(0,b.jsx)(r.n,{size:"small",onClick:p,children:n.Ru.get("web-player.feature-activation-shelf.smart-shuffle.cta")})})]})}):null}));var ie=i(78464),ae=i(73043),le=i(99644);const ne="RvSsw_CWBCtHhojt6bY_",oe=a.memo(a.forwardRef((function(e,t){const{className:i,render:l}=e,n=(0,a.useRef)(null),[o,s]=(0,a.useState)({columnCount:-1,columnWidth:-1,gridGap:24});(0,a.useImperativeHandle)(t,(()=>n.current));const r=(0,a.useCallback)((()=>{const e=n.current;if(!e||!e.parentElement)return;const t=e.parentElement.offsetWidth,i=(e=>e<700?1:e<1e3?2:3)(t),a=(e=>2===e?12:3===e?18:24)(i),l=Math.floor((t-(i-1)*a)/i);s({columnCount:i,columnWidth:l,gridGap:a})}),[]);(0,le.w)({refOrElement:n,observeOnly:"width",onResize:()=>{r()}}),(0,a.useLayoutEffect)((()=>{r()}),[r]);const c={"--column-count":`${o.columnCount}`,"--grid-gap":`${o.gridGap}px`};return(0,b.jsx)("div",{ref:n,className:u()(ne,i),style:c,children:l(o)})})));oe.displayName="GridContainer";var se=i(35163);const re="QD8u8vCxcfIpJC14IBqg",ce="H4yLgZB7CQJlPH3u5Qbi",de="jNsZ_X7AAz13oxU5Sx0G",ue="b49pU5FuAfdm6Ub0x7N3",fe=a.memo((function({title:e,children:t,titleUri:i,seeAllUri:l,className:n="",testId:o="component",seeAllLabel:s,onClickShelfTitle:r,onClickShelfSeeAll:c,showAll:d,elementRef:f}){const v=(0,a.useCallback)((({columnCount:e})=>(0,b.jsx)(b.Fragment,{children:d?t:Array.isArray(t)&&t.filter(((t,i)=>i<e))})),[t,d]);return Array.isArray(t)&&0===t.length?null:(0,b.jsxs)("section",{ref:f,className:u()(n,re),"data-testid":`${o}-shelf`,"aria-label":e,children:[(0,b.jsx)("div",{className:ce,children:(0,b.jsx)(ae.k,{title:e,titleUri:i,seeAllUri:l,seeAllLabel:s,showSeeAll:!d,onClickTitle:r,onClickSeeAll:c})}),(0,b.jsx)(oe,{className:u()(de,{[ue]:d}),render:v})]})}));fe.displayName="BaseShelf";const ve=e=>(0,b.jsx)(ie.s,{onError:e=>{(0,se.Jy)(e,"Shelf")},children:(0,b.jsx)(fe,{...e,showAll:e.showAll})});var he=i(62021);const pe=e=>e.desktopSessionsSinceFullActivation>=2||e.desktopSessions>=20;var ge=i(29074),ye=i(15178),me=i(78565);const Ce={offset:0,limit:50,flatten:!0,sort:{field:me.nw.RELEVANCE,order:me.xB.DESC}};function Se(e){const t=(0,ye.g)(),i=(0,ge.m)(),l=(0,a.useMemo)((()=>function(e){return async function(t){if(null===t)return null;try{const i=await e.getPlaylist(t.uri);return i?.metadata.hasSpotifyTracks?i:null}catch(e){return null}}}(i)),[i]),[n,o]=(0,a.useState)([]),[s,r]=(0,a.useState)(!1),[c,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{r(!0),t.getContents(Ce).then((t=>function({items:e},t){return e.filter(me.Af).filter((e=>e.isOwnedBySelf&&e.totalLength>0)).slice(0,t)}(t,e))).then((e=>Promise.all(e.map(l)))).then((e=>e.filter((e=>null!==e)))).then((e=>o(e))).catch(d).finally((()=>r(!1)))}),[t,l,e]),{loading:s,playlists:n,error:c}}const be={collaborativePlaylists:V.X.CollaborativePlaylists,liveEvents:V.X.LiveEvents,groupSessions:V.X.GroupSessions,veryHighQualityAudio:V.X.VeryHighQualityAudio,blend:V.X.Blend,smartShuffle:V.X.SmartShuffle,dj:V.X.Dj};function je(e){const t=[];for(const l of e)if("object"==typeof(a=l)&&null!==a&&"data"in a&&"object"==typeof a.data&&null!==a.data&&"name"in a.data){const e=null===(i=l.data.name)?null:be[i]??null;if(null===e)continue;t.push({feature:e,activated:l.data.activated,image:l.data.image,title:l.data.title,uri:l.data.uri,name:l.data.name,destination:l.data.destination})}var i,a;return t}var xe=i(29997),Fe=i(85907);const Ae=a.memo((function(e){const{features:t,localStorageKey:i}=e,{spec:o,logger:s}=(0,R.r)(l.i,{}),{isAvailable:r,isEnabled:c}=_(),d=r&&c,u=(0,I._)(),{metadata:f}=(0,L.N)(),v=(0,xe.X)(),{isAvailable:h}=_(),p=(0,a.useMemo)((()=>function(e,t){const i=e.filter((e=>e.feature===V.X.VeryHighQualityAudio)),a=e.filter((e=>e.feature!==V.X.VeryHighQualityAudio));return t?[...a.filter((e=>!e.activated)),...a.filter((e=>e.activated)),...i]:[...e.filter((e=>!e.activated)),...e.filter((e=>e.activated))]}(t,d)),[d,t]),{playlists:g,loading:y}=Se(2),m=(0,a.useMemo)((()=>p.filter((({feature:e})=>!!(e!==V.X.Dj||u&&f)&&(!!(e!==V.X.SmartShuffle||v&&0!==g.length)&&(e!==V.X.VeryHighQualityAudio||h?e!==V.X.CollaborativePlaylists||0!==g.length:null))))),[p,v,h,u,f,g]),{hideShelf:C,setFeatureActivation:S}=function(e,t){const i=t||"feature-activation-shelf-v3-interaction-state",[l,n]=(0,he.x)(i,{featureInteractionMapping:{[V.X.VeryHighQualityAudio]:!1,[V.X.Dj]:!1,[V.X.SmartShuffle]:!1,[V.X.Blend]:!1,[V.X.GroupSessions]:!1,[V.X.LiveEvents]:!1,[V.X.CollaborativePlaylists]:!1},desktopSessions:0,desktopSessionsSinceFullActivation:0});return(0,a.useEffect)((()=>{if(e)return;const t=Object.values(l.featureInteractionMapping).reduce(((e,t)=>e&&t),!0);n({...l,desktopSessionsSinceFullActivation:t?l.desktopSessionsSinceFullActivation+1:l.desktopSessionsSinceFullActivation,desktopSessions:l.desktopSessions+1})}),[]),{hideShelf:!e&&pe(l),interactionState:l,setFeatureActivation:(e,t)=>{n({...l,featureInteractionMapping:{...l.featureInteractionMapping,[e]:t}})}}}(e.showAll,i);(0,a.useEffect)((()=>{0!==m.length&&(C?s.logImpression(o.hideShelfImpressionElementFactory().impression()):s.logImpression(o.shelfContainerFactory().impression()))}),[C]);const j=(0,a.useCallback)((()=>{s.logInteraction(o.shelfTitleFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[o,s,e.uri]),x=(0,a.useCallback)((()=>{s.logInteraction(o.seeAllFeaturesFactory({uri:e.uri}).hitUiNavigate({destination:e.uri}))}),[o,s,e.uri]);return C||0===m.length?null:(0,b.jsx)(ve,{title:n.Ru.get("web-player.feature-activation-shelf.generic-title"),seeAllUri:e.uri,showAll:e.showAll,seeAllLabel:n.Ru.get("web-player.feature-activation-shelf.see_more"),onClickShelfTitle:j,onClickShelfSeeAll:x,children:y?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(K,{isLoading:!0}),(0,b.jsx)(K,{isLoading:!0}),(0,b.jsx)(K,{isLoading:!0}),(0,b.jsx)(K,{isLoading:!0}),(0,b.jsx)(K,{isLoading:!0}),(0,b.jsx)(K,{isLoading:!0})]}):m.map(((t,i)=>((e,t,i,a,l)=>{switch(e.feature){case V.X.GroupSessions:return(0,b.jsx)(P,{activated:e.activated,position:t,inShelf:i,destination:e.destination||"",onFeatureActivate:()=>a(V.X.GroupSessions,!0)},"feature-activation-shelf-group-sessions");case V.X.CollaborativePlaylists:return(0,b.jsx)(k,{activated:e.activated,playlist:l[1]??l[0]??null,position:t,inShelf:i,onFeatureActivate:()=>a(V.X.CollaborativePlaylists,!0)},"feature-activation-shelf-collaborative-playlist");case V.X.Blend:return(0,b.jsx)(w,{activated:e.activated,position:t,inShelf:i,onFeatureActivate:()=>a(V.X.Blend,!0)},"feature-activation-shelf-blend");case V.X.LiveEvents:return(0,b.jsx)(T,{activated:e.activated,position:t,inShelf:i,onFeatureActivate:()=>a(V.X.LiveEvents,!0)},"feature-activation-shelf-live-events");case V.X.VeryHighQualityAudio:return(0,b.jsx)(G,{position:t,inShelf:i,onFeatureActivate:()=>a(V.X.VeryHighQualityAudio,!0)},"feature-activation-shelf-very-high-quality-audio");case V.X.Dj:return(0,b.jsx)(M,{activated:e.activated,position:t,inShelf:i,onFeatureActivate:()=>a(V.X.Dj,!0)},"feature-activation-shelf-dj");case V.X.SmartShuffle:return(0,b.jsx)(te,{activated:e.activated,playlist:l[0]??null,position:t,inShelf:i,onFeatureActivate:()=>a(V.X.SmartShuffle,!0)},"feature-activation-shelf-smart-shuffle");default:return(0,Fe.k)(e.feature),null}})(t,i,!e.showAll,S,g)))})})),Ee=({uri:e,sectionItems:t,showAll:i=!1,localStorageKey:a})=>(0,b.jsx)(Ae,{features:je(t),showAll:i,uri:e,localStorageKey:a})},42024:(e,t,i)=>{i.d(t,{T:()=>n});var a=i(85505),l=i(86070);const n=({color:e=a.Ql9,height:t="30",className:i})=>(0,l.jsxs)("svg",{className:i,width:"114",role:"img",height:t,viewBox:"0 0 114 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("title",{id:"spotify-premium-logo-icon",children:"Spotify logo"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7835 10.7851C37.7835 10.6921 37.86 10.6156 37.9545 10.6156L40.1039 10.6246C41.8485 10.6246 42.849 11.4421 42.849 12.9076C42.849 14.2486 41.745 15.1501 40.1039 15.1501L37.9545 15.1411C37.86 15.1411 37.7835 15.0646 37.7835 14.9701V10.7851ZM40.296 8.11502L35.232 8.10602C35.1375 8.10602 35.061 8.18252 35.061 8.27552V21.8085C35.061 21.903 35.1375 21.9795 35.232 21.9795H37.614C37.707 21.9795 37.7835 21.903 37.7835 21.8085V17.631L40.026 17.64C43.4175 17.64 45.6105 15.759 45.6105 12.81C45.6105 9.95852 43.524 8.11502 40.296 8.11502Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.4025 13.4759C59.9115 13.4759 60.6195 14.6519 60.7964 15.8174H55.956C56.217 14.3879 57.1605 13.4759 58.4025 13.4759ZM58.4218 11.217C55.4805 11.217 53.262 13.5765 53.262 16.704V16.743C53.262 19.911 55.5375 22.2105 58.6725 22.2105C60.264 22.2105 61.599 21.6705 62.6473 20.604C62.718 20.5305 62.8723 20.355 62.9775 20.2335C63.039 20.163 63.0315 20.058 62.961 19.995L61.5795 18.7695C61.5165 18.714 61.4235 18.714 61.362 18.7695C61.212 18.9075 60.957 19.14 60.93 19.161C60.24 19.7115 59.553 19.953 58.7115 19.953C57.2985 19.953 56.268 19.098 55.98 17.7075H63.4305L63.4485 17.4975C63.4663 17.28 63.4831 17.079 63.4831 16.878C63.4831 14.061 61.9185 11.217 58.4218 11.217Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M76.7895 11.217C75.414 11.217 74.289 11.76 73.3575 12.876C72.7245 11.8035 71.6474 11.217 70.296 11.217C68.8529 11.217 67.968 11.9145 67.356 12.645V11.5995C67.356 11.5065 67.2795 11.43 67.1865 11.43H64.8435C64.749 11.43 64.6724 11.5065 64.6724 11.5995V21.8085C64.6724 21.903 64.749 21.9795 64.8435 21.9795H67.1865C67.2795 21.9795 67.356 21.903 67.356 21.8085V16.0665C67.356 14.622 68.1465 13.6875 69.3675 13.6875C70.5719 13.6875 71.2635 14.5275 71.2635 15.99V21.8085C71.2635 21.903 71.34 21.9795 71.433 21.9795H73.776C73.8705 21.9795 73.9469 21.903 73.9469 21.8085V16.047C73.9469 14.5695 74.6985 13.6875 75.9585 13.6875C77.5245 13.6875 77.8529 14.9505 77.8529 16.0095V21.8085C77.8529 21.903 77.9295 21.9795 78.024 21.9795H80.367C80.4615 21.9795 80.5365 21.903 80.5365 21.8085V15.294C80.5365 12.741 79.1355 11.217 76.7895 11.217Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.0376 17.361C93.0376 18.795 92.2021 19.7205 90.9106 19.7205C89.6131 19.7205 88.8991 18.897 88.8991 17.4V11.5995C88.8991 11.5065 88.8226 11.43 88.7279 11.43H86.3849C86.2921 11.43 86.2156 11.5065 86.2156 11.5995V18.096C86.2156 20.622 87.6736 22.191 90.0211 22.191C91.2421 22.191 92.2321 21.7155 93.0376 20.7405V21.8085C93.0376 21.903 93.1141 21.9795 93.2071 21.9795H95.5501C95.6446 21.9795 95.7211 21.903 95.7211 21.8085V11.5995C95.7211 11.5065 95.6446 11.43 95.5501 11.43H93.2071C93.1141 11.43 93.0376 11.5065 93.0376 11.5995V17.361Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M109.308 11.217C107.934 11.217 106.808 11.76 105.876 12.876C105.243 11.8035 104.166 11.217 102.815 11.217C101.373 11.217 100.487 11.9145 99.876 12.6435V11.5995C99.876 11.5065 99.7995 11.43 99.705 11.43H97.362C97.269 11.43 97.1925 11.5065 97.1925 11.5995V21.8085C97.1925 21.903 97.269 21.9795 97.362 21.9795H99.705C99.7995 21.9795 99.876 21.903 99.876 21.8085V16.0665C99.876 14.622 100.665 13.6875 101.888 13.6875C103.092 13.6875 103.782 14.5275 103.782 15.99V21.8085C103.782 21.903 103.859 21.9795 103.953 21.9795H106.296C106.389 21.9795 106.466 21.903 106.466 21.8085V16.047C106.466 14.5695 107.217 13.6875 108.477 13.6875C110.045 13.6875 110.373 14.9505 110.373 16.0095V21.8085C110.373 21.903 110.45 21.9795 110.543 21.9795H112.886C112.98 21.9795 113.057 21.903 113.057 21.8085V15.294C113.057 12.741 111.656 11.217 109.308 11.217Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M52.7354 11.232H52.4204C51.0464 11.2425 49.9229 11.919 49.1909 13.167V11.5995C49.1909 11.5065 49.1144 11.43 49.0199 11.43H46.6769C46.5824 11.43 46.5074 11.5065 46.5074 11.5995V21.8085C46.5074 21.903 46.5824 21.9795 46.6769 21.9795H49.0199C49.1144 21.9795 49.1909 21.903 49.1909 21.8085V17.922C49.1909 15.5085 50.3533 14.106 52.3859 14.0565L52.3889 14.055H52.7354C52.8119 14.055 52.8734 13.9935 52.8734 13.9155V11.3715C52.8734 11.295 52.8119 11.232 52.7354 11.232Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M84.5339 11.4975H82.2195C82.1265 11.4975 82.05 11.574 82.05 11.667V21.768C82.05 21.8625 82.1265 21.9375 82.2195 21.9375H84.5339C84.6285 21.9375 84.7035 21.8625 84.7035 21.768V11.667C84.7035 11.574 84.6285 11.4975 84.5339 11.4975Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M83.388 6.8985C82.4715 6.8985 81.7275 7.641 81.7275 8.5575C81.7275 9.4755 82.4715 10.2195 83.388 10.2195C84.306 10.2195 85.0485 9.4755 85.0485 8.5575C85.0485 7.641 84.306 6.8985 83.388 6.8985Z",fill:e}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.8725 13.2975C19.038 10.4265 11.0625 10.1625 6.44685 11.5635C5.7045 11.7885 4.9215 11.37 4.6965 10.629C4.4715 9.88648 4.89 9.10348 5.6325 8.87848C10.9305 7.26898 19.7385 7.58098 25.305 10.884C25.9723 11.28 26.19 12.141 25.7955 12.807C25.3995 13.473 24.5385 13.6935 23.8725 13.2975ZM23.715 17.55C23.376 18.1005 22.656 18.273 22.1055 17.9355C18.075 15.4575 11.9279 14.7405 7.15953 16.188C6.54003 16.374 5.88753 16.026 5.70003 15.408C5.51253 14.79 5.86203 14.1375 6.48003 13.95C11.9279 12.297 18.7005 13.098 23.3295 15.9435C23.88 16.281 24.0525 17.001 23.715 17.55ZM21.8789 21.6345C21.609 22.077 21.0345 22.215 20.5935 21.9465C17.0715 19.794 12.6375 19.3065 7.41602 20.5005C6.91352 20.616 6.41102 20.2995 6.29702 19.797C6.18152 19.293 6.49502 18.792 7.00052 18.678C12.714 17.3715 17.6159 17.934 21.5685 20.349C22.0095 20.619 22.149 21.195 21.8789 21.6345ZM15 0C6.7155 0 0 6.7155 0 15C0 23.2845 6.7155 30 15 30C23.2845 30 30 23.2845 30 15C30 6.7155 23.2845 0 15 0Z",fill:e})]})},41547:(e,t,i)=>{i.d(t,{X:()=>a});let a=function(e){return e.SmartShuffle="smart-shuffle",e.GroupSessions="group-sessions",e.Blend="blend",e.CollaborativePlaylists="collaborative-playlists",e.Dj="dj",e.VeryHighQualityAudio="very-high-quality-audio",e.LiveEvents="live-events",e}({})},41364:(e,t,i)=>{i.d(t,{X:()=>o});var a=i(14343),l=i(43329);let n=function(e){return e[e.DISABLED=0]="DISABLED",e[e.ENABLED=1]="ENABLED",e}({});const o=(e=!1)=>((e=!1)=>(0,a.NC)(l.uy,e?void 0:{loadingValue:!1})?n.ENABLED:n.DISABLED)(e)===n.ENABLED},46922:(e,t,i)=>{i.d(t,{i:()=>l});var a=i(62021);const l=()=>{const[e,t]=(0,a.x)("smart-shuffle-seen",!1);return{seen:e,setSeen:t}}},29997:(e,t,i)=>{i.d(t,{X:()=>a.X});var a=i(41364)},15011:(e,t,i)=>{i.d(t,{_:()=>n});var a=i(14343),l=i(38501);const n=()=>(0,a.NC)(l.p5T,{loadingValue:!1})}}]);
//# sourceMappingURL=xpui-feature-activation.js.map