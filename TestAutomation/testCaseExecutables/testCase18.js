
/**************************TEST CASE 18******************************/

function test_toDegrees() 
{
  	var quarter = Math.PI / 2;
	assertEquals('450', 360 + 90, Blockly.utils.toDegrees(5 * quarter));
}
