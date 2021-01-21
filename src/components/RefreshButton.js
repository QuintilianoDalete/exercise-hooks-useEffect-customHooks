import React, { useContext } from 'react';

import { Context } from './RedditContext';

const RefreshButton = () => {
  const { isFetching, refrechSubreddit } = useContext(Context);

  if (isFetching) return null;

  return (
    <button
      type='button'
      onClick={(event) => refrechSubreddit(event)}
      disabled={isFetching}
    >
    Refresh
    </button>
  );
};

export default RefreshButton;
