import React from 'react'
import { useState,useEffect } from 'react'
import appwriteservice from '../Appwrite/Storege'
import { Container } from 'postcss'
import { PostForm } from '../components'

const Homepage = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteservice.getposts([]).then((post)=>{
            if (post){
                setPosts(post.documents)
            }
        })

    },[])
    if (posts.length===0){
        <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </div>
            </div>
        </Container>
    </div>
    }
    return(
         
        <div className="w-full py-8">
            <Container>
                <div className='flex flex-wrap'>
                    {Postcard.map((post)=>{
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostForm {...post} />
                        </div>
                    })}
                </div>
            </Container>
        </div>
        
    )
  
}

export default Homepage
