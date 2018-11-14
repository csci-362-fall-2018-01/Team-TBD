function test_appendField_string() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var labelText = 'label';

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Actual Tests
  input.appendField(labelText, 'name');
  assertEquals(1, input.fieldRow.length);
  assertEquals(Blockly.FieldLabel, input.fieldRow[0].constructor);
  assertEquals(labelText, input.fieldRow[0].getValue());
  assertEquals('name', input.fieldRow[0].name);
}
