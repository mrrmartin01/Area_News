"use server"

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import { User } from "./models";
import bcrypt from "bcryptjs";


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
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
}

export const register = async (formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return "Passwords do not match";
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return "User already exists";
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            username,
            email,
            password : hashedPassword, 
            img,
        });
        await newUser.save();

    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}

export const login = async (formData) => {
    const { username, email, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials" ,{username, password}, false)
    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}