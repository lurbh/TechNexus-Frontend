import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function SeachForm(props)
{
    const productcontext = useContext(ProductContext);
    const [formState, setFormState] = useState({
        name: "",
        minprice: 0,
        maxprice: 0
    });
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);

    const updateFormField = (e) => {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value,
        });
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        const noValue = parseInt(value)
        if (checked)
          if(category.length  > 0)
            setCategory([...category, noValue]);
          else
            setCategory([noValue]);
        else
        {
          let arraycategory = category.filter((item) => item !== noValue)
          setCategory(arraycategory);
        }
    }

    const handleBrandChange = (e) => {
        const { value, checked } = e.target;
        const noValue = parseInt(value)
        if (checked)
          if(brand.length  > 0)
            setBrand([...brand, noValue]);
          else
            setBrand([noValue]);
        else
        {
          let arraybrand = brand.filter((item) => item !== noValue)
          setBrand(arraybrand);
        }
    }

    const submitSearch = async () => {
        const products = await productcontext.searchProduct(formState.name,category,brand,formState.minprice,formState.maxprice);
        props.setProducts(products)
    }

    const handleReset = async () => {
        props.setProducts(productcontext.getProducts());
        setBrand([]);
        setCategory([]);
        setFormState({
            name: "",
            minprice: 0,
            maxprice: 0
        })
    }

    return (
        <div className="search-form">
            <h3>Search</h3>
            <div className="search-input-section">
                <h4>Name:</h4>
                <input type="text" className="search-input" name="name" onChange={updateFormField} value={formState.name}/>
            </div>
            <div className="search-input-section-checkboxes">
                <h4>Category:</h4>
                {productcontext.getCategories().map((c) => (
                    <div className="checkbox-row"  key={c.id}>
                        <input type="checkbox" name="category" value={c.id} onChange={handleCategoryChange} checked={category.includes(c.id)}/><label>{c.category_name}</label>
                    </div>
                ))}
            </div>
            <div className="search-input-section-checkboxes">
                <h4>Brands:</h4>
                {productcontext.getBrands().map((b) => (
                    <div className="checkbox-row" key={b.id}>
                        <input type="checkbox" name="category" value={b.id} onChange={handleBrandChange} checked={brand.includes(b.id)}/><label>{b.brand_name}</label>
                    </div>
                ))}
            </div>
            <div className="search-input-section">
                <h4>Price:</h4>
                <div className="price-holder">
                    <input type="number" className="search-input-no" name="minprice" onChange={updateFormField} value={formState.minprice} placeholder="0"/>
                    <span>-</span>
                    <input type="number" className="search-input-no" name="maxprice" onChange={updateFormField} value={formState.maxprice} placeholder="99999"/>
                </div>
            </div>
            <div className="search-button-box">
                <button className="search-btn" onClick={handleReset}>Reset</button>
                <button className="search-btn" onClick={submitSearch}>Search</button>
            </div>
            
        </div>
    )
}