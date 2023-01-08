import React from "react";
import { tweet, tweet2 } from "./Tweet";

function TweetList() {
  return(
      <section className="tweets">
        <article className="tweet">
          <header className="tweet--header">
            <img className="tweet--avatar" src={tweet.avatar}/>
            <h2 className="tweet--name">{tweet.lastName}</h2>
            <small className="tweet--handle">{tweet.handle}</small>
          </header>
  
          <div className="tweet--body">
            <p>{tweet.body}</p>
          </div>
  
          <footer className="tweet--footer">
            <small className="footer--age">{tweet.age}<small>
                <span className="footer--actions">
                  <a href="#"><i className="fa fa-flag"></i></a>
                  <a href="#"><i className="fa fa-retweet"></i></a>
                  <a href="#"><i className="fa fa-heart"></i></a>'
                </span>
              </small></small></footer>
        </article>
        
        <article className="tweet">
          <header className="tweet--header">
            <img className="tweet--avatar" src={tweet2.avatar}/>
            <h2 className="tweet--name">{tweet2.lastName}</h2>
            <small className="tweet--handle">{tweet2.handle}</small>
          </header>
  
          <div className="tweet--body">
            <p>{tweet2.body}</p>
          </div>
  
          <footer className="tweet--footer">
            <small className="footer--age">{tweet2.age}<small>
                <span className="footer--actions">
                  <a href="#"><i className="fa fa-flag"></i></a>
                  <a href="#"><i className="fa fa-retweet"></i></a>
                  <a href="#"><i className="fa fa-heart"></i></a>'
                </span>
              </small></small></footer>
        </article>
  
      </section>
  );
}

export default TweetList;