import React from 'react'
import { Navbar } from '../components';
import { useParams } from 'react-router-dom';

export const Shorts = () => {
    // const getUserName = () =>{
    //     const path = window.location.pathname;
    //     return path.split('/').at(-1);
    // }

    // let username = getUserName();

    // ============= object destructuring ===============
    const {video_id, author_id} = useParams();
  return (
    <>
      <Navbar />
      <div className="container bg-dark p-4 rounded shadow text-bg-danger text-center">
        Shorts is good
        <h1>{video_id},</h1>
        <h1> {author_id}</h1>
      </div>
    </>
  );
};
