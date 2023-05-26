module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "path",
      },
      {
        type: "input",
        name: "name",
        message: "component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/index.tsx",
        templateFile: "./templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/test.tsx",
        templateFile: "./templates/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/{{path}}/{{pascalCase name}}/index.stories.tsx",
        templateFile: "./templates/index.stories.tsx.hbs",
      },
    ],
  });
};
