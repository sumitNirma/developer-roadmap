import{u as o}from"./index.9fd707a6.js";import{S as n}from"./spinner.164b1eeb.js";import{p as l}from"./page.c1a8a472.js";import{h as m,p as c}from"./hooks.module.588e47ed.js";import{o as e}from"./jsxRuntime.module.c718f406.js";import"./index.a98c85f5.js";import"./preact.module.ce248672.js";function b(i){const{initialMessage:t}=i,[r,a]=m(t),s=o(l);return c(()=>{s!==void 0&&a(s)},[s]),r?e("div",{children:e("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-75",children:e("div",{class:"flex  items-center justify-center rounded-md border bg-white px-4 py-2 ",children:[e("img",{src:n,alt:"Loading",className:"h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-4 sm:w-4"}),e("h1",{className:"ml-2",children:[r,e("span",{className:"animate-pulse",children:"..."})]})]})})}):null}export{b as PageProgress};
