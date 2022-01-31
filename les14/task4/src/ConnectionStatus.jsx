import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [statusData, setStatus] = useState({
    status: 'online',
  });

  useEffect(() => {
    const isOnline = () => {
      setStatus({
        status: 'online',
      });
    };

    const isOffline = () => {
      setStatus({
        status: 'offline',
      });
    };

    window.addEventListener('online', isOnline);
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('offline', isOffline);
      window.removeEventListener('online', isOnline);
    };
  }, []);

  const { status } = statusData;
  return <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>{status}</div>;
};

export default ConnectionStatus;
