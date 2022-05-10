import { render } from '@testing-library/react';
import React, { Component } from 'react';
import User from '../models/User';

interface IUserDetailsCProps {
    user: User;
}

class UserDetailsCState {
    constructor(
        public user: User,
        public panelOpen: boolean = false
    ) {}
}

export default class UserDetailsC 
    extends Component<IUserDetailsCProps, UserDetailsCState> {

    constructor(props: IUserDetailsCProps) {
        super(props);
        this.state = new UserDetailsCState(this.props.user);
    }

    render(): JSX.Element {
        return(<div>
            <h1>User {this.state.user.employeeNumber} Details (C)</h1>
            <div className = {this.state.panelOpen ? "" : "hidden" }>
                <h3>ID: {this.state.user.id}</h3>
                <h3>UserName: {this.state.user.userName}</h3>
                <h3>Dept: {this.state.user.dept}</h3>
            </div>
        </div>);
    }
}