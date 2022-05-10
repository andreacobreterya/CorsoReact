import React, { useState } from 'react';
import User from '../models/User';

interface IUserDetailsFProps {
    user: User;
}

const UserDetailsF: React.FC<IUserDetailsFProps> 
    = (props: IUserDetailsFProps) => {
        const [user, setUser] = useState(props.user);
        const [panelOpen, setPanelOpen] = useState(false);

        return(<div>
            <h1>User {user.employeeNumber} Details (F)</h1>
            <div className = {panelOpen ? "" : "hidden" }>
                <h3>ID: {user.id}</h3>
                <h3>UserName: {user.userName}</h3>
                <h3>Dept: {user.dept}</h3>
            </div>
        </div>);
    };

export default UserDetailsF;