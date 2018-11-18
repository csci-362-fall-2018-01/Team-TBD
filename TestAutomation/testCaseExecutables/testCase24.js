
/**************************TEST CASE 24******************************/

function testInit_Trivial() {
  var workspace = new Blockly.Workspace();
  var variable = new Blockly.VariableModel(workspace, 'TBD', 'string',
    'TBD_id');

  assertEquals('Is Correct Name','TBD', variable.name);
  assertEquals('Is Correct Type','string', variable.type);
  assertEquals('IS Correct ID','TBD_id', variable.id_);
  
  workspace.dispose();
  variable = null;
}
