import React, { Component } from 'react';
import { Form, Text } from 'react-form';

class NewRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={submittedValues => this.setState({ submittedValues })}>
          {formApi => (
            <div>
              <button
                onClick={() => formApi.addValue('siblings', '')}
                type="button"
                className="mb-4 mr-4 btn btn-success">Add Sibling</button>
              <form onSubmit={formApi.submitForm} id="dynamic-form">
                <li><Text field="ingredient-1"/></li>
                <li><Text field="ingredient-2"/></li>
                <li><Text field="ingredient-3"/></li>
                {formApi.values.siblings && formApi.values.siblings.map((sibling, i) => (
                  <li key={`sibling${i}`}>
                    <Text field={['siblings', i]} id={`sibling-name-${i}`} />
                    <button
                      onClick={() => formApi.removeValue('siblings', i)}
                      type="button"
                      className="mb-4 btn btn-danger">Remove</button>
                  </li>
                ))}
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default NewRecipe;