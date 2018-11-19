
/**************************TEST CASE 20******************************/


function test_insertFieldAt_prefix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var before = new Blockly.FieldLabel('before');
  var after = new Blockly.FieldLabel('after');
  var prefix = new Blockly.FieldLabel('prefix');
  var between = new Blockly.FieldLabel('between');
  between.prefixField = prefix;
  input.appendField(before);
  input.appendField(after);

  // Preconditions
  assertEquals(2, input.fieldRow.length);
  assertEquals(before, input.fieldRow[0]);
  assertEquals(after, input.fieldRow[1]);
 
  // Test
  assertEquals('inserted', before, input.fieldRow[0]);
}
