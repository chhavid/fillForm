const { Field } = require('./field');
const { MultilineField } = require('./multilineField');

const isNameValid = (name) => name.length > 4;

const isPhnNumValid = (phoneNum) => {
  return phoneNum.length === 10 && isFinite(phoneNum);
};

const areHobbiesValid = (hobbies) => {
  return hobbies.length > 0;
};

const isDobValid = (dob) => {
  return /^\d{4}-\d{2}-\d{2}$/.test(dob);
};

const isAddressValid = (address) => {
  return address.length > 0;
};

const identity = (info) => info.trim();

const parseHobbies = (hobbies) => hobbies.trim().split(',');

const parseAddress = (addresses) => addresses.join('\n');

const getFields = () => {
  const nameField = new Field('name', 'Please enter your name',
    isNameValid, identity);

  const dobField = new Field('dob', 'Please enter your dob',
    isDobValid, identity);

  const hobbiesField = new Field('hobbies', 'Please enter your hobbies',
    areHobbiesValid, parseHobbies);

  const phoneNumField = new Field('phoneNum', 'Please enter your phone number',
    isPhnNumValid, identity);

  const addressField = new MultilineField('address',
    ['Please enter your address line 1', 'Please enter your address line 2'],
    isAddressValid, parseAddress);

  return [nameField, dobField, hobbiesField,
    phoneNumField, addressField];
};

module.exports = {
  getFields, isPhnNumValid, isAddressValid, isDobValid,
  areHobbiesValid, isNameValid, parseAddress, parseHobbies, identity
};
