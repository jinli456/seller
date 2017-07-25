/**
 * Created by Administrator on 2017/4/20.
 */
$(function() {
	var $color_box = $(".zx_color_check");
	var $color_text = $(".zx_goods_color_big_box").children().eq(0);

	var arr1=[];
	var arr2=[];
	var arr3=[];
	$(".zx_goods_color_big_box").on('click', '.zx_color_check', function(e) {
		var ss = $color_text.clone();
		ss.children(".zx_color_check").prop("checked", false);
		ss.children(".color_val").prop("value", "");
		if($(this).prop('checked') == true) {
			$(this).parents(".zx_goods_color_big_box").append(ss);
		} else {
			// 当只有一个时则不移除
			var index = arr1.indexOf($(this).next().val());
			var len = $(".zx_goods_color_box").size();
			if (index > -1) {
				arr1.splice(index, 1);
				updateTable();


			}
			$(this).parents(".zx_goods_color_box").remove();


			$(".zx_color_value_text").unbind('click').click(function(){
				$(".color_val").eq(location_index - 1)[0].value = $(this).html();
				$(".color_val").eq(location_index - 1).parent().children(".zx_color_check").prop("checked",true);
				if($(".zx_goods_color_big_box").children("div:last-child").find(".color_val")[0].value!=""){
					var ss = $color_text.clone();
					ss.children(".zx_color_check").prop("checked", false);
					ss.children(".color_val").prop("value", "");
					$(".zx_goods_color_big_box").append(ss);
				}

				$(".zx_color_style_box").css("display", "none");


				/*把颜色值放入数组arr1*/
				arr1.push($(".color_val").eq(location_index - 1)[0].value);
				console.log(arr1)
				updateTable();


			})


		}


	})
	//点击颜色的选择框出来颜色样式

	var location_index;
	$(".zx_goods_color_big_box").on('focus', ".color_val", function() {

		location_index = $(this).parent().index() + 1;
		$(".zx_color_style_box").css("display", "block");
		$(".zx_color_style_box")[0].style.top = location_index * 40 + "px";

	})


	//点击颜色值复制到input框
	$(".zx_color_value_text").click(function() {

		//if(arr1.indexOf($(this).html())==-1){
		var num=$('.zx_goods_color_big_box .color_val').index($(".color_val").eq(location_index - 1));
		$(".color_val").eq(location_index - 1)[0].value = $(this).html();
		$(".color_val").eq(location_index - 1).parent().children(".zx_color_check").prop("checked",true);
		if($(".zx_goods_color_big_box").children("div:last-child").find(".color_val")[0].value!=""){
			var ss = $color_text.clone();
			ss.children(".zx_color_check").prop("checked", false);
			ss.children(".color_val").prop("value", "");
			$(".zx_goods_color_big_box").append(ss);
		}
		console.dir($('.zx_goods_color_big_box .color_val').index($(".color_val").eq(location_index - 1)))
		$(".zx_color_style_box").css("display", "none");


		/*把颜色值放入数组arr1*/
		/*arr1.push($(".color_val").eq(location_index - 1)[0].value);*/
		arr1[num]=$(".color_val").eq(location_index - 1)[0].value;
		/*if($(".zx_goods_color_box").size()-1<arr1.length){
		 arr1.splice(location_index - 1,1,arr1[arr1.length-1]);
		 arr1.splice(arr1.length-1,1);
		 updateTable();
		 }
		 */
		/*console.log(arr1)*/
		updateTable();

		//		}

	})


	/*input换值*/
	$('.zx_goods_color_big_box').on('blur','.color_val',function(){
		var num=$('.zx_goods_color_big_box .color_val').index(this);



	})


	$(".zx_color_name").mouseover(function() {
		var zx_index = $(this).index();
		$(".zx_color_value_content").removeClass("zx_display").eq(zx_index).addClass("zx_display");
		$(".zx_color_name").removeClass("zx_control");
		$(this).addClass("zx_control");
	})

	$('.zx_size_check').click(function(){
		if($(this).prop('checked')==true){
			/*if($(this).next()[0].tagName.toLocaleLowerCase()=='input'){
				arr2.push($(this).next()[0].value)
			}else{
				arr2.push($(this).next()[0].innerHTML);
			}*/
			arr2.push($(this).next()[0].innerHTML);
			updateTable();

		}else{
			var index = arr2.indexOf($(this).next()[0].innerHTML);
			if (index > -1) {
				arr2.splice(index, 1);
				updateTable();


			}
		}

		console.log(arr2)
		console.log($(this).next())
	})



	var col=[{text:"价格",type:"text"},{text:"库存",type:"text"},{text:"商品条形码",type:"text"}];
	var table=document.createElement("table");
	$('.zx_sales_box').append(table);

	//更新表格内容
	function updateTable(){
		var i,h,data,tbody;
		table.innerHTML="";
		tbody=table.createTBody();
		createHead([{text:"颜色"},{text:"尺码"}].concat(col),table);
		for(i=0;i<arr1.length;i++){
			if(arr1[i]!="undefined"){
				arr3.push(arr1[i])
			}

		}
		for(i=0;i<arr1.length;i++){
			for(h=0;h<arr2.length;h++){
				data=[];
				h===0&&data.push({text:arr1[i],rowSpan:arr2.length});
				data.push({text:arr2[h]});
				createRow(data.concat(col),i*arr2.length+h,tbody);
			}

		}
		test(arr2);
	}
	function createHead(data,table){
		var row,i,thead;
		thead=table.createTHead();
		row=thead.insertRow();
		for(i=0;i<data.length;i++){
			row.insertCell(i).innerHTML=data[i].text;
		}

	}
	function createRow(data,index,tbody){
		var row,text,i;
		row=tbody.insertRow(index||0);
		for(i=0;i<data.length;i++){
			cell=row.insertCell(i);
			console.dir(data.length)
			data[i].rowSpan&&(cell.rowSpan=data[i].rowSpan);
			switch(data[i].type){
				case "text" :
					text=document.createElement("input");
					text.type="text";
					cell.appendChild(text);
					break;
				case "btn":
					text=document.createElement("button");
					text.innerHTML=data[i].text;
					cell.appendChild(text);
					break;
				default :
					cell.innerHTML=data[i].text;
					break;
			}


		}


	}

	var length=arr2.length;

	function test(arr){
		var length_F=arr.length;
		var tr=table.childNodes[1].childNodes;
		for(var k=0;k<tr.length;k++){
			var td=tr[k].firstChild;
			var temp = tr[k].firstChild.innerText;  //第一列
			if(temp=="undefined"){

				for(var j=0;j<length_F;j++){
					tr[k+j].style.display="none";
				}

			}
			/*价格和库存不能为空*/
			var tds=tr[k];
			/*var valu=tds.childNodes[2].children[0];*/
			var a=tr[k].lastChild;
			var b= a.previousElementSibling.children[0];
			var c= a.previousElementSibling.previousElementSibling.children[0];
			b.onblur=function(){
				if($(this)[0].value==""){
					$(this)[0].placeholder="必填"

				}

			}
			c.onblur=function(){
				if($(this)[0].value==""){
					$(this)[0].placeholder="必填"

				}

			}
			console.dir(b)



		}



	}



	$(".zx_goods_color_big_box").on('blur', ".color_val", function() {
		setTimeout(function() {
			// input框失去焦点，隐藏下拉框
			$(".zx_color_style_box").css("display", "none");
		}, 200);
	})



})