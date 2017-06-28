var sum;
function Prog2()
{
	sum=0;
	var a=document.getElementById('inp2').value;
	fibonacci(0,1,a);
	document.getElementById('out2').value = sum;
	sum=0;
}
function fibonacci(a,b,lim)
{
	if(a+b>=lim)
		return 0;
	else
	{
		if((a+b)%2===0)
		{
			sum=sum+(a+b);
			fibonacci(b,a+b,lim);
		}
		else
		{
			fibonacci(b,a+b,lim);
		}
		
	}
}