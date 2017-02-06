window.onload = function(){
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = ｛
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};//定义函数对象


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value.trim();
	var quaility = document.getElementById("aqi-value-input").value.trim();
	var quailityPattern = /^[0-9]*$/;
//	var cityPattern = 
	if(quaility.match(quailityPattern)==null){
		alert("请输入合法的空气质量指数");
	}
	else{
		aqiData[city] = quaility;
	}
	

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	var content="";
	for(city in aqiData){
		content = content + "<tr><td>" + city +"的空气质量:"  +"</td>><td>" +aqiData[city] +"</td><td><button>删除</button></td></tr>";
	}
	table.innerHTML = content;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
addAqiData();
renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
	delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").addEventListener("click",function(){
		addBtnHandle();
	})
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	document.getElementById("aqi-table").addEventListener("click",function(event){
		if(event.target.nodeName.toLowerCase()=="button"){
			delBtnHandle();
		}
		
	})
}

init();

}
//
//var str = "测地方是678678册浮点数";
//var patt = /^[\u4e00-\u9fa5]*/;
//console.log(str.match(patt));
//
//var str1 = "1233443dfsdf";
//var patt1 = /^[0-9]*$/;
//console.log(str1.match(patt1));
