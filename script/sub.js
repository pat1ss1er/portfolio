$(document).ready(function() {
    // 웹 샘플 이미지 애니메이트
    $(".img-wrap").on("mouseover", function() {
        $(this).find("img").stop(1).animate({
            marginTop:$(".img-wrap").height()-$(this).find("img").height()
        }, 3000, 'linear');

        $(".img-wrap").on("mouseleave", function() {
            $(this).find("img").stop(1).animate({
                "marginTop":"0"
            }, 1000, 'linear');
        });  
    });

    // 모바일 샘플 이미지 애니메이트
    $(".mobile-s.long").on("mouseover", function() {
        $(this).find("img").stop(1).animate({
            marginTop:$(".mobile-s").height()-$(this).find("img").height() + $(".mobile-wrap").outerHeight() - $(".mobile-wrap").outerHeight(true)
        }, 1000, 'linear');

        $(".mobile-s.long").on("mouseleave", function() {
            $(this).find("img").stop(1).animate({
                "marginTop":"0"
            }, 500, 'linear');
        });  
    });

    // 디자인 미리보기

    // 이미지 확대기능 만들기
    $(".design-img-up").hide();

    $(".source-items").each(function(index) {
        $(this).attr("data-index", index);
    
        var designIndex = index;

        $(".source-items").eq(designIndex).find("a").on("click", function() {
            
            var designNumber = $(this).parent().parent().index();

            var src = $(this).parent().find("img").attr("src");
            var CSSsrc = "url(" + src + ")";
            
            $(".design-img-box").css({"background-image":CSSsrc});     
            $(".design-img-up").show();
            
            // 이미지 좌우 이동 버튼 이벤트
            $(".design-img-box").find("a.prev").on("click", function() {
                if(designNumber <= 0){
                    designNumber = $(".source-items").length - 1;
                }else{
                    designNumber--;
                }
                var prevImg = $(this).parent().parent().parent().find(".source-items").eq(designNumber).find("img").attr("src");
                var Prevsrc = "url(" + prevImg + ")";
        
                $(".design-img-box").css({"background-image":Prevsrc});
            });
        
            $(".design-img-box").find("a.next").on("click", function() {
                if(designNumber >= $(".source-items").length - 1){
                    designNumber = 0;
                }else{
                    designNumber++;
                }
                var nextImg = $(this).parent().parent().parent().find(".source-items").eq(designNumber).find("img").attr("src");
                var nextsrc = "url(" + nextImg + ")";
        
                $(".design-img-box").css({"background-image":nextsrc});
            });
        });
    
        $(".design-img-up").find("a.close").on("click", function() {
            $(".design-img-up").css({"display":"none"});
        });
    });

    // ------------------------------ 애니메이션
    // mobile-s 애니메이션
    let mobileSA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let mobileS = document.querySelector(".mobile-s");
    mobileSA.observe(mobileS);
    mobileS.style.opacity = 0;
    mobileS.style.transform = "translateX(50px)";

   
    // info-right 애니메이션
    let infoRightA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.opacity = 1;
                box.target.style.transition = "2s";
                box.target.style.transform = "translateX(0)";
            }
        })
    });
    let infoRight = document.querySelector(".info-right");
    infoRightA.observe(infoRight);
    infoRight.style.opacity = 0;
    infoRight.style.transform = "translateX(-50px)";    

    // info-left 애니메이션
    if (matchMedia("screen and (max-width: 767px)").matches) {
        // 이상에서 사용할 JavaScript
        let infoLeftA = new IntersectionObserver((e)=>{
            e.forEach((box)=>{
                if(box.isIntersecting){
                    box.target.style.opacity = 1;
                    box.target.style.transition = "2s";
                    box.target.style.transform = "translateX(0)";
                }
            })
        });
        let infoLeft = document.querySelector(".info-left");
        infoLeftA.observe(infoLeft);
        infoLeft.style.opacity = 0;
        infoLeft.style.transform = "translateX(-50px)";         
      } else {
        // 미만에서 사용할 JavaScript
        let infoLeftA = new IntersectionObserver((e)=>{
            e.forEach((box)=>{
                if(box.isIntersecting){
                    box.target.style.opacity = 1;
                    box.target.style.transition = "2s";
                    box.target.style.transform = "translateX(0)";
                }
            })
        });
        let infoLeft = document.querySelector(".info-left");
        infoLeftA.observe(infoLeft);
        infoLeft.style.opacity = 0;
        infoLeft.style.transform = "translateX(50px)";         
      }
      
    // source-items 애니메이션
    let sourceItemsA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box.target.style.transition = "2s";
                box.target.style.transform = "translateY(0)";
                box.target.style.opacity = "1";
            }
        })
    });
    let sourceitems = document.querySelectorAll(".source-items");
    for(k=0; k<sourceitems.length; k++){
        sourceItemsA.observe(sourceitems[k]);
        sourceitems[k].style.transform = "translateY(-50px)";
        sourceitems[k].style.opacity = "0";
    }      
});