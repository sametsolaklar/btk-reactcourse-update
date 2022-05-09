import React from "react";
import TextInput from "../toolbox/TextInput";
import { Button } from "reactstrap";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ product, categories, onChange, onSave }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || "*"}
        defaultOption="Seçiniz"
        options={categories.map(category => ({value: category.id, text: category.categoryName}))}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Hata"
      />
      <Button type="submit" className="btn btn-success">
        Kaydet
      </Button>
    </form>
  );
};

export default ProductDetail;
