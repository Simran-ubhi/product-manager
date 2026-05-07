"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"


type Product = {
    id: string;
    name: string;
    price: string;
};

export default function NewProductPage(){
    const router = useRouter();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState<Product[]>([]);

    // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {  // THIS FOR useState demo
    //     e.preventDefault();
    //     const newProduct: Product = {
    //         id: Date.now().toString(),
    //         name,
    //         price,
    //     };
    //     setProduct((prev)=>[...prev, newProduct]);

    //     // reset form
    //     setName("");
    //     setPrice("");
    //     router.push("/admin/products");
    // }



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const newProduct={
            name,
            price: Number(price),
        };

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if(!res.ok){
            console.error("FAILED TO CREATE PRODUCT");
            return;
        }

        setName("");
        setPrice("");

        router.push("/admin/products");
    }


    return (
        <div>
            <h1>Add Product</h1>
            
            <form onSubmit={handleSubmit}>
                <input style={{padding:10, margin:20}}type="text" placeholder="Product Name" value = {name} onChange={(e)=> setName(e.target.value)} />
                <input type="number"style={{padding:10, margin:20}} placeholder="price" value = {price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <h2>Preview</h2>
            <ul>
                {product.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}