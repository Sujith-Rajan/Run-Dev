import prisma from '../../../utils/connect'
import {NextResponse} from 'next/server'
import { getAuthSession } from '../../../utils/auth'

export const GET = async (req) => {

    const {searchParams} = new URL(req.url)

    const page = parseInt(searchParams.get("page")) || 1
    const cat = searchParams.get("cat") 

    const POST_PER_PAGE = 2

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where:{
            ...(cat && {catSlug: cat})
        }
    }

    try{
        const [posts,count] = await prisma.$transaction([

            prisma.post.findMany(query),
            prisma.post.count({where: query.where})
        ]
        )
        return new NextResponse(JSON.stringify({posts,count},{status: 200}))
    }
    catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something Went Wrong!"},{status: 500}))
    }
}


export const POST = async (req) => {
    const session = await getAuthSession()
   
    if(!session){
        return new NextResponse(JSON.stringify({message:"You are not Authenticated"}),{status: 401})
    }
    try{
        const body = await req.json()
       
        const post = await prisma.post.create({
            data: {...body, userEmail: session.user.email}
        })
      
        return new NextResponse(JSON.stringify(post),{status: 200})
    }
    catch(err){
        
        return new NextResponse(JSON.stringify(err),{status: 500})
    }
}