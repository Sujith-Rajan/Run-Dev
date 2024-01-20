import prisma from '../../../utils/connect'
import {NextResponse} from 'next/server'


export const GET = async () => {

    
    try{
        const views =await prisma.post.findMany({
            orderBy: {
                views: 'desc'
            },
            take: 4,
            include:{user:true},
        })
         
        return new NextResponse(JSON.stringify(views,{status: 200}))
    }
    catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something Went Wrong!"},{status: 500}))
    }
}


