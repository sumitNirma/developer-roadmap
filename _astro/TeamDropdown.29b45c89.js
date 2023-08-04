import{h as l,p as m,_ as S}from"./hooks.module.588e47ed.js";import{D as $}from"./dropdown.d1f25819.js";import{a as j}from"./http.82ebf0f1.js";import{u as C}from"./use-auth.13ac07ad.js";import{u as L}from"./use-outside-click.48e5e038.js";import{S as D}from"./Spinner.5c883e87.js";import{b as w,c as x}from"./team.12f2469e.js";import{u as v}from"./index.9fd707a6.js";import{u as _}from"./use-team-id.c4977929.js";import{u as k}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.c718f406.js";import{k as A}from"./preact.module.ce248672.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function V(){const c=C(),{teamId:o}=_(),[b,N]=l(!1);m(()=>{const t=localStorage.getItem("viewedTeamsCount"),s=parseInt(t||"0",10),g=s<5;N(g),g&&localStorage.setItem("viewedTeamsCount",(s+1).toString())},[]);const r=v(x),a=v(w),T=k(),d=S(null),[n,u]=l(!0),[p,f]=l(!1),h=a?a.avatar:c?.avatar,y=a?a.name:c?.name;L(d,()=>{f(!1)});async function I(){const{response:t,error:s}=await j("https://api.roadmap.sh/v1-get-user-teams");if(s||!t){T.error(s?.message||"Something went wrong");return}x.set(t)}m(()=>{!o||!r||w.set(r.find(t=>t._id===o))},[r,o]),m(()=>{u(!0),I().finally(()=>{u(!1)})},[]);const i=r.filter(t=>t.status==="invited").map(t=>t._id);return e(A,{children:[e("div",{className:"relative mr-2",children:[e("span",{className:"mb-2 flex items-center justify-between text-xs uppercase text-gray-400",children:[e("span",{children:"Choose Team"}),b&&e("span",{class:"mr-1 inline-flex h-1 w-1 items-center justify-center font-medium text-blue-300",children:e("span",{class:"relative flex items-center",children:[e("span",{class:"relative rounded-full bg-gray-200 p-1 text-xs"}),e("span",{class:"absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-gray-400 p-1 text-xs"})]})})]}),e("button",{className:"flex w-full cursor-pointer items-center justify-between rounded border p-2 text-sm hover:bg-gray-100",onClick:()=>f(!p),children:[i.length>0&&e("span",{className:"absolute -left-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white",children:i.length}),e("div",{className:"mr-1.5 inline-grid grid-cols-[16px_auto] items-center gap-1.5",children:[n&&e(D,{className:"h-4 w-4",isDualRing:!1}),!n&&e("img",{src:h?`https://dodrc8eu8m09s.cloudfront.net/avatars/${h}`:"/images/default-avatar.png",alt:"",className:"h-4 w-4 rounded-full object-cover"}),e("span",{className:"truncate",children:[!n&&y,n&&"Loading .."]})]}),e("img",{alt:"show dropdown",src:$,className:"h-4 w-4"})]}),p&&e("div",{ref:d,className:"absolute top-full z-50 mt-2 w-full rounded-md bg-slate-800 px-2 py-2 text-white shadow-md",children:[e("ul",{children:[e("li",{children:e("a",{className:"flex w-full cursor-pointer items-center gap-2 truncate rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",href:"/account",children:e("span",{className:"truncate",children:"Personal Account"})})}),r.map(t=>{let s="";return t.status==="invited"?s=`/respond-invite?i=${t.memberId}`:t.status==="joined"&&(s=`/team/progress?t=${t._id}`),e("li",{children:e("a",{className:"flex w-full cursor-pointer items-center gap-2 rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",href:`${s}`,children:[e("span",{className:"min-w-0 flex-grow truncate",children:t.name}),i.includes(t._id)&&e("span",{className:"flex rounded-md bg-red-500 px-2 text-xs text-white",children:"Invite"})]})})})]}),e("a",{className:"mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-gray-100 p-2 text-sm font-medium text-slate-800 hover:opacity-90",href:"/team/new",children:[e("span",{children:"+"}),e("span",{children:"New Team"})]})]})]}),e("hr",{class:"my-4"})]})}export{V as TeamDropdown};
