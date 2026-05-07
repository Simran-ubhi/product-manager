import Link from "next/link";

type Product = {
    id:string;
    name:string;
    price:number;
}

async function getProducts(): Promise<Product[]>{
    const res = await fetch("http://localhost:3000/api/products",{
        cache: "no-store",
    })

    if(!res.ok){
        throw new Error("Failed to Fetch Products");
    }

    return res.json();
}

export default async function AdminProductPage(){
    const products = await getProducts();
    return (
        <div>
            <h1 style={{margin: 10, fontSize: "20px"}}>Admin Products</h1>
            <Link href="/admin/products/new"> 
                <button style={{marginBottom: 10}}>+ Add Product</button>
            </Link>
            <ul>
                {products.map((p) => (
                  <li key={p.id}>
                    {p.name} - ${p.price}
                    <Link href={`/admin/products/${p.id}/edit`}>
                        <button style={{marginLeft: 20}}>Edit</button>
                    </Link>
                    <button style={{marginLeft: 20}}>Delete</button>
                  </li>  
                ))}
            </ul>
        </div>
    )
}