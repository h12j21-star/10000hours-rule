// js file

//input으로 받은 text화면에 띄우기
//let sumit_form = document.querySelector('#res-1hours');
//let form = document.querySelector('#1hours-form')
let wanabe = document.querySelector('.re-wanabe');
let time =  document.querySelector('.re-time');
let inp_want =  document.querySelector('.inp-want');
let inp_time = document.querySelector('.inp-time');
let btn_res = document.querySelector('.btn-res');

function print_TimeWant (){
  let val_want = inp_want.value;
  let val_time = inp_time.value;
  wanabe.textContent=val_want;
  time.textContent=val_time;
}
btn_res.addEventListener('click',(event)=>{
  event.preventDefault();
  print_TimeWant ()
})


//버튼 누르면 모달창 나타나고 없어지기
const open = () =>{
  document.querySelector(" .cont-modal").style.display="block";
}
const close = () =>{
  document.querySelector(" .cont-modal").style.display="none";
}
document.querySelector('.btn-wrapper .btn-go').addEventListener('click',open);
document.querySelector('.cont-modal').addEventListener("click",close);