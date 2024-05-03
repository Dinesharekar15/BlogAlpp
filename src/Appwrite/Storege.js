import { Client, Databases, ID ,Query,Storage} from "appwrite";
import conf from "../conf/conf";


export class Storege{
   client=new Client()
   databases;
   bucket;


   constructor(){
    this.client
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.projectid)

    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)
   }

   async createpost ({title,content ,feacturedimage,slug,status,userid}){
     try {
        await this.databases.createDocument(conf.databaseid,conf.collectionid,slug,{
            title,
            content,
            feacturedimage,
            slug,
            status,
            userid
        })
     } catch (error) {
        console.log("error",error)
     }
   }

   async updatepost(slug,{ title,content ,feacturedimage,status,}){
    try {
        await this.databases.updateDocument(conf.databaseid,conf.collectionid,slug,{
            title,
            content,
            feacturedimage,
            status,
        })
    } catch (error) {
        console.log("error",error)
    }
   
   }

   async deletepost(slug){
    try {
        await this.databases.deleteDocument(conf.databaseid,conf.collectionid,slug)
        return true
    } catch (error) {
        console.log("error",error)
        return false
    }
   }

   async getpost (slug){
    try {
        return await this.databases.getDocument(conf.databaseid,conf.collectionid,slug)
    } catch (error) {
        console.log("error",error)
    }
    return null
   
   }

   async getposts (queries=[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(conf.databaseid,conf.collectionid,queries)
    } catch (error) {
        console.log("error",error)
    }
    return null
   
   }
   
   async uploadfile(file){
    try {
        return await this.bucket.createFile(
            conf.bucketid,
            ID.unique(),
            file)
    } catch (error) {
        throw error
    }
    }
  async deletefile(fileid){
    try {
        await this.bucket.deleteFile(conf.bucketid,fileid)
    } catch (error) {
        throw error
    }
    }

    getfilepreview(fileid){
        return this.bucket.getFilePreview(conf.bucketid,fileid)
    }


}

const storege=new Storege()

export default storege
