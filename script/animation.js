$(document).ready(function() {

    // 헤더 애니메이션
    let headerA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateY(0)";
            }
        })
    });
    let header = document.querySelector(".header-flex");
    headerA.observe(header);
    header.style.opacity = 0;
    header.style.transform = "translateY(-50px)";

    // scroll-icon 애니메이션
    let scrolliconA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transitionDelay = "2s";
            }
        })
    });
    let scrollicon = document.querySelector(".scroll-icon");
    scrolliconA.observe(scrollicon);
    scrollicon.style.opacity = 0;

    // profile-img-after 애니메이션
    let profileImgAfterA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let profileImgAfter = document.querySelector(".profile-img-after");
    profileImgAfterA.observe(profileImgAfter);
    profileImgAfter.style.opacity = 0;
    profileImgAfter.style.transform = "translateX(-50px)";

    // profile-img-before 애니메이션
    let profileImgBeforeA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                // box.target.style.transitionDelay = "2s";
                box.target.style.transform = "translateY(0)";
            }
        })
    });
    let profileImgBefore = document.querySelector(".profile-img-before");
    profileImgBeforeA.observe(profileImgBefore);
    profileImgBefore.style.opacity = 0;
    profileImgBefore.style.transform = "translateY(-100px)";  

    // profile-content-after 애니메이션
    let profileContentAfterA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transitionDelay = "1s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let profileContentAfter = document.querySelector(".profile-content-after");
    profileContentAfterA.observe(profileContentAfter);
    profileContentAfter.style.opacity = 0;
    profileContentAfter.style.transform = "translateX(100px)";

    // contact me 애니메이션
    let profileImg2beforeA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let profileImg2before = document.querySelector(".profile-img2-before");
    profileImg2beforeA.observe(profileImg2before);
    profileImg2before.style.opacity = 0;
    profileImg2before.style.transform = "translateX(-200px)";    

    // webdedesign-wrap-before 애니메이션
    let webdesignWrapBeforeA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateY(-50%) rotate(180deg)";  
            }
        })
    });
    let webdesignWrapBefore = document.querySelector(".webdesign-wrap-before");
    webdesignWrapBeforeA.observe(webdesignWrapBefore);
    webdesignWrapBefore.style.opacity = 0;

    // mobile-s 애니메이션
    let mobileSA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateY(0)";
            }
        })
    });
    let mobileS = document.querySelectorAll(".mobile-s");
    for(i=0; i<mobileS.length; i++){
        mobileSA.observe(mobileS[i]);
        mobileS[i].style.opacity = 0;
        mobileS[i].style.transform = "translateY(50px)";
    }

    // top-preview-after 애니메이션
    let topPreviewAfterA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let topPreviewAfter = document.querySelector(".top-preview-after");
    topPreviewAfterA.observe(topPreviewAfter);
    topPreviewAfter.style.opacity = 0;
    topPreviewAfter.style.transform = "translateX(-200px)";
});
