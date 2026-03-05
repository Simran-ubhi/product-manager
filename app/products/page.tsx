import Link from "next/link"


const products = [
    {id:"1", name:"Laptop", price: 1200},
    {id:"2", name:"Phone", price: 1000},
    {id:"3", name:"Headphones", price: 500}
];

export default function productPage() {
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