import{b as m,r as n,n as h,a as x,A as g,C as j,_ as p,j as a,L as i}from"./index-BSbp0FSU.js";const u=()=>{const c=m(),[e,r]=n.useState({id:0,name:""});n.useEffect(()=>{o()},[]);const{id:t}=h(),o=()=>{x.get(g+j+"/"+t).then(s=>{const l=s.data;r(l)}).catch(s=>{console.log(s),p.error("Có lỗi xảy ra khi tải")})},d=()=>{c("/admin/categories")};return a.jsx("div",{className:"detail-container",onClick:d,children:a.jsxs("div",{className:"detail-content",onClick:s=>{s.stopPropagation()},children:[a.jsx("h1",{children:"Detail of Category"}),a.jsxs("div",{className:"mt-2",children:[a.jsx("strong",{children:"ID: "}),e.id]}),a.jsxs("div",{className:"mt-2",children:[a.jsx("strong",{children:"Name: "}),e.name]}),a.jsxs("div",{className:"btn-wrapper mt-2",children:[a.jsx(i,{to:`/admin/category/edit/${t}`,className:"btn-primary",children:"Edit"}),a.jsx(i,{to:"/admin/categories",className:"btn-secondary",children:"Back"})]})]})})};export{u as default};