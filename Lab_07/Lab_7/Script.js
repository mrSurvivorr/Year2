function sin()
{
	var number, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	res = Math.sin(number);
	
	document.getElementById('result').innerHTML = res;
}

function cos()
{
	var number, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	res = Math.cos(number);
	
	document.getElementById('result').innerHTML = res;
}

function tg()
{
	var number, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	res = Math.tan(number);
	
	document.getElementById('result').innerHTML = res;
}

function ctg()
{
	var number, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	number = Math.tan(number);
	
	res = Math.pow(number, -1);
	
	document.getElementById('result').innerHTML = res;
}

function pow()
{
	var number, exp, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	exp = document.getElementById('n').value;
	exp = parseFloat(exp);
	
	res = Math.pow(number, exp);
	
	document.getElementById('result').innerHTML = res;
}

function rt()
{
	var number, exp, res;
	
	number = document.getElementById('num').value;
	number = parseFloat(number);
	
	exp = document.getElementById('n').value;
	exp = parseFloat(exp);
	
	res = Math.pow(number, (1/exp));
	
	document.getElementById('result').innerHTML = res;
}

function rgb()
{
	var color, r, g, b;
	
	var table = document.getElementById("cols").rows;
	var cell;
	for(i = 0; i < 8; i++)
	{    for(j = 0; j < 8; j++)
     	{
     	    cell = table[i].cells;

			color = Math.round(255.0*Math.random());
			r = color.toString(16);
	
			color = Math.round(255.0*Math.random());
			g = color.toString(16);
	
			color = Math.round(255.0*Math.random());
			b = color.toString(16);
	
			color = r + g + b;
			
			cell[j].style.background = "#" + color;         	
         	
         	cell[j].innerHTML = color;
     	}
	}     	
}

function pay()
{
	var sum, sub, yield;
	
	sum = document.getElementById('pay').value;
	sum = parseFloat(sum);
	
	sub = sum*0.18;
	
	yield = sum - sub;

	newwin = window.open();
	
	newwin.document.write('<table style="position: absolute; left: 25%; width: 50%;padding: 1px;margin: 2px;color: black;text-align: center;border: 1px solid black;"><tr style="border: 1px solid black;"><th style="border: 1px solid black;">Payment</th><th style="border: 1px solid black;">ACT</th><th style="border: 1px solid black;">Yield</th></tr><tr style="border: 1px solid black;"><td style="border: 1px solid black;">' + sum + '</td><td style="border: 1px solid black;">' + sub + '</td><td style="border: 1px solid black;">' + yield + '</td></table>');
}