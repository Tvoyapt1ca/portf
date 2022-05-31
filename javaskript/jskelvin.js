const nav=document.querySelector('#nav')

const navBtn=document.querySelector('#button__header')

const navBtnImg=document.querySelector('#nav__btn__img')

navBtn.onclick=()=>{
    if (nav.classList.toggle('open')){
        navBtnImg.src="img/NAV CLOSE.svg";
} else{
    navBtnImg.src="img/navopen.svg";
}
}

AOS.init({
   // disable:'mobile',
    // once:true
}
);