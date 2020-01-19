import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  mergeWith,
  MergeStrategy,
  move
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function orderWizard(_options: any): Rule {
  console.log(_options);
  return (tree: Tree, _context: SchematicContext) => {
    const folderPath = normalize(_options.path + '/' + _options.name); // normalize to cater to different OS
    let files = url('./files');
    const newTree = apply(files, [move(folderPath)]);
    const templateRule = mergeWith(newTree, MergeStrategy.Default);
    return templateRule(tree, _context);
  };
}
