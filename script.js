$(document).ready(function(){

/*variables init */

var arr = []; 
var temp = "";
var found = 0;


$("button").click(function(){

//take the number or symbol and push into the stack and make an array
//now join the array and compute the value using eval() function

temp = $(this).text();

$("#answer").text(temp)

arr.push(temp)

for(var i=0;i<arr.length;i++)
{
	if(arr[i]=="=")
	{
		calculate();
	}
	else if(arr[i]=="ce")
    {
    	clear();
    }
}

}); 
/*end of the button click function */

/*clear function */

function clear()
{
	$("#answer").text(" ");
	arr.shift();
    console.log(arr)
}

/* calculate function */
function calculate()
{
	
	arr.pop()
	var str = arr.join("")
	var result = eval(str)
	console.log(str);
	
	$("#answer").text( str + "=" + result);
    arr = [];

}


})


