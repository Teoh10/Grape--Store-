import React, { useContext, useState ,useEffect} from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
// import "./sell.css"
export const Sell = ()=> {
    // const {getProductList} = useContext(ShopContext);
    const[name,setName] = useState("");
    const[image,setImage] = useState("");
    const[price,setPrice] = useState(0);
    const {addNewProduct} = useContext(ShopContext);

    const [files, setFiles] = useState();
    const [previews, setPreviews] = useState();

  // rendering previews
  useEffect(() => {
    if (!files) return;
    var tmp=(URL.createObjectURL(files));;

    const objectUrls = tmp;
    setPreviews(objectUrls);
    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
        return () => {
          URL.revokeObjectURL(objectUrls[i]);
        };
      };
    
  }, [files]);
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("handlerSubmit called");
        const imageUrls = previews;
        // You can now access 'name' and 'email' state variables and perform actions
        const newItem ={
            id:PRODUCTS.length+1,
            productName: name,
            price: price,
            productImage: imageUrls,
        }
        console.log(newItem);
        addNewProduct(newItem);
        setName("");
        setPreviews("");
        setPrice(0);
        // Here, you can submit the form data to an API or perform other actions
      };
    return (
        <div className="sell-container">
            <h3> Basic Information</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                             onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image : </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/jpg, image/jpeg, image/png"
                            onChange={(e) => {if (e.target.files[0]) {
                                                setFiles(e.target.files[0]);
                            }}}
                            />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price (SOL) : </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                             onChange={(e)=> setPrice(e.target.value)}
                        />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {previews && <img src={previews} alt="Preview" className="preview-image"/>}
        </div>
    );
};

