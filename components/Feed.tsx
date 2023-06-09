'use client';

import {useState, useEffect} from 'react'


import Card from './Card'

interface Post {
  post: string;
  _id: any
  user: {
    username: string;
    email: string;
  };
}

interface CardListProps {
  data: Post[];
}



const CardList = ({ data }: CardListProps) =>{
  return (
    <div className='flex gap-5'>
      {data.map((post) => (
        <Card
          key={post._id}
          post={post}
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
    />


  </section>
  </>)
}
