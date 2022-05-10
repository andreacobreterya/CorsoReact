import React from 'react';
import User from '../models/User';

interface IUsersListProps {
    users: User[];
    children: React.ReactElement;
}

const UsersList: React.FC<IUsersListProps> =
    (props: IUsersListProps) => {
        const data = props.users.map(
            (item: User) => 
                <UserListItem key={item.id} usr={item} />
        );

        return(<React.Fragment>
            {props.children}
            <ul>{data}</ul>
        </React.Fragment>);
    };

const UserListItem: React.FC<{usr: User}> = (props) => 
    (<li>{props.usr.employeeNumber} - {props.usr.userName} [{props.usr.dept}]</li>)

export default UsersList;