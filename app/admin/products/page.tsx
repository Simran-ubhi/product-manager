import Link from "next/link";

const products = [
    {id:"1", name:"Laptop", price: 1200},
    {id:"2", name:"Phone", price: 1000},
    {id:"3", name:"Headphones", price: 500}
];

export default function AdminProductPage(){
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