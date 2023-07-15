import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
    name:string
    price:number
}

export default (req :NextApiRequest, res :NextApiResponse<Product[]>)  => {

    if (req.method.toLocaleLowerCase() !== 'get') {
        return res.status(405).end()
    }
    
    
    res.status(200).json([{
        name: "胡麻鯖セット",
        price: 5000,
    }, {
        name: "明太子詰め合わせ",
        price: 6000
    }])
}