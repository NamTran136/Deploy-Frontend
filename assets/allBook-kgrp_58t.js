import{r as a,a as S,A as N,B as k,j as t,L as P}from"./index-BSbp0FSU.js";import{S as b,M as B}from"./Menu-Y_NbBSX3.js";import{T as E}from"./Title-DvW9DyvO.js";import{P as L}from"./Pagination-Cu-JZCf2.js";import"./index-DRhXAqaf.js";const M=()=>{const[h,r]=a.useState(!1),[c,u]=a.useState([]),[x,m]=a.useState(null),[d,f]=a.useState([]),[e,i]=a.useState(1),[o]=a.useState(12),[l,g]=a.useState(0);a.useEffect(()=>{j()},[]),a.useEffect(()=>{f(c.slice((e-1)*o,(e-1)*o+o))},[c]);const j=async()=>{r(!0),await S.get(N+k).then(s=>{const n=s.data;u(n),g(Math.ceil(n.length/o)),m(null)}).catch(s=>{m("Không có sách nào"),console.log(s)}).finally(()=>{r(!1)})};function p(s){s==="&laquo;"||s==="... "?i(1):s==="&lsaquo;"?e!==1&&i(e-1):s==="&rsaquo;"?e!==l&&i(e+1):s==="&raquo;"||s===" ..."?i(l):typeof s=="number"&&i(s)}return a.useEffect(()=>{f(c.slice((e-1)*o,(e-1)*o+o))},[e]),t.jsxs("div",{className:"allBook-container",children:[t.jsxs("div",{className:"allBook-content",children:[t.jsx(E,{text:"Tất cả sách"}),h&&t.jsx("span",{children:"Loading..."}),x&&t.jsx("span",{className:"red mt-2",children:"Hiện tại chưa có sách nào"}),t.jsx("div",{className:"list-book",children:d.length>0&&d.map((s,n)=>t.jsx("div",{className:"book-item",children:t.jsxs(P,{to:`/book/${s.id}`,children:[t.jsx("img",{src:s.imageUrl,alt:s.title}),t.jsx("div",{className:"",children:s.title})]})},n))}),t.jsx(L,{totalPages:l,page:e,limit:o,siblings:1,onPageChange:p})]}),t.jsx("div",{className:"sub-item-container",children:t.jsx(b,{})}),t.jsx("div",{className:"menu-container",children:t.jsx(B,{})})]})};export{M as default};
