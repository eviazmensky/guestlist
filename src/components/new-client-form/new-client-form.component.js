import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import {FormControl, ControlLabel, FormGroup} from 'react-bootstrap';

class NewClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            touched: {}
        };

        this.addClient = this.addClient.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
        this.handleFormInputBlur = this.handleFormInputBlur.bind(this);
    }

    ClientFields  = [
        {
            label: "First Name",
            field: "firstName",
            type: "text"
        },
        {
            label: "Last Name",
            field: "lastName",
            type: "text"
        },
        {
            label: "Telephone",
            field: "telephone",
            type: "tel"
        }, 
        {
            label: "Email Address",
            field: "email",
            type: "email"
        }
    ]

    formFields() {
        return this.ClientFields.map( (el, i) => 
        <FormGroup key={i} className={this.state.errors[el.field] ? 'errors': ''}>
                <ControlLabel>
                    {el.label}
                </ControlLabel>
            <FormControl 
                name={el.field} 
                type={el.type}
                required="true"
                value={this.state.value} 
                onBlur={this.handleFormInputBlur}
                onChange={this.handleFormInputChange}/>
        </FormGroup> 
        )
    }

    handleFormInputBlur(input) {
        let field, value;
        field = input.target.name;
        value = input.target.value;
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleFormInputChange(input) {
        let field, value;
        field = input.target.name;
        value = input.target.value;
        this.setState({[field]: value});
        this.setState({
            errors: {...this.state.errors, [field]: value.length === 0}
        });
        
    }

    addClient() {
        const fieldCount = this.ClientFields.length;
        let canAdd = true;
        // have all fields been enterted into 
        if (Object.keys(this.state.touched).length < fieldCount) {
            canAdd = false;
        }

        Object.keys(this.state.errors).forEach( (errorKey) => {
            if (this.state.errors[errorKey]) {
                canAdd = false;
            }
        })

        if (canAdd) {
            this.props.passUpData(this.state);
            this.resetForm();
        } else {
            alert("Cannot add this client");
        }

    }

    resetForm() {
        this.ClientFields.forEach( (FormField) => {
            this.setState({[FormField.field]: ''});
        });
        this.setState({errors: {}});
        this.setState({touched: {}});
        this.newClientForm.reset();
    }

    render() {
        return (
            <section className="new-client-container">
                <div className="col-xs-2">
                    New Client App
                </div>
                <div className="col-xs-10">
                    <form ref={(el) => this.newClientForm = el}>
                        {this.formFields()}
                        <div className="btn-group">
                            <button 
                                type="button" 
                                className="btn btn-default" 
                                onClick={this.addClient}>
                                    Add Client
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-warning" 
                                onClick={this.resetForm}>
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