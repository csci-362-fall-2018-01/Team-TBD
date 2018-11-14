'use strict'


/**************************TEST CASE 6******************************/

function test_commonWordPrefix() {
	var len = Blockly.utils.commonWordPrefix('abc de,abc de Y'.split(','));
  	assertEquals('Overflow yes', 6, len);
}
