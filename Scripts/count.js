var main={
	Count:function(){
		var oDiv=$('.count-data');
		for(var i=0; i<oDiv.length; i++){
			(function(i){
				var y=0;
				var n=oDiv.eq(i).data('dis');
				var dis=toNum(n);  //需要走的距离
				var time=oDiv.eq(i).data('time');
				var times=Math.round(time/30);
				var timer=setInterval(function(){
					y++
					var a=1-y/times;
					oDiv.eq(i).css({'background-position': '0px '+(-(1-a*a*a)*dis)+'px'});
					if(y>=times){
						clearInterval(timer);
					}
				},30);
			})(i);
		}
		function toNum(num){
			switch(num){
				case 0:
					return 1660;
				break;
				case 1:
					return 1743;
				break;
				case 2:
					return 1826;
				break;
				case 3:
					return 1909;
				break;
				case 4:
					return 1992;
				break;
				case 5:
					return 2075;
				break;
				case 6:
					return 2158;
				break;
				case 7:
					return 2241;
				break;
				case 8:
					return 2324;
				break;	
				case 9:
					return 2407;
				break;									
			};
		};	
	},
	Case:function(json){
		var aT=$('#cases_tag');
		var aP=$('#cases_box');
		var cJson=json || {};
		var count=0;
		for(var name in cJson){
			var aTag="<a href='javascript:;' class='tas'>"+name+"</a>";
			var aUl="<ul class='cases-list clearfix'></ul>";
			aT.find('.more').before(aTag);
			aP.append(aUl);
			var aUlBox=aP.find('ul');
			aUlBox.eq(0).addClass('c-block');
			count++;
			for(var i=0; i<cJson[name].length; i++){
				var aLi="<li><a href="+'case_info.php?zid='+cJson[name][i].id+" target='_blank'><img src="+'uploads/'+cJson[name][i].upimg+" alt="+cJson[name][i].name+"><div class='redShade'></div><div class='fd'><i></i></div><h3>"+cJson[name][i].name+"</h3></a></li>";
				aUlBox.eq(count-1).append(aLi);
			}
		}

		var aBtn=aT.find('.tas');	
		var timer=null;
		var timer3=null;
		var liLen2=aUlBox.eq(0).find('li').length;
		aBtn.eq(0).addClass('on');

		aBtn.on('click',dongt);

		function dongt(){
			var index=aBtn.index(this);
			aBtn.removeClass('on');
			aBtn.eq(index).addClass('on');
			aUlBox.removeClass('c-block');
			aUlBox.eq(index).addClass('c-block');
						
		}
	}
};