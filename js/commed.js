$(function(){
    //메뉴
    $(".main li").mouseover(function(){
        $(".sub").stop().slideDown();
    })//mouseover
    $(".main li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//mouseover

    
    $(".main li").mouseover(function(){
        $(".sub_bg").stop().slideDown();
    })//mouseout
    $(".main li").mouseout(function(){
        $(".sub_bg").stop().slideUp();
    })//mouseout


    //이미지영역

    $(".fade li").eq(0).siblings().hide();
    var n = 0; //0 1 2

    setInterval(function(){
        // $(".fade li").eq(n).fadeOut();
        if(n == 2){
            n = 0;
        }else{
            n++;
        }
        // $(".fade li").eq(n).fadeIn();
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        console.log(n)
        
    },2500)


})//j end