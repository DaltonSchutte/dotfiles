"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3890],{36148:(e,a,t)=>{t.d(a,{J:()=>i});var n=t(57776),r=t(59147);const c=new n.l("getTrack","query","5c5ec8c973a0ac2d5b38d7064056c45103c5a062ee12b62ce683ab397b5fbe7d",null),i=(e,a)=>(0,r.I)(c,e,a)},42311:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var n=t(30758),r=t(62411),c=t(85387),i=t(22726),o=t(31417),s=t(92202),l=t(36148),d=t(36061),u=t(59147),k=t(87182),f=t(29074),g=t(86070);const b=n.memo((function(){const e=(0,c.Zp)(),a=(0,c.zy)(),t=(0,f.m)(),b=(0,k.z)(),{trackId:p=""}=(0,c.g)(),{isAnonymous:m}=(0,r.d4)(d.Ht),h=(0,n.useMemo)((()=>new URLSearchParams(a.search)),[a.search]),y=h.get("context")||"",U=(0,i.Mce)(p).toURI(),_=(0,l.J)({uri:U},{gcTime:30*u.i}),T="Track"===_.data?.trackUnion.__typename&&_.data?.trackUnion?.playability.playable,I=(0,n.useCallback)(((a,t)=>{const n=b.getState(),r=(0,i.o_h)(t)?.toURLPath(!0);h.delete("context");const c=h.toString()?`&${h.toString()}`:"",o=`${r}?highlight=${U}${c}`;m?e(o):(n&&!n.isPaused||!T||a>-1&&b.play({uri:t},{featureIdentifier:"track",referrerIdentifier:"deeplink"},{skipTo:{index:a}}),e(o,{replace:!0}))}),[b,h,U,m,e,T]),w=(0,n.useCallback)((()=>{if(!_.loading&&_.data?.trackUnion&&"Track"===_.data.trackUnion.__typename){const e=(_.data.trackUnion.albumOfTrack?.tracks?.items??[]).findIndex((e=>e.track.uri===U));e>=0&&I(e,_.data.trackUnion.albumOfTrack?.uri||"")}}),[I,_,U]);return(0,n.useEffect)((()=>{const e=(0,i.tbX)(y);y&&e?t.getContents(y).then((e=>{const a=e.items.findIndex((e=>e?.uri===U));a<0?w():I(a,y)})):w()}),[y,w,I,t,U]),_.loading||_.error||"Track"!==_.data?.trackUnion?.__typename?(0,g.jsx)(s.LoadingPage,{hasError:!_.loading,errorMessage:o.Ru.get("track-page.error")}):null})),p=b}}]);
//# sourceMappingURL=xpui-routes-track.js.map