import React from 'react';
import { useMemo } from 'react';

export const ActivitiesHome = ({activities}) => {


  const memoActivities = useMemo(
    () =>
    activities.map((activity) => {
        return(
          <div key={activity.id}>
            <p>{activity.name}</p>
          </div>
        );
      }),
    [activities]
  );

  return (
    <div className="container">
      <div className="row mt-5">
        {memoActivities}
      </div>
    </div>
  )
};