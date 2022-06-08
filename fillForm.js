process.stdin.setEncoding('utf8');
const { Form } = require('./src/form.js');
const { getQueries } = require('./src/queries.js');
const { processInput } = require('./src/formLib.js');
const fs = require('fs');

const saveData = (form) => {
  fs.writeFileSync('./form.json', form.getFormDetails(), 'utf8');
  process.stdin.destroy();
};

const read = (form) => {
  console.log(form.getQuery());
  process.stdin.on('data', (chunk) => {
    processInput(chunk, form, console.log, saveData);
  });
};

const main = () => {
  const queries = getQueries();
  const form = new Form(queries);
  read(form);
};

main();
