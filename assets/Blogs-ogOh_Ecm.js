import{r as t,a as p,A as g,v as u,j as s,x as A,y as B,z as C,L as D,J as q,_ as f}from"./index-BSbp0FSU.js";import{A as E,a as F}from"./AdminSidebarMobile-4DVHEuT3.js";import{P as I}from"./Pagination-Cu-JZCf2.js";const T=()=>{const[b,r]=t.useState(!1),[d,h]=t.useState(!1),[c,y]=t.useState(!1),[x,N]=t.useState([]),[j,S]=t.useState(null),[a,l]=t.useState(1),[n]=t.useState(5),[o,L]=t.useState(0);t.useEffect(()=>{m()},[]);const m=async()=>{r(!0),await p.get(g+u).then(e=>e.data).then(e=>{N(e),L(Math.ceil(e.length/n))}).catch(e=>{S("List of Blogs unavailable"),console.log(e)}).finally(()=>{r(!1)})};function P(e){e==="&laquo;"||e==="... "?l(1):e==="&lsaquo;"?a!==1&&l(a-1):e==="&rsaquo;"?a!==o&&l(a+1):e==="&raquo;"||e===" ..."?l(o):typeof e=="number"&&l(e)}const w=async e=>{const{status:i}=await p.delete(g+u+`/${e}`);i===204?(f.success("Deleted this blog successfully"),m()):f.error("Deleted unsuccessfully")};return s.jsxs("div",{className:"admin-container",style:{gridTemplateColumns:c?"1fr 15fr":"1fr 4fr",gap:c?"0.5rem":"2rem"},children:[s.jsx(E,{isFold:c,setIsFold:y}),s.jsx(F,{isOpen:d,setIsOpen:h}),s.jsx("div",{className:"open-menu-icon",children:s.jsx(A,{size:24,onClick:()=>h(!d)})}),s.jsxs("main",{className:"dashboard",children:[s.jsxs("div",{className:"bar",children:[s.jsx(B,{}),s.jsx("input",{type:"text",placeholder:"Search for data, users, docs"}),s.jsx(C,{}),s.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",alt:"User"})]}),s.jsxs("div",{className:"table-container",children:[s.jsx(D,{to:"/admin/blog/new",className:"create-category-btn",style:{top:"4.2rem"},children:s.jsx(q,{})}),s.jsxs("div",{className:"table-content",children:[s.jsx("h2",{className:"heading",children:"List of Blogs"}),b&&s.jsx("span",{children:"Loading..."}),x&&s.jsxs("div",{className:"table-wrapper",children:[s.jsxs("table",{className:"shadow",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"S.No"}),s.jsx("th",{scope:"col",children:"Thumbnail"}),s.jsx("th",{scope:"col",children:"Title"}),s.jsx("th",{scope:"col",children:"Description"}),s.jsx("th",{scope:"col",children:"Date"}),s.jsx("th",{scope:"col",children:"Action"})]})}),s.jsx("tbody",{children:x.slice((a-1)*n,(a-1)*n+n).map((e,i)=>s.jsxs("tr",{children:[s.jsx("td",{children:i+1}),s.jsx("td",{scope:"row",children:s.jsx("img",{src:e.fileUrl,alt:"thumbnail"})}),s.jsx("td",{children:e.title}),s.jsx("td",{children:e.description}),s.jsx("td",{children:e.time}),s.jsx("td",{children:s.jsx("button",{onClick:()=>w(e.id),children:"Delete"})})]},i))})]}),s.jsx(I,{totalPages:o,page:a,limit:n,siblings:1,onPageChange:P})]}),j&&s.jsx("span",{className:"red",children:"..."+j})]})]})]})]})};export{T as default};