function Prog3()
{
	var a=document.getElementById('inp3').value;
	var n=a,c=2,max=0;
	while(c*c<=n)
	{
		if(n%c==0)
		{
			n=n/c;
			max=c;
		}
		else
			c++;
	}
	if(n>max)
		max=n;
	document.getElementById('out3').value = max;
}
	
		