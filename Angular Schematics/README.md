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
