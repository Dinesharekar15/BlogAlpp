import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
import appwriteservice from '../Appwrite/Storege'
import { Navigate } from 'react-router-dom'

function Editpost() {
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
    },[slug,navigate])

  return post?(
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ) :null 
}

export default Editpost
