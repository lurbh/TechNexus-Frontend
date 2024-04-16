import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../../context/ProductContext";

export default function EditProductsForm(props)
{
    const context = useContext(ProductContext); 
    let navigate = useNavigate();
    const [formState, setFormState] = useState({
        product_name: "",
        category_id: 0,
        brand_id: 0,
        description: "",
        price: 0,
        quantity_available: 0
    })
    useEffect( ()=> {
        const fetchProducts = () => {
            let tempProduct = context.getProductByID(props.productID);
            if(tempProduct.length)
                setFormState(...tempProduct);
        }
        fetchProducts()
    }, [context, props.productID])

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="centre">
            <h2>Edit Product</h2>
            <div className="product-form">
                <div className="form-group">
                    <label className="form-label">Product Name</label>
                    <input type="text" name="product_name" className="form-input" onChange={updateFormField} value={formState.product_name}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-input"  name="category_id" aria-label="Select Product Category" onChange={updateFormField} value={formState.category_id}>
                        <option>Select Product Category</option>
                        {
                            context.getCategories().map((cat) => {
                                return <option value={cat.category_id} key={cat.category_id}>{cat.category_name}</option>
                            })
                        }
                    </select>
                    {/* <input type="text" name="category_id" className="form-input" onChange={updateFormField} value={formState.category_id}/> */}
                </div>
                <div className="form-group">
                    <label className="form-label">Brand</label>
                    <select className="form-input"  name="brand_id" aria-label="Select Product Brand" onChange={updateFormField} value={formState.brand_id}>
                        <option>Select Product Brand</option>
                        {
                            context.getBrands().map((brand) => {
                                return <option value={brand.brand_id} key={brand.brand_id}>{brand.brand_name}</option>
                            })
                        }
                    </select>
                    {/* <input type="text" name="brand_id" className="form-input" onChange={updateFormField} value={formState.brand_id}/> */}
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea name="description" className="form-input" onChange={updateFormField} value={formState.description}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="number" name="price" className="form-input" onChange={updateFormField} value={formState.price}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Quantity Available</label>
                    <input type="number" name="quantity_available" className="form-input" onChange={updateFormField} value={formState.quantity_available}/>
                </div>
                <button className="form-btn" onClick={()=> {
                    context.updateProduct(
                        props.productID,
                        formState.product_name,
                        formState.category_id,
                        formState.brand_id,
                        formState.description,
                        formState.price,
                        formState.quantity_available
                    )
                    navigate("/products")
                }}>Edit Product</button>
            </div>
        </div>
    )
}