import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets;
  const filterPark = filteredTweets.filter(function(tweet){
    return tweet.username === 'parkhacker';
  })

  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
     Fill_this
    </section>
  );
};

export default MyPage;
