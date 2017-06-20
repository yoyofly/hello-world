var numLabel = document.querySelector(".numLabel");
var fullLabel = document.querySelector(".totalLabel");
// function logTest() {
// 	console.log(test1);
// 	alert("test1....");
// }

var curRestult = 0;//存贮当前计算的值
var oldValueString;//存贮之前运算的字符串信息
var curValueNum;//当前计算器显示的值，在= 号计算时，也是上一次加的值

var changeType;//点击运算符后，记录运算符的类型  1:+, 2:-, 3:*, 4:/
var isChange = false;//点运算符

addEvent();
//
function addEvent() {
	var btns = document.querySelectorAll(".buttons");
	var len = btns.length;
	for (var i = 0; i < len; i++) {
		var obj = btns[i];

		console.log(parseInt('.'));
		// if(typeof(parseInt(obj.id))=='number')
		// {
		// 	obj.addEventListener('pointerup',function () {
		// 		console.log(1);
		// 	})
		// }
		// else
		// {

		// }

		switch (obj.id) {
			case "0":
				obj.addEventListener('pointerup', function () {

					if (isChange == true) {

						isChange = false;
					}
					else {
						if (numLabel.value != 0) {
							numLabel.value = Number(numLabel.value + this.id);
							curValueNum = numLabel.value;
						}
						else {
							curValueString = 0;
						}
					}
				})
				break;
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				obj.addEventListener('pointerup', function () {
					// if (numLabel.value == 0) {
					// 	numLabel.value = Number(this.id);
					// 	curValue = numLabel.value;
					// }
					// else {

					if (isChange == true) {
						numLabel.value = Number(this.id);
						isChange = false;
					}
					else {
						numLabel.value = Number(numLabel.value + this.id);
						curValueNum = numLabel.value;
					}
					console.log("isChange 222 == " + isChange);
				})
				break;
			case "C":
				obj.addEventListener('pointerup', function () {
					numLabel.value = 0;
					fullLabel.textContent = "";
					curRestult = 0;
					curValueNum = 0;
					oldValueString = undefined;
				})
				break;
			case "+":
				obj.addEventListener('pointerup', function () {
					console.log(oldValueString);

					//相同的类型的运算符，反复点击无效
					if (isChange == true)
					{
						if(changeType == 1) {
							return;
						}
						else if(changeType == 5)
						{
							curRestult = 0;
						}
					}
					//存储文本内容
					if (oldValueString != undefined) {
						fullLabel.textContent = oldValueString + " + " + numLabel.value + " + ";
					}
					else {
						fullLabel.textContent = numLabel.value + " + ";
					}

					oldValueString = fullLabel.textContent.slice(0, fullLabel.textContent.length - 3);

					//计算已经存贮的值
					numLabel.value = Number(numLabel.value) + Number(curRestult);
					curRestult = numLabel.value;

					//设置变量，存储开始运算
					changeType = 1;
					isChange = true;
				})
				break;
			case "-":
				obj.addEventListener('pointerup', function () {
					numLabel.value = "0";
					curRestult = 0;
					curValueString = 0;
				})
				break;
			case "*":
				obj.addEventListener('pointerup', function () {
					numLabel.value = "0";
					curRestult = 0;
					curValueString = 0;
				})
				break;
			case "/":
				obj.addEventListener('pointerup', function () {
					numLabel.value = "0";
					curRestult = 0;
					curValueString = 0;
				})
				break;
			case "=":
				obj.addEventListener('pointerup', function () {

					if (isChange == true && changeType == 5) {
						//存储文本内容
						fullLabel.textContent = "";
						//计算已经存贮的值
						numLabel.value = curValueNum + Number(curRestult);
						curRestult = numLabel.value;
					}
					else {
						//存储文本内容
						fullLabel.textContent = "";

						//计算已经存贮的值
						curValueNum = Number(numLabel.value);//记录当前界面值，方便连续点击=号时计算用
						numLabel.value = curValueNum + Number(curRestult);
						curRestult = numLabel.value;
					}

					//设置变量，存储开始运算
					changeType = 5;
					isChange = true;
					oldValueString = undefined;
				})
				break;
			default:

		}

	}
}