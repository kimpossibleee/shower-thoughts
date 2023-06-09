'use client'

interface Post {
  post: string;
  user: {
    username: string;
    email: string;
  };
}

export default function Card({ post }: { post: Post }) {
  return (
    <section>
      <div className='_card'>
        <div className='content-center'>
          <div>
            <p className='mb-2 text-xl font-bold tracking-tight text-gray-700
             text-center' >"{post.post}"</p>
            <div>
              <div className='card_info'>

                <div className='ml-3 mt-4'>
                  <p className='card_desc'>id: {post.user.username}</p>
                  <p className='card_desc'>email: {post.user.email}</p>
                </div>
              </div>
            </div>

            <div className='text-center mt-4 mb-4'><button
              className="middle none center rounded-lg bg-pink-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              <i className="material-icons">♡</i>
            </button></div>

          </div>
        </div>
      </div>
    </section>
  )
}
