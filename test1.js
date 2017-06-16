var numLabel = document.querySelector(".numLabel");
// function logTest() {
// 	console.log(test1);
// 	alert("test1....");
// }

var curRestult;//当前计算的值
var curValue;//当前计算器显示的值

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
					if (numLabel.textContent != '0') {
						numLabel.textContent = this.id + numLabel.textContent;
						curValue = parseFloat(numLabel.textContent);
					}
					else {
						curValue = 0;
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
					if (numLabel.textContent == '0') {
						numLabel.textContent = this.id;
						curValue = 0;
					}
					else {
						numLabel.textContent = this.id + numLabel.textContent;
						urValue = parseFloat(numLabel.textContent);
					}
				})
				break;
			case "C":
				obj.addEventListener('pointerup', function () {
					numLabel.textContent = "0";
					curRestult = 0;
					curValue = 0;
				})
				break;
			default:

		}

	}
}