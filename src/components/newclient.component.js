import React from 'react';
import NewClientForm from './new-client-form/new-client-form.component'

class NewClient extends React.Component{

    showData(event) {
        console.log(event);
    }

    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-xs-2">
                        <h1>New Client</h1>
                    </div>
                </div>
                <div className="row">
                    <NewClientForm passUpData={this.showData}></NewClientForm>
                </div>
            </section>
        )
    }
}

export default NewClient;