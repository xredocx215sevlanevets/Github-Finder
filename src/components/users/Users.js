import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        login: 'mojombo',
        id: 1,
        html_url: 'https://github.com/mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4'
      },
      {
        login: 'defunkt',
        id: 2,
        html_url: 'https://github.com/defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4'
      },
      {
        login: 'pjhyett',
        id: 3,
        html_url: 'https://github.com/pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4'
      }
    ]
  };

  render() {
    return (
      <div className='teste' style={userStyle}>
        {this.state.users.map(user => (
          //passing user now as a prop to userItem
          //<UserItem key={user.id}> user={user}</UserItem>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
