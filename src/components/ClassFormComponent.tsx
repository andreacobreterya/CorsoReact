import { exitCode } from 'process';
import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';

class FormState {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}

export default class ClassFormComponent extends Component<{}, FormState> {
    state: FormState = new FormState('', '');
    validator: SimpleReactValidator = new SimpleReactValidator({
        className: 'error'
    });

    handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name;
        const value = evt.target.type == 'checkbox' ? 
            evt.target.checked : 
            evt.target.value;
            
        //@ts-ignore : Computed Property Name (ES6)
        this.setState({ [name] : value });
    };

    handleSubmit = (evt: any) => {
        evt.preventDefault();
        if(this.validator.allValid())
        {
            alert(JSON.stringify(this.state));
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    };

  render(): JSX.Element {
    return(<div className="container">
        <form onSubmit={this.handleSubmit}>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-9">
                    <input className="form-control" type="text" name="firstName"
                        value={this.state.firstName} onChange={this.handleChange} />
                    {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="col-9">
                    <input className="form-control" type="text" name="lastName"
                        value={this.state.lastName} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>&nbsp;
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">&nbsp;</div>
                <div className="col-3">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
                <div className="col-6">&nbsp;</div>
            </div>
        </form>
    </div>);
  }
}