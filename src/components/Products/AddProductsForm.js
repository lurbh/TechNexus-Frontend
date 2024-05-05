import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import UploadImage from "../Main/UploadImage";

export default function AddProductsForm() {
  const context = useContext(ProductContext);
  let navigate = useNavigate();
  const [formState, setFormState] = useState({
    product_name: "",
    category_id: 0,
    brand_id: 0,
    description: "",
    price: 0,
    quantity_available: 0,
  });

  const [image_url, setImage_url] = useState("");

  const updateFormField = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="centre">
      <h2>Add Product</h2>
      <div className="product-form">
        <table border={0} className="product-form-table">
          <tbody>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Product Name:</label>
              </td>
              <td className="product-table-input">
                <input
                  type="text"
                  name="product_name"
                  className="product-input"
                  onChange={updateFormField}
                  value={formState.product_name}
                />
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Category:</label>
              </td>
              <td className="product-table-input">
                <select
                  className="product-input"
                  name="category_id"
                  aria-label="Select Product Category"
                  onChange={updateFormField}
                  value={formState.category_id}
                >
                  <option>Select Product Category</option>
                  {context.getCategories().map((cat) => {
                    return (
                      <option value={cat.id} key={cat.id}>
                        {cat.category_name}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Brand:</label>
              </td>
              <td className="product-table-input">
                <select
                  className="product-input"
                  name="brand_id"
                  aria-label="Select Product Brand"
                  onChange={updateFormField}
                  value={formState.brand_id}
                >
                  <option>Select Product Brand</option>
                  {context.getBrands().map((brand) => {
                    return (
                      <option value={brand.id} key={brand.id}>
                        {brand.brand_name}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Description:</label>
              </td>
              <td className="product-table-input">
                <textarea
                  name="description"
                  className="product-input"
                  rows="5"
                  onChange={updateFormField}
                  value={formState.description}
                />
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Price:</label>
              </td>
              <td className="product-table-input">
                <input
                  type="text"
                  name="price"
                  className="product-input"
                  onChange={updateFormField}
                  value={formState.price}
                />
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">
                  Quantity Available:
                </label>
              </td>
              <td className="product-table-input">
                <input
                  type="text"
                  name="quantity_available"
                  className="product-input"
                  onChange={updateFormField}
                  value={formState.quantity_available}
                />
              </td>
            </tr>
            <tr className="product-input-section">
              <td className="product-input-table-label">
                <label className="product-input-label">Image:</label>
              </td>
              <td className="product-table-input">
                <UploadImage folder="Products" setImage_url={setImage_url} />
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="form-group">
                    <label className="form-label">Product Name</label>
                    <input type="text" name="product_name" className="form-input" onChange={updateFormField} value={formState.product_name}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-input"  name="category_id" aria-label="Select Product Category" onChange={updateFormField} value={formState.category_id}>
                        <option>Select Product Category</option>
                        {
                            context.getCategories().map((cat) => {
                                return <option value={cat.id} key={cat.id}>{cat.category_name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Brand</label>
                    <select className="form-input"  name="brand_id" aria-label="Select Product Brand" onChange={updateFormField} value={formState.brand_id}>
                        <option>Select Product Brand</option>
                        {
                            context.getBrands().map((brand) => {
                                return <option value={brand.id} key={brand.id}>{brand.brand_name}</option>
                            })
                        }
                    </select>
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
                </div> */}
        <button
          className="product-form-btn"
          onClick={() => {
            context.addProduct(
              formState.product_name,
              formState.category_id,
              formState.brand_id,
              formState.description,
              parseFloat(formState.price),
              formState.quantity_available,
              image_url
            );
            navigate("/products");
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
