import React from 'react'

const useDate = () => {
  const [date, setDate] = React.useState('');
  
  React.useEffect(() => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    setDate(`${day}/${month}/${year}`);
  }, []);
  return date;
}

export default useDate
