import '@styles/globals.css'

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Shower Thoughts',
    description: 'Write down and share your thoughts in the moment'
}

export default function Layout({ children } ) {
    return (
        <html lang='en'>
            <body className='bg-gradient-to-r from-cyan-50 to-blue-200'>
                <Provider>

                    {/* Main part of my application */}
                    <main className='main'>

                        <Nav />
                        {children}
                    </main>


                </Provider>
            </body>
        </html>
    )
}
