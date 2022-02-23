import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = React.useState({
    avatarUrl: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();
  const { avatarUrl, name, location } = userData;

  const fetchUserInfo = () => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userInfo => {
        console.log(userInfo);
        setUserData({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        });
      });
  };

  React.useEffect(() => {
    fetchUserInfo();
  }, [userId]);

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
