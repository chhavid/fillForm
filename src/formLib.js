const processInput = (input, form, logger, saveData) => {
  try {
    form.addField(input.trim());
  } catch (error) {
    console.log(error.message);
  }
  if (form.areAllDetailsFilled()) {
    saveData(form);
    logger('Thank You');
    return;
  }
  logger(form.getCurrentPrompt());
};

module.exports = { processInput };
