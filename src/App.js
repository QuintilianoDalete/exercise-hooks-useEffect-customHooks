import React, { useEffect, useContext } from 'react';
import LastUpdate from './components/LastUpdate';
import Posts from './components/Posts';
import RefreshButton from './components/RefreshButton';
import Selector from './components/Selector';
import { Context } from './components/RedditContext';

const App = () => {
  const {
    fetchPosts,
    selectedSubreddit,
    postsBySubreddit,
    isFetching,    
  } = useContext(Context);

  useEffect(() => {
    fetchPosts();
  }, []); // useEffect working as the componentDidMount function.

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = post.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <LastUpdate />
        <RefreshButton />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
}

export default App;