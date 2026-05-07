import Link from "next/link"


type Product = {
    id:string;
    name:string;
    price:number;
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch("http://localhost:3000/api/products",{
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to Fetch Products");
    }

    return res.json();
}

export default async function productPage() {
    const products = await getProducts();
    return(
        <div style={{padding: 20 }}>
            <h1>Products</h1>
            <ul style={{margin: 20}}>
                {
                    products.map((p) => (
                        <li key={p.id}> 
                            <Link  href={`products/${p.id}`}>
                            {p.name} - ${p.price}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}