class MultilineField {
  #name;
  #prompts;
  #validator;
  #parser;
  #responses;
  constructor(name, prompts, validator = () => true, parser = (text) => text) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#parser = parser;
    this.#responses = [];
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  #isValid(response) {
    return this.#validator(response);
  }

  fill(response) {
    if (!this.#isValid(response)) {
      throw { message: `invalid ${this.#name}` };
    }
    this.#responses.push(response);
  }

  getResponse() {
    return { name: this.#name, response: this.#parser(this.#responses) };
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }
}

exports.MultilineField = MultilineField;
