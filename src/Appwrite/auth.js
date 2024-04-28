import conf from "../conf/conf";


import { Client, Account, ID } from "appwrite";

export class Authservice{
   client=new Client()
   account

   constructor(){
    this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.projectid)

        this.account=new Account(this.client) 
    }
    
    async ceateaccounte({name, email,password}){
     try {
        const useraccount=await this.account.create(ID.unique(),email,password,name)
        if (useraccount) {
            // call another methode
            return this.login({email,password}) 
        } else {
            return
        }
     } catch (error) {
        throw error
     }
    }

    async login({email,password}){
       try {
         const userlogin=await this.account.createEmailSession(email,password)
         return userlogin

       } catch (error) {
        throw error
       }
    }
    async getaccount(){
        try {
            return await  this.account.get()
        } catch (error) {
            console.log(error)
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}


const authservice=new Authservice()

export default authservice