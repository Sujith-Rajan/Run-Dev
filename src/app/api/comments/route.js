import { getAuthSession } from '../../../utils/auth'
import prisma from '../../../utils/connect'
import {NextResponse} from 'next/server'

export const GET = async (req) => {
    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get("postSlug")

    try{
        const comments = await prisma.comment.findMany({
            where:{...(postSlug && {postSlug})},
            include:{user: true,post: true}
        })
            
        return new NextResponse(JSON.stringify(comments,{status: 200}))
    }
    catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something Went Wrong!"},{status: 500}))
    }
}

export const POST = async (req) => {
    const session = await getAuthSession()
    
    if(!session){
        return new NextResponse(JSON.stringify({message:"You are not Authenticated"},{status: 401}))
    }
    try{
        const body = await req.json()
        const postSlug = decodeURIComponent(body.postSlug)
       
        const comment = await prisma.comment.create({
            data: {desc:body.addComment, userEmail: session.user.email,postSlug}
        })
      
        return new NextResponse(JSON.stringify(comment,{status: 200}))
    }
    catch(err){
        return new NextResponse(JSON.stringify({message:"something went wrong"},{status: 500}))
    }
}