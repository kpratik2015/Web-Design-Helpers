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

Templating supports Embedded JS language.

```
<%# This will not appear in the generated output %>
// this will appear in the generated output

const unescaped = '<%= "<" %>';
const escaped = '<%- "<" %>';

<% if (true) { %> const conditionalTest = true;<%> } %>
```

## Building Extra Capabilities into a Schematic

- How to read the target project's config file

  - The angular.json config file contains information about all of the different projects in an Angular workspace.

- How to update files in the target project

  - Being able to edit files is essential for adding features such as adding an import statement for the generated module tot he root module of the target project

- How to chain multiple rules together

  - Organising schematics operations into descrete rule factories is a great way to improve maintainability long-term

- How to parse files to insert new content in the correct location

  - Itt is not enough to just insert code - we must insert it in the correct location within a file for it to work correctly

- How to run NPM commands as part of the schematic's execution

- How to run other schematics from within our schematic

## Testing a Schematic

- How to stub the files the schematic needs to run
- How to test the right files are created based on CLI options
- How to test that the right content is inserted in template and external files
- How to test that tasks are schedules or not scheduled at the right time

## Post Production Tasks

**Using local linking to identify issues that unit tests might not pick up**

We should test the schematic locally in order to know it will work in an actual angular project.

In order-wizard execute:

```
npm link
```

This makes the component available globally on the local system

Now cd into actual project on which to test the schematic

```
npm link order-wizard
```

This creates a symbolic link between the project and the schematic. You can find it in node_modules.

```
ng g order-wizard:order-wizard --name=checkout
```
