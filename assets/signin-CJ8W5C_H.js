import{r as g,u as x,c as j,j as s,L as c,X as f,a as S,A as b,h as w,Y as l,_ as n,Z as y}from"./index-BSbp0FSU.js";import{O as A}from"./OAuth-awIQA6Ii.js";import"./firebase-DDMDz6z8.js";function v(){const h={email:"",password:""},[i,p]=g.useState(h),t=x(),{loading:r}=j(e=>e.user),o=e=>{p({...i,[e.target.id]:e.target.value})},u=async e=>{e.preventDefault();try{t(f());const{data:a,status:d}=await S.post(`${b}${w}/login`,i,{headers:{"Content-Type":"application/json",Accept:"application/json"}});if(d!==200){t(l()),n.error("Có lỗi xảy ra trong quá trình đăng nhập");return}localStorage.setItem("token",a);const m=new Date().getTime();localStorage.setItem("setupTime",m.toString()),t(y(a)),n.success("Đăng nhập thành công!"),window.location.href=localStorage.getItem("previousUrl")||"http://localhost:3000/admin"}catch(a){t(l(a.message)),console.log(a.message),n.error("Email hoặc mật khẩu không chính xác")}};return s.jsxs("div",{className:"sign-in",children:[s.jsx("h1",{className:"title",children:"Đăng nhập"}),s.jsxs("form",{onSubmit:u,className:"form",children:[s.jsx("input",{required:!0,type:"email",placeholder:"Email",id:"email",onChange:o}),s.jsx("input",{required:!0,type:"password",placeholder:"Mật khẩu",id:"password",onChange:o}),s.jsx("button",{disabled:r,children:r?"Loading...":"Đăng nhập"}),s.jsx(A,{})]}),s.jsxs("div",{className:"sub-signin",children:[s.jsx("p",{children:"Bạn chưa có tài khoản."}),s.jsx(c,{to:"/signup",children:s.jsx("span",{className:"blue",children:"Thêm mới"})})]}),s.jsx("div",{className:"sub-signin",children:s.jsx(c,{to:"/",children:s.jsx("span",{className:"blue",children:"Quay lại trang chủ"})})})]})}export{v as default};
