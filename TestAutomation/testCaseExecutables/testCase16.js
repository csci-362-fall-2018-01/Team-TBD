
/**************************TEST CASE 16******************************/

function test_addClass() 
{
	var p = document.createElement('p');
  	Blockly.utils.addClass(p, 'one');
	assertEquals('Added "one"', 'one', p.className);
}
