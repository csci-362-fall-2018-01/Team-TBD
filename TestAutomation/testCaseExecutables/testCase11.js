function test_appendField_simple() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var field1 = new Blockly.FieldLabel('#1');

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Tests
  input.appendField(field1, 'first');
  assertEquals('appended', block, field1.sourceBlock_);
}
