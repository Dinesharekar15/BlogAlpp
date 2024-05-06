import React from 'react'
import { useCallback } from 'react'
import {Button,Input,RTE,Select} from "../index"
import storegeservice from "../../Appwrite/Storege"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PostForm = ({post}) => {
  
  const {register,handleSubmit,control,getValues,setValue,watch} =useForm(
    {
      defaultValues:{
        title:post?.title||"",
        content:post?.content||"",
        content:post?.content||"",
        status:post?.status||"draft",
      
      }
    }
  )
  const navigate =useNavigate()
  const userdata=useSelector(state=>state.auth.userdata)

  const submit =async(data)=>{
    if(post){
      const file =data.image[0]? await storegeservice.uploadfile(data.image[0]):null

      if (file){
        await storegeservice.deletefile(post.feacturedimage)
      }
      const dbpost=await storegeservice.updatepost(post.$id,{
        ...data,
        featuredImage: file ? file.$id : undefined,
      })

      if (dbpost) {
        navigate(`/post/${dbpost.$id}`);
    }

    }else{
      const file =await storegeservice.uploadfile(data.image[0])
      if (file){
        const fileid=file.$id;
        data.feacturedimage=fileid

        const dbpost =await storegeservice.createpost({...data,userid:userdata.$id}) ;
        if (post ){
          navigate(`/post/${dbpost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

React.useEffect( ()=> {
  const subcription =watch((value,{name})=>{
    if(name==="title"){
      setValue("slug",slugTransform(value.title),{shouldValidate:true})
    }
  
  })
  return ()=>subcription.unsubscribe()
},[watch,setValue,slugTransform])


  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default  PostForm
