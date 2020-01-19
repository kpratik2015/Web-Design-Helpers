# Angular Schematics

Starting off with following commands:

```
ng new sampleproject

cd sampleproject

ng add @angular/material

npm install
```

_Note: Must add browser animations from angular material_

An example:

```
ng g @angular/material:material-dashboard --name my-dash
ng g @angular/material:material-table --name my-table
```

CLI will import the module automatically and pull in the modules from material that the component needs.

## Creating New Schematic

```
npm install -g @angular-devkit/schematics-cli

schematics blank --name=order-wizard
```

Collection.json file represents the collection of schematics in your project.

**Tree**: a virtual file-system

**Rule**: a function that takes a tree as an argument, modifies the tree, and returns the modified tree

**Context**: the context that the schematic runs in

```
cd order-wizard && npm install @angular/cli
```

A schema(.json) provides metadata for a schematic.
Specifies accpeted command-line arguments.
Exists at the root of the project, and is called schema.json
