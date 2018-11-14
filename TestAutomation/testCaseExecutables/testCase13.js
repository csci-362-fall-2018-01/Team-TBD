function test_appendField_prefix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var prefix = new Blockly.FieldLabel('prefix');
  var field = new Blockly.FieldLabel('field');
  field.prefixField = prefix;

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Test
  input.appendField(field);
  assertEquals('appended', prefix, input.fieldRow[0]);
}
