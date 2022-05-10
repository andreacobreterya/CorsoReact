import React, { useState } from 'react';
import User from '../models/User';

interface IUserDetailsFProps {
    user: User;
}

const UserDetailsF: React.FC<IUserDetailsFProps> 
    = (props: IUserDetailsFProps) => {
        const [user, setUser] = useState(props.user);
        const [panelOpen, setPanelOpen] = useState(false);

        const detailsPanel = panelOpen && (<div>
            <h3>ID: {user.id}</h3>
            <h3>UserName: {user.userName}</h3>
            <h3>Dept: {user.dept}</h3>
        </div>);

        return(<div onClick={_ => setPanelOpen(!panelOpen)}>
            <h1>
                User {user.employeeNumber} Details (F)
            </h1>
            {detailsPanel}
        </div>);
    };

export default UserDetailsF;