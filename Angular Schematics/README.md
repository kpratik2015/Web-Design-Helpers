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

### Smoke Testing

This will fail at first (as name is required and the test by default doesn't pass) but it will create some files

```
npm run test
```

### Dry Run

```
schematics .:order-wizard --name=test
```

---

Delete files except: index_spec.ts, index.ts and run to regenerate them:

```
npm run build
```

**Run build in watch mode**

```
npm run build -- -w
```

**Another way to debug is console log**

To see console log output then run:

```
schematics .:order-wizard --name=test
```

## Template files

They are used as a basis for the new files added to a target project when a schematic is run by the Angular CLI.

**Remember to rebuild the schematic after making changes!**

**Schematics run in dry-run mode by default when invoked with the Schematics CLI!**

### Filenames

strings module contains useful functions liek dasherize for template naming. Other functions are: camelize, decamelize, classify, underscore, capitalize and levenshtein

### Using Template Expressions Inside Files
