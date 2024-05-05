import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import appwriteservice from '../Appwrite/Storege'
import { Container,Button } from '../components/index'

const Post = () => {
    const [post, setPost] = useState()
    const navigate =useNavigate()
    const {slug}=useParams()

    useEffect(()=>{
        appwriteservice.getpost(slug).then((post)=>{
       if (post){
         setPost(post)
       }else{
            navigate('/')
       }
     })
    
    })

    const deletethispost =()=>{
        appwriteservice.deletepost(post.$id).then((status)=>{
            if (status){
                appwriteservice.deletefile(post.feacturedimage)
                navigate('/')
            }
        })
    }

  return post? (
    <div className="py-8">
    <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
                src={appwriteservice.getfilepreview(post.feacturedimage)}
                alt={post.title}
                className="rounded-xl"
            />

            {isAuthor && (
                <div className="absolute right-6 top-6">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button bgColor="bg-green-500" className="mr-3">
                            Edit
                        </Button>
                    </Link>
                    <Button bgColor="bg-red-500" onClick={deletethispost}>
                        Delete
                    </Button>
                </div>
            )}
        </div>
        <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">
            {parse(post.content)}
            </div>
    </Container>
</div>
  ):null;
}

export default Post
