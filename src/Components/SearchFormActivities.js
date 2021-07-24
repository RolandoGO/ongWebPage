import React, { useState } from 'react';

export const SearchFormActivities = () => {

  const [searchActivitie, setSearchActivitie] = useState('');

  const handleInputChange = (e) => {
    setSearchActivitie({
      ...searchActivitie,
      [e.target.name] : e.target.value
    })
  };

	console.log(searchActivitie);

    return (
      <div className="container mt-2" style={{maxWidth: 1000}}>
        <input
          placeholder="Busque una actividad..."
          className="form-control"
          type="text"
          name="activitie"
          onChange={handleInputChange}
        >
        </input>
      </div>
    )
};
