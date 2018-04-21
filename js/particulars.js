$.get("../js/particulars.json",function(data){
		var str='';
		var oUl = document.getElementById("pa");
		for (var i=0;i<data.length;i++) {
			str+=`
			<li>
					<div class="c_left">
						<img src="../img/${data[i].img}" data-id="${data[i].id}">
					</div>
					<div class="c_p">
					<p>${data[i].name}</p>
					<p>${data[i].p1}</p>
					<p>${data[i].p2}</p>
					<p>${data[i].p3}</p>
					<p>${data[i].p4}</p>
					<p>${data[i].p5}</p>
					<p>${data[i].p6}</p>
					</div>
					<div class="c_r">
						<a href="">查看详情</a>
						<a href="">加入购物车</a>
					</div>
					<div class="c_c">
						￥
						<span>199.00</span>
						<span>1.5磅：约18×18(cm)</span>
					</div>					
				</li>
				`
		}
		oUl.innerHTML = str
		
		var oContent =document.querySelector('.centent');
		oContent.onclick=function(e){
			var e=e||event;
			var target = e.target||e.srcElement;
			if(target.tagName=="IMG"){
				var id = target.getAttribute("data-id");
				location.href="item.html?"+id;
			}
		}
	})
