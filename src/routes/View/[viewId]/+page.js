export const load = ({fetch, params}) => {
  console.log(params.viewId)

  const fetchProducts = async(id) =>{
    const productRes  = await fetch(`https://dummyjson.com/products/${id}`);
    const productData = await productRes.json();
    return productData;
  }

  return {
      product: fetchProducts(params.viewId)
  }
}