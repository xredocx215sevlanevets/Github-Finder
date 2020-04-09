import React from 'react';
import UserItem from './UserItem';

import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="teste" style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
