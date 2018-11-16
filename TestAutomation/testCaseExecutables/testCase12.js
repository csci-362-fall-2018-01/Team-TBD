
/**************************TEST CASE 12******************************/

function test_appendField_string() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var labelText = 'label';

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Tests
  input.appendField(labelText, 'name');
  assertEquals('string is appended', 'name', input.fieldRow[0].name);
}
