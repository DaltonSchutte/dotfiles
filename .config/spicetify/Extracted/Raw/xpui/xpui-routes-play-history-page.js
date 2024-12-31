"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1460],{50915:(e,i,s)=>{s.d(i,{u:()=>x});var t=s(97500),a=s.n(t),r=s(40638),n=s(16832),l=s(68118),c=s(89402),o=s(94139),d=s(33329),u=s(14178),m=s(86070);const x=({uri:e,src:i,playAriaLabel:s,onClick:t,isPlaying:x,isActive:y,isLocked:p,isEpisode:h,isVideo:g,spec:j})=>{const P=(0,c.W)(),A=(0,d.s)(),b=(0,r.YQ)((i=>{let s;if(P({type:"click",intent:x?"pause":"play"}),j){const i=j.playbackButtonFactory();let t;t=y&&x?i.hitPause({itemToBePaused:e}):y&&!x?i.hitResume({itemToBeResumed:e}):i.hitPlay({itemToBePlayed:e}),s=A.logInteraction(t)}t(i,s)}),o.d,{leading:!0,trailing:!1});return(0,m.jsxs)("div",{className:u.A.rowImageWithPlay,children:[(0,m.jsx)(l.e,{src:i,isEpisode:h,isVideo:g}),(0,m.jsx)(n.x,{className:a()(u.A.rowPlayPauseButton,u.A.rowImagePlayPauseButton),iconClassName:u.A.rowPlayPauseIcon,onClick:b,isPlaying:x,isLocked:p,playAriaLabel:s})]})}},89771:(e,i,s)=>{s.d(i,{H:()=>c});var t=s(88218),a=s(422),r=s(31417),n=s(45387),l=s(86070);const c=()=>(0,l.jsxs)("div",{className:n.A.emptyContainer,children:[(0,l.jsx)(t.q,{size:"xxlarge","aria-hidden":"true"}),(0,l.jsxs)("div",{className:n.A.titleContainer,children:[(0,l.jsx)(a.E,{as:"h1",variant:"titleMedium",semanticColor:"textBase",children:r.Ru.get("history.empty-title")}),(0,l.jsx)("p",{children:r.Ru.get("history.empty-description")})]})]})},3436:(e,i,s)=>{s.d(i,{M:()=>t.M});var t=s(61137)},13129:(e,i,s)=>{s.r(i),s.d(i,{default:()=>re});var t=s(2983),a=s(422),r=s(31417),n=s(89771),l=s(30758),c=s(37115),o=s(96614),d=s(4266),u=s(22726),m=s(65462),x=s(62648),y=s(91676),p=s(76720),h=s(54622),g=s(32183),j=s(80737),P=s(14563),A=s(20455),b=s(50915),k=s(27305),v=s(95931),R=s(82391),E=s(13679),C=s(38215),I=s(93627),T=s(95797),U=s(35522),w=s(44335),f=s(3436),B=s(42621),L=s(99041),O=s(97253),M=s(18663),_=s(44672),N=s(85346),q=s(28340),F=s(7307),H=s(15838),S=s(14178),K=s(86070);const D=l.memo((function({uri:e,name:i,duration_ms:s,index:t,imgUrl:a,artists:n,album:l,isExplicit:c,isMOGEFRestricted:o,contextItem:d,type:D}){const{isActive:G,isPlaying:V,triggerPlay:Q,togglePlay:X}=(0,q.P)({uri:e,pages:[{items:[{...d}]}]},{featureIdentifier:"history"}),$=D===F.c.TRACK,z=D===F.c.EPISODE,W=D===F.c.CHAPTER,J=(0,N.T)(e),{isPlayable:Y,isAnyArtistBanned:Z}=(0,B.g)(e,{isPlayable:!0,isLocal:(0,u.PkR)(e),isOutOfMarket:!1,artistUris:n?.map((e=>e.uri))}),{unBanArtists:ee}=(0,f.M)(n.map((e=>e.uri))),{badges:ie,hasBadges:se}=(0,H.b)({downloadAvailability:J,isExplicit:c,isMOGEFRestricted:o}),te=n?.map((e=>e.name)).join(r.Ru.getSeparator())||"";let ae;return z?ae=(0,K.jsx)(y.b,{uri:e,contextUri:e,showUri:l.uri}):W?ae=(0,K.jsx)(x.r,{uri:e}):$&&(0,u.PkR)(e)?ae=(0,K.jsx)(p.A,{uri:e,contextUri:e}):$&&(ae=(0,K.jsx)(h.P,{uri:e,contextUri:e,albumUri:l.uri,artists:n})),(0,K.jsx)(_.pZ,{value:"row",index:t,children:(0,K.jsx)(m.h,{menu:ae,children:(0,K.jsxs)(U.w,{uri:e,contextUri:e,index:t,ariaRowIndex:t,onTriggerPlay:()=>{Q()},isActive:G,isPlayable:Y,isAnyArtistBanned:Z,handleArtistBanUndoClick:ee,ageRestricted:o,dragMetadata:{name:i,createdBy:te},isExplicit:c,children:[(0,K.jsxs)(E.U,{ariaColIndex:0,children:[(0,K.jsx)(b.u,{uri:e,src:a,isPlaying:V,isActive:G,isLocked:!1,onClick:()=>{X()},isEpisode:(0,u.gHQ)(e),playAriaLabel:r.Ru.get("tracklist.a11y.play",i,te)}),(0,K.jsxs)(k.l,{children:[(0,K.jsx)(T.p,{titleText:i,children:i}),se&&(0,K.jsxs)(P.P,{children:[ie.download&&(0,K.jsx)(O._,{}),ie.explicit&&(0,K.jsx)(L.U,{}),ie.nineteen&&(0,K.jsx)(M.q,{className:S.A.nineteen,size:16})]}),(0,K.jsx)(I.p,{children:(0,u.U_m)(e)?(0,K.jsx)(j.l,{artists:n}):n[0]?.name??""})]})]}),(0,K.jsx)(C.o,{ariaColIndex:2,children:(0,K.jsx)(g.g,{nonInteractive:(0,u.PkR)(e),uri:l.uri,name:l.name,creatorUri:n?.[0]?.uri,children:l.name})}),(0,K.jsxs)(R.l,{ariaColIndex:1,children:[!W&&(0,K.jsx)(w.d,{uri:e,type:D}),(0,K.jsx)(A.P,{duration:s}),(0,K.jsx)(v.Y,{menu:ae,label:r.Ru.get("more.label.track",i,te)})]})]})})})}),((e,i)=>e.uri===i.uri));var G=s(28828),V=s(75497),Q=s(13947),X=s(45627),$=s(5805),z=s(4861),W=s(85907),J=s(63096);const Y=l.memo((function({items:e}){const i=(0,l.useCallback)(((e,i)=>{const s=(0,J.g)(e.images??[],{desiredSize:40});return(0,$.v)(e)?(0,K.jsx)(D,{index:i,uri:e.isLocal?e.uri:(0,G.a)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:s?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,contextItem:e,type:F.c.TRACK},i+e.uri):(0,X.p)(e)?(0,K.jsx)(D,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:s?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:F.c.EPISODE},i+e.uri):(0,Q.d)(e)?(0,K.jsx)(D,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:s?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:F.c.CHAPTER},i+e.uri):((0,V.N)(e)||(0,z.v)(e)||(0,W.k)(e),(0,K.jsx)(c.qq,{height:`${o.FL}px`}))}),[]),s=(0,l.useMemo)((()=>[d.$.TITLE_AND_ARTIST,d.$.ALBUM_OR_PODCAST,d.$.DURATION]),[]),t=(0,l.useCallback)((e=>({uri:e.uri})),[]);return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(_.pZ,{value:"play-history-tracklist",children:(0,K.jsx)(o.S4,{ariaLabel:"play-history",hasHeaderRow:!0,columns:s,renderRow:i,resolveItem:t,tracks:e,nrTracks:e.length,rowPlaceholder:c.qq,limit:50,columnPersistenceKey:"play-history-tracklist"})})})}));var Z=s(44003);const ee="j0idwRGPXbi0ampiGHUF",ie="V6Kms48prL8QhkQxTJ2d",se=()=>{const{isLoading:e,data:i}=(0,Z.a)();return e?null:i?.items.length?(0,K.jsxs)("div",{className:ee,children:[(0,K.jsx)(a.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:ie,children:r.Ru.get("view.recently-played")}),(0,K.jsx)(Y,{items:i.items})]}):(0,K.jsx)(n.H,{})};var te=s(61896),ae=s(98855);const re=()=>(0,ae.y)()?(0,K.jsx)(te.U,{children:(0,K.jsx)(se,{})}):(0,K.jsx)(t.$,{to:"/"})},44003:(e,i,s)=>{s.d(i,{a:()=>o});var t=s(16273),a=s(50486),r=s(81823),n=s(44621),l=s(30758);const c=["play-history-contents"];function o(){const e=(0,n.q)(),i=(0,t.jE)();return function(e,i){const s=(0,n.q)();(0,l.useEffect)((()=>s.getEvents().addListener(e,i)),[e,i,s])}(r.X.UPDATE,(e=>i.setQueryData(c,e.data))),(0,a.I)({queryKey:c,queryFn:()=>e.getContents(),gcTime:3e5,staleTime:0})}},45387:(e,i,s)=>{s.d(i,{A:()=>t});const t={emptyContainer:"BP2Fv3OX_ZYbjdA4lovg",large:"Mxz3x1XNHpH4SvqEVkt0",titleContainer:"Olk6uKV_CIIVtWRrdRJc",icon:"AIW16bVmugXaJ42KBNKQ"}}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map