import{b as p,r as c,n as g,a as r,A as l,B as d,_ as o,c as f,j as e,L as b}from"./index-BSbp0FSU.js";const v=()=>{const n=p();c.useEffect(()=>{m()},[]);const{id:i}=g(),[t,h]=c.useState({id:0,code:"",title:"",description:"",author:"",language:"",imageUrl:"",isPrivate:!1,categoryId:0,numOfDownloads:0,numOfViews:0,category:""}),m=()=>{r.get(l+d+`/${i}`).then(s=>{const a=s.data;h(a)}).catch(s=>{console.log(s),o.error("Có lỗi xảy ra khi tải")})},{token:u}=f(s=>s.user),x=()=>{n("/admin/books")},j=s=>{s.preventDefault(),r.delete(`${l}${d}/${i}`,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${u}`}}).then(a=>{a.status===204&&(o.success("Delete this book successfully."),setTimeout(()=>{n("/admin/books")},3e3))}).catch(a=>{console.log(a.message),o.error("Delete this book unsuccessfully.")})};return e.jsx("div",{className:"detail-container",onClick:x,children:e.jsxs("div",{className:"detail-content",onClick:s=>{s.stopPropagation()},children:[t&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Detail of Book"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("strong",{children:"Code: "}),t.code]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("strong",{children:"Name: "}),t.title]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("strong",{children:"Author: "}),t.author]}),e.jsx("div",{className:"mt-2",children:e.jsx("strong",{children:"Would you like to delete this? "})})]}),e.jsx("form",{onSubmit:j,children:e.jsxs("div",{className:"btn-wrapper",children:[t&&e.jsx("button",{type:"submit",className:"btn-primary",children:"Confirm"}),e.jsx(b,{to:"/admin/books",className:"btn-secondary",children:"Cancel"})]})})]})})};export{v as default};