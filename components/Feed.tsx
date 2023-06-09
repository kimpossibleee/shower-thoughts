'use client';

import {useState, useEffect} from 'react'


import Card from './Card'

const CardList = ({ data, handleTagClick }) =>{
  return (
    <div className='flex gap-5'>
      {data.map((post) => (
        <Card
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};


export default function Feed () {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('/api/post');
      const data = await response.json();

      setPosts(data)
    }
    fetchData()
  }, [])




  return(<>
  <section>
    <CardList
    data={posts}
    handleTagClick={() => {}}
    />


  </section>
  </>)
}
