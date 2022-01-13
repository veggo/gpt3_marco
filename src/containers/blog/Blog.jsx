import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 05, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Nov 24, 2021" text="Meet GPT-3. It Has Learned to Code (and Blog and Argue)." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Understanding GPT-3 In 5 Minutes | by Alberto Romero." />
        <Article imgUrl={blog04} date="Mar 3, 2021" text="GPT-3: What's it good for? | Natural Language Engineering." />
        <Article imgUrl={blog05} date="Oct 15, 2020" text="OpenAI's new language generator GPT-3 is shockingly good." />
      </div>
    </div>
  </div>
);

export default Blog;
