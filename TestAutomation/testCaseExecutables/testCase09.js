
/**************************TEST CASE 9******************************/

function test_arrayRemove() {
  var arr = [1, 2, 3, 2];
  assertEquals('Remove item', true, Blockly.utils.arrayRemove(arr, 2));
}

