import { NextResponse } from "next/server";
import User from "@/models/user.model.js";
import bcryptjs  from "bcryptjs";
import connectMongoDB from "@/database/config";

// Connect();
// export const POST = async (request: NextRequest) => {
    
//     try {
//         const body = await request.json();
//         const {username, password} = body;
//         if(!username ||  !password){
//             return new Response("Missing username or password",{status:400})
//         }
//         const user:any = User.findOne({username});
//         // if(user) {
//         //     return new Response("Username already exists", {status : 400});
//         // }

//         const salt = await bcryptjs.genSalt(12);
//         const hashedPassword = await bcryptjs.hash(password, salt);
//         console.log("here")
//         const newUser = new User({
//             username: username,
//             password: hashedPassword
//         });
//         await newUser.save();
//         return new Response('Successfully created a new account', { status: 200 })
//     } catch (error) {
//         console.log("findec\n"+error)
//     }
// }

export async function POST(request) {
    const {username, password} = await request.json();
    await connectMongoDB();
    console.log({username, password})
    if(!username || !password) {
        return new Response("Missing username or password",{status : 401});
    }
    const user = await User.findOne({username});
    if(user){
        return new Response("User Already exists.", {status: 400});
    }
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
        username: username,
        password : hashedPassword
    });
    console.log(newUser)
    await newUser.save();
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}