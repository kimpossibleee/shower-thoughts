import Link from "next/link"
import {example_post} from './randomShowerThought'

interface Prop {
  type: string,
  post: any,
  setPost: any,
  submit: boolean,
  handleSubmit: any
}

export default function Form({ type, post, setPost, submit, handleSubmit }: Prop) {

  return (

    <section>


      <h1 className=' ml-10 head_text'>Post Here</h1>
      <p className='ml-10 mt-6 text-lg font-medium text-gray-900'>Jot down your wild shower thoughts here. No Judging allowed!!</p>

      <form onSubmit={handleSubmit} className='mt-10 mx-6 glassmorphism' >
        <label className='tracking-wider text-gray-500 md:text-lg'>
          <span>
            your shower thoughts
          </span>

          <textarea required value={post.post} placeholder={example_post()}className="post_textarea" onChange={(e) => setPost({ ...post, post: e.target.value })}> </textarea>
        </label>


        {/* My buttons */}
        <div className='flex-end' mx-3 mb-5 gap-4 text-gray-500 text-sm>
          <Link href='/' className='mr-5 tracking-tighter text-gray-500 md:text-lg'>Cancel</Link>
          <button className='my_button' type='submit' disabled={submit}>{submit? `${type}..`: type}</button>
        </div>


      </form >



    </section >
  )
}
