function Prog1()
{
	var sum = 0;
	var a=document.getElementById("inp1").value;
	for(var i = 1; i < a ; i++)
		if(i%3==0||i%5==0)
			sum += i;
	document.getElementById('out1').value=sum;
}
	