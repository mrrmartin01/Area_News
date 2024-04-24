"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import { User } from "./models";


export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData)
    try {
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
    catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}


export const deletePost = async (formData) => {
    const { slug } = Object.fromEntries(formData)
    try {
        connectToDb()
        await Post.findByIdAndDelete(slug)
        console.log("Post deleted successfully")
        revalidatePath("/blog")
    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}


export const handleGithubLogin = async () => {
    "use server"

    await signIn("github");
}

export const handleLogout = async () => {
    "use server"

    await signOut();
}

export const register = async (formData) => {
    const { username, email, password, img, passwordRepeat } = object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return "Passwords do not match";
    }

    try {
        connectToDb();

        const user = User.findOne({ username });

        if (user) {
            return "User already exists";
        }

        const newUser = new User({
            username,
            email,
            password,
            img,
        });
        await newUser.save();

    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}