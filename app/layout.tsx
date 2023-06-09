import { LayoutProps } from '@.next/types/app/layout';
import '@styles/globals.css'

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Shower Thoughts',
    description: 'Write down and share your thoughts in the moment'
}

export interface LayoutPropsOptionalProvider extends LayoutProps {
    Provider?: React.ReactNode;
    session?: any
}

export default function Layout({ children, Provider: OptionalProvider, session }: LayoutPropsOptionalProvider) {
    return (
        <html lang='en'>
            <body>
                <Provider session={session}>

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
