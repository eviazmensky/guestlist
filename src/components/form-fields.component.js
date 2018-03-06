import React from 'react';
import {FormControl, ControlLabel, FormGroup} from 'react-bootstrap';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      touched: false
    };
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleFormInputBlur = this.handleFormInputBlur.bind(this);
  }

  handleFormInputBlur() {
    this.setState({touched: true});
  }

  handleFormInputChange(input) {
    this.setState({value: input.target.value});
    const updateObject = {
      value: input.target.value,
      field: this.props.field
    };

    if (input.target.value === '' && this.state.touched && !this.state.error) {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }

    this.props.updateField(updateObject);
  }

  render() {
    return (
      <FormGroup className={`row ${this.state.error ? 'errors' : ''}`}>
        <ControlLabel className="col-form-label col-sm-2 text-right">
          {this.props.label}
        </ControlLabel>
        <div className={this.props.type === 'date' ? 'col-sm-2' : 'col-sm-6'}>
          <FormControl
            name={this.props.field}
            type={this.props.type}
            required
            value={this.state.value}
            onBlur={this.handleFormInputBlur}
            onChange={this.handleFormInputChange}
          />
        </div>
      </FormGroup>
    );
  }
}

export default FormField;
