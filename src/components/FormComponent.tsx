import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const FormComponent: React.FC = (props) => {
    const validator = React.useRef(new SimpleReactValidator({
        className: 'error'
    }));
    // const validator: SimpleReactValidator = new SimpleReactValidator({
    //     className: 'error',
    //     autoForceUpdate: true
    // });

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ role, setRole ] = useState('');
    const [ isAdmin, setIsAdmin ] = useState(false);

    // const handleChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //     setFirstName(evt.target.value);
    // };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        // logica di submit ...
        evt.preventDefault();

        console.log(validator.current.allValid());

        // if(validator.current.allValid())
        // {
            const data = {
                firstName,
                lastName,
                role,
                isAdmin
            };

            alert(JSON.stringify(data));
        // } else {
        //     validator.current.showMessages();
        // }
    };

    return(<div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-6">
                    <input className="form-control" type="text" name="firstName"
                        value={firstName} onChange={evt => setFirstName(evt.target.value)}  />
                </div>
                <div className="col-3">
                    {validator.current.message('firstName', firstName, 'required|alpha')}
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="col-6">
                    <input className="form-control" type="text" name="lastName"
                        value={lastName} onChange={evt => setLastName(evt.target.value)}  />
                </div>
                <div className="col-3">
                    {validator.current.message('lastName', lastName, 'required')}
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="isAdmin">Admin</label>
                </div>
                <div className="col-9">
                    <input className="form-check-control" type="checkbox" name="isAdmin"
                        checked={isAdmin} onChange={evt => setIsAdmin(evt.target.checked)}  />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">
                    <label htmlFor="role">Role</label>
                </div>
                <div className="col-9">
                    <select className="form-control"
                        value={role} onChange={evt => setRole(evt.target.value)}>
                        <option value="">-- Select a Role --</option>
                        <option value="MGR">Manager</option>
                        <option value="SPV">Supervisor</option>
                        <option value="PEO">Peones</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>&nbsp;
                </div>
            </div>
            <div className="row form-group">
                <div className="col-3">&nbsp;</div>
                <div className="col-3">
                    <input className="btn btn-primary" type="submit" 
                        value="Submit" disabled={!validator.current.allValid()} />
                </div>
                <div className="col-6">&nbsp;</div>
            </div>
        </form>
    </div>);
};

export default FormComponent;