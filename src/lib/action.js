"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn } from "./auth"

export const addPost = async (formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData)
    try{
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save()
        console.log("Post saved successfully")
        revalidatePath("/blog")
    }
    catch(err){
        console.log(err)
        return{error: "Something went wrong"}
    }
}


export const deletePost = async (formData) => {
    const {slug} = Object.fromEntries(formData)
    try{
        connectToDb()
        await Post.findByIdAndDelete(slug)
        console.log("Post deleted successfully")
        revalidatePath("/blog")
    }
    catch(err){
        console.log(err)
        return{error: "Something went wrong"}
    }
}


export const handleGithubLogin= async () => {
    "use server"

    await signIn("github");
  }