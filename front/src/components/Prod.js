import {MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, } from "mdb-react-ui-kit";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from 'react'
function  Prod() {
    const url = "http://localhost:3030/api/products";

    const navigate = useNavigate();
    const [user, setUser] = useState({
            "productID":"" ,
            "productName":"" ,
            "brand":"" ,
            "price": "",
            "qte":"",
            "rating":"",
            "image": ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post(url, user)
        .then((response) => {
            console.log(response.data);
            alert(response.data.msg);
            navigate("/SignIn");
        })
        .catch((error) => {
            alert(error.response.data.msg);
            console.error("There was an error!", error);
        });
    };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios
    //         .get(url)
    //         .then((response) => {
    //             console.log(response.data);
    //             alert(response.data.msg);

    //             // Use navigate to go to a new URL
    //             navigate("/SignIn");
    //         })
    //         .catch((error) => {
    //             alert(error.response.data.msg);
    //             console.error("There was an error!", error);
    //         });
    // };
    return (
        <div>        
        <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center bg-image"
            style={{
            backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/searchbox/img4.webp)",
            }}
        >

        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
                <h2 className="text-uppercase text-center mb-5">products</h2>
                <form onSubmit={handleSubmit}>
                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        type="text"
                        placeholder="Enter product id "
                        onChange={handleChange}
                        id="productID"
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter product Name"
                        onChange={handleChange}
                        id="productName"
                    />
                    
                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter brand"
                        type="text"
                        onChange={handleChange}
                        id="brand"
                    />

                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter price"
                        type="text"
                        onChange={handleChange}
                        id="price"
                    />

                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter qte"
                        onChange={handleChange}
                        id="qte"
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter rating"
                        onChange={handleChange}
                        id="rating"
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        placeholder="Enter image"
                        onChange={handleChange}
                        id="image"
                    />

                    <MDBBtn
                        className="mb-4 w-100 gradient-custom-4"
                        size="lg"
                        type="submit product"
                    >
                    Register
                    </MDBBtn>

                
                </form>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
    </div>

    );
}
export default Prod;