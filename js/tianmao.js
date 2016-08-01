$(function(){
	/*banner部分的轮播*/
	var banner=$(".bannerbox_n",$(".bannerbox")[0]);
	var lis=$("li",$(".btnbox")[0]);
	var list=$("li",$(".banner_list")[0]);
	var xxk=$(".xxk");
	var num=0;
	var t=setInterval(moveR,3000);
	var flag=true;
	for (var i = 0; i < banner.length; i++) {
		banner[0].style.opacity=1;
		banner[i].style.opacity=0;
		lis[0].style.background="rgba(255,255,255,0.5)";
	    lis[0].style.border="2px solid rgba(0,0,0,0.5)";
		lis[i].style.border="2px solid rgba(0,0,0,0)";
	};
	banner[0].style.opacity=1;
	function moveL(){
		num--;
		if (num<0) {
			num=banner.length-1;
		};
		for (var i = 0; i < banner.length; i++) {
			banner[i].style.opacity=0;
			lis[i].style.background="rgba(0,0,0,0.5)";
			lis[i].style.border="2px solid rgba(0,0,0,0)";
		}
		animate(banner[num],{opacity:1},800,function(){
		    	flag=true;
		    });
		lis[num].style.background="rgba(255,255,255,0.5)";
		lis[num].style.border="2px solid rgba(0,0,0,0.5)";
	}
	function moveR(){
		num++;
		if (num==banner.length) {
			num=0;
		};
		for (var i = 0; i < banner.length; i++) {
			banner[i].style.opacity=0;
			lis[i].style.background="rgba(0,0,0,0.5)";
			lis[i].style.border="2px solid rgba(0,0,0,0)";
		}
		animate(banner[num],{opacity:1},800,function(){
		    	flag=true;
		    });
		lis[num].style.background="rgba(255,255,255,0.5)";
		lis[num].style.border="2px solid rgba(0,0,0,0.5)";
	}
	/*banner部分鼠标移动事件*/
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
			clearInterval(t);
            for (var j = 0; j < banner.length; j++) {
			    banner[j].style.opacity=0;
			    lis[j].style.background="rgba(0,0,0,0.5)";
			    lis[j].style.border="2px solid rgba(0,0,0,0)";
		    }
		    animate(banner[this.index],{opacity:1},300,function(){
		    	flag=true;
		    });
		    lis[this.index].style.background="rgba(255,255,255,0.5)";
		    lis[this.index].style.border="2px solid rgba(0,0,0,0.5)";
		    num=this.index;
	    }
	    lis[i].onmouseout=function(){
	    	t=setInterval(moveR,3000);
	    }
	};
	/*banner选项卡*/
	for (var i = 0; i < list.length; i++) {
		list[i].index=i;
		list[i].onmouseover=function () {
			xxk[this.index].style.display="block";
		}
		list[i].onmouseout=function () {
			xxk[this.index].style.display="none";
		}
	}
	/*下面美丽人生以及同类的图片移动动画*/
	var move1=$(".firstF4_right1")[0];
	var move2=$(".firstF4_right1")[1];
	var move3=$(".firstF4_right1")[2];
	var move4=$(".firstF4_right1")[3];
	var move5=$(".firstF4_right1")[4];
	var move6=$(".firstF4_right1")[5];
	var move7=$(".firstF4_right2")[0];
	var move8=$(".firstF4_right2")[1];
	var move9=$(".firstF4_right2")[2];
	var move10=$(".firstF4_right2")[3];
	var move11=$(".firstF4_right2")[4];
	var move12=$(".firstF4_right2")[5];
	function move(obj){
		var move1a=$("img",obj);
		var move1o=$("div",obj);
         for (var j = 0; j < move1o.length; j++) {
         	move1o[j].index=j;
         	move1o[j].onmouseover=function(){
         		aw=move1a[this.index].offsetWidth;
         		ow=move1o[this.index].offsetWidth;
         		borders=parseInt(getStyle(move1o[this.index],"borderRightWidth"));
                animate(move1a[this.index],{left:ow-aw-borders-10});
         	}
         	move1o[j].onmouseout=function(){
         		ow=move1o[this.index].offsetWidth;
                animate(move1a[this.index],{left:ow-aw-borders});
         	}
        }
    }
    move(move1);
    move(move2);
    move(move3);
    move(move4);
    move(move5);
    move(move6);
    move(move7);
    move(move8);
    move(move9);
    move(move10);
    move(move11);
    move(move12);
    /*美丽人生上面鼠标移上去图像变大的问题*/
    var bigli=$(".tps",$(".firstF2")[0]);
    var imgs=$("img",$(".firstF2")[0]);
    for (var i = 0; i < bigli.length; i++) {
    	bigli[i].index=i;
    	var iw=imgs[i].offsetWidth;
    	var ih=imgs[i].offsetHeight;
    	bigli[i].onmouseover=function(){
            imgs[this.index].style.transition="all 0.3s";
            imgs[this.index].style.transform="scale(1.1,1.1)";		
    		/*animate(imgs[this.index],{width:iw*1.1,height:ih*1.1});*/
    	}
    	bigli[i].onmouseout=function(){
            imgs[this.index].style.transform="scale(1,1)";
    		/*animate(imgs[this.index],{width:iw,height:ih});*/
    	}
    };
    var mytb=$(".mytb")[0];
    var mytb1=$("li",$(".header_right")[0])[0];
    var nav1=$(".nav1",mytb1)[0];
    var nav2=$(".nav1",mytb1)[1];
    var nav3=$(".nav1",mytb1)[2];
    var b=$("b",nav1)[0];
    mytb1.onmouseover=function(){
    	mytb.style.display="block";
        mytb1.style.background="#fff";
        nav1.style.color="#c40000";
        b.style.transition="all 0.3s";
        b.style.transform="rotate(180deg)";
    }
    mytb1.onmouseout=function(){
    	mytb.style.display="none";
        mytb1.style.background="#f2f2f2";
        nav1.style.color="#999";
        b.style.transform="rotate(0deg)";
    }
    var scj=$(".scj")[0];
    var scj1=$("li",$(".header_right")[0])[3];
    scj1.onmouseover=function(){
    	scj.style.display="block";
        scj1.style.background="#fff";
        nav2.style.color="#c40000";
    }
    scj1.onmouseout=function(){
    	scj.style.display="none";
        scj1.style.background="#f2f2f2";
        nav2.style.color="#999";
    }
    var ewm=$(".ewm")[0];
    var ewm1=$("li",$(".header_right")[0])[4];
    ewm1.onmouseover=function(){
    	ewm.style.display="block";
        nav3.style.color="#c40000";
    }
    ewm1.onmouseout=function(){
    	ewm.style.display="none";
        nav3.style.color="#999";
    }
    /*鼠标移上去透明度进行变化的函数*/
    var photo=$(".photo");
    console.log(photo)
    for (var i = 0; i < photo.length; i++) {
        photo[i].index=i;
       
       
            photo[i].onmouseover=function(){
                animate(photo[this.index],{opacity:0.85},100)
            }
            photo[i].onmouseout=function(){
                animate(photo[this.index],{opacity:1},100)
            }
       
    };
	var show=$(".a");
	var floors=$(".floor");
	var arr=[];
	var sign=true;
	var s=true;
	for (var i = 0; i < floors.length; i++) {
		arr.push(floors[i].offsetTop);
	};
	for (var i = 0; i < show.length; i++) {
		show[i].index = i;
		show[i].onclick = function() {
			flag = false;
			sign=false;

			for (var i = 0; i < show.length; i++) {
				show[i].style.background="rgba(0,0,0,0.6)";
			}
			show[this.index].style.background="#e5004f";
			animate(document.body, {
				scrollTop: arr[this.index]
			},function () {
				sign=true;
			})
			animate(document.documentElement, {
				scrollTop: arr[this.index]
			},function () {
				sign=true;
			})
		}


	}
	$(".top").onclick = function() {
		animate(document.body, {
			scrollTop: 0
		});
		animate(document.documentElement, {
			scrollTop: 0
		});
	}
	var float_nav=$(".gddwl")[0];
	var ch=document.documentElement.clientHeight;
	window.onscroll=function(){
		if(!sign){
			return;
		}
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;
		if (obj.scrollTop>=664) {
			float_nav.style.display="block";
			animate(float_nav, {
				opacity:1
			},80)
		}else{
			float_nav.style.display="none";
			float_nav.style.opacity=0;
		}
		for (var i = 0; i < floors.length; i++) {
			arr.push(floors[i].offsetTop);
			if(obj.scrollTop>=(arr[i]-ch)+300){
				for (var j = 0; j < show.length; j++) {
					show[j].style.background="rgba(0,0,0,0.6)"
				}
				show[i].style.background="#e5004f";
			};

		}
	}
    
    
    /*
    for (var i = 0; i < firstF4_left.length; i++) {
    	firstF4_left[i].index=i;
    	firstF4_left[i].onmouseover=function(){
    		var oimg=$("img",firstF4_left[this.index]);
    		animate(firstF4_left[this.index],{opacity:0.85})
    	}
    };*/
})