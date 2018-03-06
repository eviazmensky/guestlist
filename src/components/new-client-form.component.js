import React from 'react';
import FormField from './form-fields.component';
import ClientFields from '../models/ClientFields';

class NewClientForm extends React.Component {
  constructor(props) {
    super(props);
    const fields = {};
    ClientFields.forEach(field => fields[field.field] = '');
    this.state = {
      errors: {},
      touched: {},
      fields
    };

    this.addClient = this.addClient.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.updateData = event => {
      console.log(event);
      this.setState({
        fields: {
          ...this.state.fields,
          [event.field]: event.value
        }
      });
    };
  }

  addClient() {
    console.log(this.state);
    const fieldCount = ClientFields.length;
    let canAdd = true;
    // have all fields been enterted into
    if (Object.keys(this.state.touched).length < fieldCount) {
      canAdd = false;
    }

    Object.keys(this.state.errors).forEach(errorKey => {
      if (this.state.errors[errorKey]) {
        canAdd = false;
      }
    });

    if (canAdd) {
      this.props.passUpData(this.state);
      this.resetForm();
    } else {
      // do something
    }
  }

  resetForm() {
    this.setState({
      errors: {},
      touched: {}
    });
    console.log(this.newClientForm.children);
    this.newClientForm.reset();
  }

  render() {
    const fields = ClientFields.map(clientField => {
      clientField.updateField = this.updateData;
      clientField.key = clientField.field;
      return React.createElement(FormField, clientField);
    });
    return (
      <section className="new-client-container">
        <div className="col-xs-2">
          New Client App
        </div>
        <div className="col-xs-10">
          <form ref={el => this.newClientForm = el}>
            { fields }
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.addClient}
              >
                        Add Client
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.resetForm}
              >
                        Clear Form
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default NewClientForm;
