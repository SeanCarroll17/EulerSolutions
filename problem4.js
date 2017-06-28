function Prog4(){
	var a=document.getElementById('inp4').value;
	var s='';
	var e='';
	var t='';
	for(var i=0;i<a;i++)
	{
		s=s+'9';
		e=e+'0';
		if(i==a-1)
			t='1'+t+'1';
		else
			t='0'+t+'0';
	}
	var max=Number(t);
	for(i=Number(s);i>=Number(e);i--)
	{
		if(max>=i*Number(s))
			break;
		for(j=Number(s);j>=i;j--)
			if(max < i*j && ispalindrome(i*j))
				max=i*j;
	}
	document.getElementById('out4').value = max;
}
function ispalindrome(n)
{
	var nr,rev=0;
	nr=n;
	while(nr>0)
	{
		rev=10*rev+nr%10;
		nr=Math.floor(nr/10);
	}
	return rev==n;
}