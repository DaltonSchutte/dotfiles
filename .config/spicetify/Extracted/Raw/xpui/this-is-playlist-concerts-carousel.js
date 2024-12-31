"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3632],{36619:(e,t,a)=>{a.d(t,{d:()=>r});const r=new(a(57776).l)("addConcertToLibrary","mutation","c4670bb9503f201cff5a61ee426a0aa93cac0eaa1c1b9b8c66d53e058f270f7c",null)},26487:(e,t,a)=>{a.d(t,{$:()=>r});const r=new(a(57776).l)("removeConcertFromLibrary","mutation","2b6a3dc45db6b423eb36c628ccb26768f2c03e75ae274e09a1701336d46dd21d",null)},15558:(e,t,a)=>{a.d(t,{$V:()=>r,Bw:()=>l,Lw:()=>i,V5:()=>u,dR:()=>o,eO:()=>c,m4:()=>m,se:()=>s,w1:()=>d,ys:()=>n});const r=e=>"data"in e&&Object.keys(e.data).length>0,n=e=>"concerts"in(e??{}),s=e=>null!=e,o=e=>"__typename"in e&&"AllEvents"===e.__typename,c=e=>"__typename"in e,i=e=>"__typename"in e,l=e=>!!e&&"sections"in e,d=e=>"__typename"in e,u=e=>Object.keys(e).includes("data"),m=e=>void 0!==e&&Object.keys(e).includes("uri")},84578:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var r=a(30758),n=a(422),s=a(85961),o=a(47186),c=a(31417),i=a(881),l=a(56515),d=a(21082),u=a(33329),m=a(50671),h=a(7060),v=a(86070);const y=e=>{const{artistName:t,artistConcertsUri:a,position:r,spec:s}=e,o=(0,u.s)(),i=s.concertsCarouselFactory().allEventsCardFactory({position:r,uri:a}),y=(0,m.t)(i);return(0,v.jsx)("section",{ref:y,children:(0,v.jsx)("div",{className:h.A.cards,children:(0,v.jsx)("div",{className:h.A.allEventsCard,children:(0,v.jsxs)("div",{className:h.A.cardContent,children:[(0,v.jsx)(n.E,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:h.A.subtitle,children:c.Ru.get("concerts_on_tour")}),(0,v.jsx)(n.E,{as:"h1",variant:"bodyMediumBold",className:h.A.title,semanticColor:"textBase",children:t}),(0,v.jsx)(d.N,{to:a,className:h.A.cardLink,onClick:()=>{const e=i.hitUiNavigate({destination:a});o.logInteraction(e)},children:(0,v.jsx)(l.n,{as:"span",size:"small",className:h.A.cardButton,children:c.Ru.get("concerts_see_all_events")})})]})})})})},f=e=>e.artistName&&e.artistConcertsUri?(0,v.jsx)(y,{...e}):null;var x=a(95089),b=a(78350),C=a(36619),g=a(26487),j=a(54926),N=a(29195),p=a(53133);const D=e=>{const{concertUri:t,concertTitle:a,venue:s,imageUrl:o,date:i,spec:l,position:y}=e,{enqueueSnackbar:f}=(0,p.d)(),[D,R]=(0,r.useState)(e.saved),[A,w]=(0,r.useState)(!1),k=(0,j.l4)(i),_=(0,u.s)(),{getGraphQLLoader:B}=(0,N.mv)(),U=B(),I=l.concertsCarouselFactory().concertCardFactory({position:y,uri:t}),S=(0,m.t)(I),F=async()=>{w(!0);const e=I.interestedButtonFactory();if(!A)try{D?(await((e,t)=>e(g.$,{concertUri:t}))(U,t),R(!1),f(c.Ru.get("concerts_removed-from-your-saved-events")),_.logInteraction(e.hitRemoveInterest())):(await((e,t)=>e(C.d,{concertUri:t}))(U,t),R(!D),f(c.Ru.get("concerts_added-to-your-saved-events")),_.logInteraction(e.hitAddInterest()))}finally{w(!1)}};return(0,v.jsx)("section",{ref:S,children:(0,v.jsx)("div",{className:h.A.cards,children:(0,v.jsxs)("div",{className:h.A.tourCard,"data-testid":"on-tour-card",children:[o&&(0,v.jsx)("img",{className:h.A.cardImage,src:o,alt:""}),(0,v.jsx)(d.N,{to:t,className:h.A.eventCard,onClick:()=>{const e=I.hitUiNavigate({destination:t});_.logInteraction(e)},children:(0,v.jsxs)("div",{className:h.A.cardContent,children:[(0,v.jsx)(n.E,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:h.A.subtitle,children:[(0,j.Y)(k),(0,j.WB)(k)].join(" • ")}),(0,v.jsx)(n.E,{as:"h1",variant:"bodyMediumBold",className:h.A.title,semanticColor:"textBase",children:a}),(0,v.jsx)(n.E,{as:"h3",variant:"bodyMediumBold",semanticColor:"textSubdued",className:h.A.venue,children:s})]})}),(0,v.jsx)("div",{className:h.A.interestedIcon,onClick:F,onKeyPress:F,role:"button",tabIndex:0,children:D?(0,v.jsx)(x.k,{semanticColor:"textBrightAccent"}):(0,v.jsx)(b.P,{semanticColor:"textBase"})})]})})})},R=e=>e.concertTitle&&e.concertUri?(0,v.jsx)(D,{...e}):null,A=e=>{const{liveEvents:t,artistConcertsUri:a,artistName:l,spec:d}=e,m=(0,r.useRef)(null),y=(0,u.s)();return(0,v.jsxs)("div",{className:h.A.concertsCarousel,children:[(0,v.jsx)(n.E,{as:"h1",variant:"bodyMediumBold",semanticColor:"textBase",children:c.Ru.get("concerts")}),(0,v.jsxs)("div",{className:h.A.carouselContent,ref:m,children:[t.map(((e,t)=>(0,v.jsx)("div",{className:h.A.eventCard,children:(0,v.jsx)(R,{concertUri:e.uri,concertTitle:e.title,venue:e.venue,imageUrl:e.imageUrl,date:e.startDate,position:t+1,spec:d,saved:e.saved})},t))),(0,v.jsx)("div",{className:h.A.eventCard,children:(0,v.jsx)(f,{artistConcertsUri:a,artistName:l,spec:d,position:t.length+1})})]}),t.length>0&&(0,v.jsxs)("div",{className:h.A.concertsCarouselControls,children:[(0,v.jsx)(i.a,{size:"sm",onClick:()=>{m.current?.scrollBy({left:-420,behavior:"smooth"});const e=d.concertsCarouselFactory().previousButtonFactory().hitUiReveal();y.logInteraction(e)},icon:s.g,ariaLabel:c.Ru.get("carousel.left"),tabIndex:-1,className:h.A.carouselControlPrev}),(0,v.jsx)(i.a,{size:"sm",onClick:()=>{m.current?.scrollBy({left:420,behavior:"smooth"});const e=d.concertsCarouselFactory().nextButtonFactory().hitUiReveal();y.logInteraction(e)},icon:o.V,ariaLabel:c.Ru.get("carousel.right"),tabIndex:-1,className:h.A.carouselControlNext})]})]})}},54926:(e,t,a)=>{a.d(t,{Fn:()=>m,MW:()=>h,Py:()=>d,VJ:()=>u,Vi:()=>x,WB:()=>v,WZ:()=>y,Y:()=>c,dp:()=>i,l4:()=>o,m7:()=>f,tX:()=>C,tj:()=>l});var r=a(12058),n=a(31417),s=a(15558);const o=e=>new Date(e.substring(0,16)),c=e=>n.Ru.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),i=e=>n.Ru.formatDate(e,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}),l=e=>n.Ru.formatDate(e,{month:"short"}),d=e=>n.Ru.formatDate(e,{day:"numeric"}),u=e=>n.Ru.formatDate(e,{weekday:"short"}),m=e=>n.Ru.formatDate(e,{month:"short",day:"numeric"}),h=e=>n.Ru.formatDate(e,{weekday:"short",hour:"numeric",minute:"numeric"}),v=e=>n.Ru.formatDate(e,{hour:"numeric",minute:"numeric"}),y=(e,t)=>{if(e.toDateString()===t.toDateString())return c(e);if(e.getMonth()===t.getMonth()){return`${n.Ru.formatDate(e,{day:"numeric",month:"short"})}–${n.Ru.formatDate(t,{day:"numeric"})}`}return`${n.Ru.formatDate(e,{day:"numeric",month:"short"})}–${n.Ru.formatDate(t,{day:"numeric",month:"short"})}`},f=e=>{if(!e)return!1;const t=new Date(e);return new Date>t},x=e=>{const[t]=e,a=e[e.length-1];return(0,s.$V)(t)&&(0,s.$V)(a)?{startDate:o(t.data.startDateIsoString),endDate:o(a.data.startDateIsoString)}:{startDate:new Date,endDate:new Date}},b={month:"short",day:"numeric"},C=e=>{if((0,r.r)(e.from,e.to))return n.Ru.formatDate(e.from,b);return`${n.Ru.formatDate(e.from,b).replace(/ /g," ")} - ${n.Ru.formatDate(e.to,b).replace(/ /g," ")}`}}}]);
//# sourceMappingURL=this-is-playlist-concerts-carousel.js.map