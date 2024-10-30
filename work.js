$(document).ready(function() {
	var dragStart = false;
	var currentObj = null;
	var left_diff = 0;
	var top_diff = 0;
	$("#trag").mousedown(function(event) {
		createDiv();
	})

	
	$(document).mouseup(function(event) {
		dragStart = false;
		$(this).css("cursor","pointer");
		trash();
	});		
	
	var now_left = 0;
	var now_top = 0;
	$(document).mousemove(function(event) {
		if(dragStart == true) {
			$(currentObj).css("cursor","crosshair");
			$(document).css("cursor","crosshair");
			now_left = event.pageX - left_diff;
			now_top = event.pageY - top_diff;
			$(currentObj).css("left",now_left);
			$(currentObj).css("top",now_top);			
			make_color();
		}
	});
	
	index = 0;
	function createDiv() {
		++index;
		var div = document.createElement("div");
		div.className = "drag";
		div.id = "index"+index;
		document.body.appendChild(div);
		$(".drag").mousedown(function(event) {
			dragStart = true;
			currentObj = $(this);
			$(this).css("cursor","crosshair");
			$(document).css("cursor","crosshair");
			var curr_xy = $(currentObj).position();
			left_diff = event.pageX - curr_xy.left;
			top_diff = event.pageY - curr_xy.top;
		});	
	
		$(".drag").mouseup(function(event) {
			dragStart = false;
			$(this).css("cursor","pointer");
		});
		$("#index"+index).css("position","absolute");
		var trag_pos =  $("#trag").offset();
		$("#index"+index).css("top",parseInt(trag_pos.top)+10);
		$("#index"+index).css("left",parseInt(trag_pos.left)+10);
		
	}
	
	function trash() {
		if(object_inside($("#trash"),currentObj)) {
			$(currentObj).remove();
		}
	}
	var color_code;
	$("#color").keyup(function(event) {
		color_code = $("#colortext").attr("value");
		if(color_code.length == 7 && color_code.indexOf("#") ==0) {
			$("#color").css("background",color_code);
			
		}
	});	
	
	function make_color() {
		if(object_inside($("#color"),currentObj)) {
			$(currentObj).css("background-color",color_code);
			$(currentObj).css("background-image","url(toad-icon.png)");
			$(currentObj).css("background-repeat","no-repeat");
			$(currentObj).css("background-position","50%");
		}
	}
});

function object_inside(oid,toid) {
	var pos =  $(oid).offset();
	var  color_width = $(oid).width();
	var  color_height = $(oid).height();
	var lst = parseInt(pos.left) + parseInt(color_width);
	var btm = parseInt(pos.top) + parseInt(color_height);
	var currObjPos = $(toid).position();
	if(currObjPos) {
		if((currObjPos.left > pos.left && currObjPos.left < lst) && (currObjPos.top > pos.top && currObjPos.top < btm)) {
			return true;
		}
	}
}

function logi(txt) {
	$("#tmp").html(txt);
}



