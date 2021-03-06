import { Component } from 'react';
import validator from 'validator';

class FormValidator extends Component {
  constructor(validations) {
    super();
    this.validations = validations;
  }

  validate(state) {
    let validation = this.validate();

    this.validations.forEach(rule => {
      if(!validation[rule.field].isInvalid) {
        const fieldValue = state[rule.field].toString();
        const args = rule.args || [];
        const validationMethod = 
          typeof rule.method === 'string' ?
          validator[rule.method] :
          rule.method;
        if(validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          validation[rule.field] = { isInvalid: true, message: rule.message }
          validation.isValid = false;
        }
      }
    });
    return validation;
  }

  valid() {
    const validation = {};

    this.validations.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator;