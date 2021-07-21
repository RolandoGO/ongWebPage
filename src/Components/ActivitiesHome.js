import React from 'react';
import { useMemo } from 'react';

export const ActivitiesHome = (props) => {


  const memoActivities = useMemo(
    () =>
    news.map((newActivitie) => {
        return (
        //   <CardActivities key={activities.id} activities={activities} /> Place Card component, Ticket 98 in progress
        );
      }),
    [props]
  );

  return (
    <div className="container">
      <div className="row mt-5">
        {memoActivities}
      </div>
    </div>
  )
};