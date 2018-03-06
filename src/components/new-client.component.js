import React from 'react';
import NewClientForm from './new-client-form.component';

class NewClient extends React.Component {
  constructor() {
    super();
    this.showData = event => {
      // show message
    };
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
          <NewClientForm passUpData={this.showData} />
        </div>
      </section>
    );
  }
}

export default NewClient;
