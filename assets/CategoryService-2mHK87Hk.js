import{r as a,a as k,A as D,C as I,j as e,x as O,y as M,z as $,L as h,J as z}from"./index-BSbp0FSU.js";import{A as B,a as H}from"./AdminSidebarMobile-4DVHEuT3.js";import{F as J}from"./index-C9NtNJBW.js";import{P as T}from"./Pagination-Cu-JZCf2.js";function U({sortOrder:m,columnKey:o,sortKey:c,onClick:l}){return e.jsx("button",{onClick:l,className:`${c===o&&m==="desc"?"":"rotate-180"}`,children:e.jsx(J,{size:16})})}const G=[{Header:"S.No",value:"id"},{Header:"Name",value:"name"}],_=()=>{const[m,o]=a.useState(!1),[c,l]=a.useState(!1),[x,b]=a.useState(!1),[u,S]=a.useState([]),[f,N]=a.useState(null),[d,y]=a.useState("asc"),[g,C]=a.useState("id"),[t,n]=a.useState(1),[i]=a.useState(5),[j,P]=a.useState(0);a.useEffect(()=>{v()},[]);const v=async()=>{o(!0),await k.get(D+I).then(s=>s.data).then(s=>{S(s),P(Math.ceil(s.length/i))}).catch(s=>{N("List of Categories unavailable"),console.log(s)}).finally(()=>{o(!1)})};function A(s){s==="&laquo;"||s==="... "?n(1):s==="&lsaquo;"?t!==1&&n(t-1):s==="&rsaquo;"?t!==j&&n(t+1):s==="&raquo;"||s===" ..."?n(j):typeof s=="number"&&n(s)}function L({tableData:s,sortKey:r,reverse:q}){if(!r)return s;const p=s.sort((w,R)=>w[r]>R[r]?1:-1);return q?p.reverse():p}const E=a.useCallback(()=>L({tableData:u,sortKey:g,reverse:d==="desc"}),[u,g,d]);function F(s){y(d==="asc"?"desc":"asc"),C(s)}return e.jsxs("div",{className:"admin-container",style:{gridTemplateColumns:x?"1fr 15fr":"1fr 4fr",gap:x?"0.5rem":"2rem"},children:[e.jsx(B,{isFold:x,setIsFold:b}),e.jsx(H,{isOpen:c,setIsOpen:l}),e.jsx("div",{className:"open-menu-icon",children:e.jsx(O,{size:24,onClick:()=>l(!c)})}),e.jsxs("main",{className:"dashboard",children:[e.jsxs("div",{className:"bar",children:[e.jsx(M,{}),e.jsx("input",{type:"text",placeholder:"Search for data, users, docs"}),e.jsx($,{}),e.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",alt:"User"})]}),e.jsx("div",{className:"table-container",children:e.jsxs("div",{className:"dashboard-category-box",children:[e.jsx("h2",{className:"heading",children:"List of Categories"}),m&&e.jsx("span",{children:"Loading..."}),u&&e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[G.map(s=>e.jsx("th",{children:e.jsxs("div",{className:"th-wrapper",children:[s.Header,e.jsx(U,{columnKey:s.value,onClick:()=>F(s.value),sortOrder:d,sortKey:g})]})},s.value)),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:E().slice((t-1)*i,(t-1)*i+i).map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:r+1}),e.jsx("td",{children:s.name}),e.jsxs("td",{className:"btn-wrapper",children:[e.jsx(h,{className:"bg-blue",to:`/admin/category/read/${s.id}`,children:"Read"}),e.jsx(h,{className:"bg-orange",to:`/admin/category/edit/${s.id}`,children:"Edit"}),e.jsx(h,{className:"bg-red",to:`/admin/category/delete/${s.id}`,children:"Delete"})]})]},r))})]}),e.jsx(T,{totalPages:j,page:t,limit:i,siblings:1,onPageChange:A}),f&&e.jsx("div",{className:"red",children:f})]})}),e.jsx(h,{to:"/admin/category/new",className:"create-category-btn",children:e.jsx(z,{})})]})]})};export{_ as default};