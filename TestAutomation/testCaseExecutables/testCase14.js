
/**************************TEST CASE 14******************************/

function test_appendField_suffix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var suffix = new Blockly.FieldLabel('suffix');
  var field = new Blockly.FieldLabel('field');
  field.suffixField = suffix;

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Test
  input.appendField(field);
  assertEquals('appended', suffix, input.fieldRow[1]);
}
