import connectMongoDB from "@/database/config";
import User from "@/models/user.model";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";



export async function POST(request) {
    try {
        const {username, password} = await request.json();
        await connectMongoDB();
        if(!username || !password) {
            return new Response("Missing username or password",{status : 401});
        }
        const user = await User.findOne({username}) 
        if(!user) return new Response("Username doesnt exixts", {status : 400});
        const validPssword = await bcryptjs.compare(password,  user.password);
        if (!validPssword ) return new Response({message:"invalid passsword", status: 400 });

        const tokenData = {
            username: user.username,
            id: user._id
        };
        const token = await jwt.sign(tokenData , process.env.JWT_SECRET_KEY , {expiresIn:'1' })
        const response = NextResponse.json({message: "Login successful"});
        response.cookies.set('token',token,{httpOnly : true});
        return Response.json({message:"Login successfull."});
    } catch (error) {
        console.log('Something went wrong',error,{status: 500})
    }
} 