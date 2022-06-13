import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import {getPosts} from '../services';

interface Props {
    posts: [];
}

// const posts = [
//     {title: 'React Testing', excerpt: 'Learn React Testing'},
//     {title: 'React with Tailwind', excerpt: 'Learn React with Tailwindcss'},
// ];


const Home: NextPage<Props> = ({posts}) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Ángel Romero</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='lg:col-span-8 col-span-1'>
                    {posts.map((post: any, index) => <PostCard post={post} key={post.title}/>)}
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>

        </div>
    )
}

Home.getInitialProps = async () => {
    const posts = (await getPosts()) || [];
    return {
        posts,
    }
}
export default Home