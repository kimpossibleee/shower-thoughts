'use client'
// Could not resolve the error for session?.user?.id in tsx file

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'


export default function JotIdea() {
    const router = useRouter();
    const {data: session} = useSession()

    const [submit, setSubmit] = useState(false)
    const [post, setPost] = useState({post: ''})

    const createPost = async(e) => {
        e.preventDefault();
        setSubmit(true)

        try{
            const response = await fetch("/api/post/new", {
                method: "POST",
                body: JSON.stringify({
                  post: post.post,
                  userId: session?.user?.id,
                }),
              });
              if (response.ok) {
                router.push("/");
              }
            } catch (error) {
              console.log(error);
            } finally {
              setSubmit(false);
            }
          };

    return (
       <Form
        type='Create'
        post={post}
        setPost={setPost}
        submit={submit}
        handleSubmit={createPost}

       />
    )
}
