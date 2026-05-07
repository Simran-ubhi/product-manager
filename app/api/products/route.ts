let products = [
    {id:"1", name:"Product A", price: 10},
    {id:"2", name:"Product B", price: 20},
];


export async function GET(){
    return Response.json(products);
}

export async function POST(req: Request){
    const data = await req.json();

    const newProduct = {
        id: Date.now().toString(),
        name: data.name,
        price: data.price,
    };

    products.push(newProduct);

    return Response.json(newProduct);
}