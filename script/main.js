$(document).ready(function() {
    
    // 디자인, 프론트엔드 그래프 버튼
    $(".design-btn").on("click", function() {
        $(".design-box").show();
        $(".front-box").hide();
    });
    $(".front-btn").on("click", function() {
        $(".front-box").show();
        $(".design-box").hide();
    });
    
    // 그래프 애니메이션
    function animated_contents1() {
        $(".design-box .bar > div ").each(function () {
            var $this  = $(this),
                skills = $this.data('width');
        
            $this.animate({'width' : skills + '%'}, 1000);
        });
    }
    function animated_contents2() {
        $(".front-box .bar > div ").each(function () {
            var $this  = $(this),
                skills = $this.data('width');
        
            $this.animate({'width' : skills + '%'}, 1000);
        });
    }

    let designBoxA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                if(jQuery().appear) {
                    $('.design-box .bar').appear().on('appear', function() {
                        animated_contents1();
                    });
                } else {
                    animated_contents1();
                }
            }
        })
    });
    let designBox = document.querySelector(".design-box");
    designBoxA.observe(designBox);

    let frontBoxA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                if(jQuery().appear) {
                    $('.front-box .bar').appear().on('appear', function() {
                        animated_contents2();
                    });
                } else {
                    animated_contents2();
                }
            }
        })
    });
    let frontBox = document.querySelector(".front-box");
    frontBoxA.observe(frontBox);

    // contact-text-ani
    let text = document.querySelector(".contact-text-ani");
    designBoxA.observe(designBox);
    let contentText = text.innerHTML;
    console.log(contentText);
    text.innerHTML = "";
    let i = 0;

    let textA = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                function typing(){
                    if (i < contentText.length) {
                    let txt = contentText.charAt(i);
                    text.innerHTML += txt;
                    i++;
                    }
                }
                function timerset() {
                    setInterval(typing, 100)   
                }
                setTimeout(timerset, 1000);
            }
        })
    });
    textA.observe(text);


    // alt 속성 으로 이름 바꾸기
    for(x=0; x<$(".for-items").length; x++){
        $(".for-items").eq(x).find("> .normal-p > span").text($(".for-items").eq(x).find("> img").attr("alt"));
    }

    // 웹 샘플 이미지 애니메이트
    $(".web-img-container").on("mouseover", function() {
        $(this).find("img").stop(1).animate({
            marginTop:$(".web-img-container").height()-$(this).find("img").height()
        }, 3000, 'linear');

        $(".web-img-container").on("mouseleave", function() {
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

    $(".mobile-menu").on("click", function() {
        $(".mobile-nav-wrap").animate({"right":"0"}, 300, "linear");

        $(".mobile-nav-wrap").on("click", function() {
            $(this).animate({"right":"100%"}, 300, "linear");

        });
    });
});