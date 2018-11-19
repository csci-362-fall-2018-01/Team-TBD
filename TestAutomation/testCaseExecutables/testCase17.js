
/**************************TEST CASE 17******************************/

function test_hasClass() 
{
   	var p = document.createElement('p');
	p.className = ' one three  two three  ';
	assertTrue('Has "three"', Blockly.utils.hasClass(p, 'three'));
}
