/**
 * Created by Administrator on 2017/3/16.
 */
//个人中心头部开始
//字体颜色切换
$(".gxr_Sellershop_page").css("color","#fff");
$(".gxr_Sellershop_logo>li>a").click(function () {
    $(this).css("color","#fff").parent().siblings().children("a").css("color","#000");
    var gxrchange=$(this).data("index");
    // alert(gxrchange);
    if(gxrchange==1){
        $(".gxr_Sellershop_arrow").css("margin-left","-437px");
    }
    if(gxrchange==2){
        $(".gxr_Sellershop_arrow").css("margin-left","-325px");
    }
    if(gxrchange==3){
        $(".gxr_Sellershop_arrow").css("margin-left","-190px");
    }
    if(gxrchange==4){
        $(".gxr_Sellershop_arrow").css("margin-left","-50px");
    }
});
//个人中心头部结束
//主体部分开始
//左半部分开始
//分类文字变色
$(".gxr_Sellershop_bpersonald").click(function () {
    $(this).css("background-color","#ffc22e").siblings(".gxr_Sellershop_bpersonald").css("background-color","#fff");
});
//左半部分结束
//右半部分开始

//右半部分结束
//主体部分结束