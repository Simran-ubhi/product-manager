
const products = [
    {id:"1", name:"Laptop", price: 1200},
    {id:"2", name:"Phone", price: 1000},
    {id:"3", name:"Headphones", price: 500}
];

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string}>
}
) 
{
    const {id} = await params;

    const product = products.find((p)=> p.id == id);
    
    return (
        <div className="">
            <h1>{product?.name}</h1>
            <p>Price: {product?.price}</p>
        </div>
    );
}
