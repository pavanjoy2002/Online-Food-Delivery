import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewFoodInfo = () => {
  const { foodId } = useParams();
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/viewallfoods/${foodId}`);
        const data = await response.json();
        setFoodDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, [foodId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!foodDetails) {
    return <p>Food details not found.</p>;
  }

    return(
    <div className="container text-center">    
    <div className="container mx-5 my-5 shadow border rounded text-center row">
        <div className="col ">
            <div className="container shadow bg-light py-2 my-5">
                <div className="Carousel">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={foodImgUrl} className="d-block w-100" alt="..." height="200px" width="100px"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={foodImgUrl2} className="d-block w-100" alt="..." height="200px" width="100px"/>
                            </div>
                            <div className="carousel-item">
                                <img src={foodImgUrl3} className="d-block w-100" alt="..." height="200px" width="100px"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container border rounded mx-1 my-5 py-5 px-1 shadow col-sm-5">
            <form className="px-5">
                <div className="header fs-2 text-center mb-5 bg-primary text-light rounded-top">
                {foodDetails.name}
                </div>
                <div className="">
                    <h3 className="my-2">Description:</h3>
                    <p className="text-start">{foodDetails.description}</p>
                </div>
                <div className="">
                   <h3 className="my-2">Restaurant Details:</h3> 
                    <p className="text-start">Name :  {foodDetails.restaurantName}</p>
                    <p className="text-start">Contact : {foodDetails.phoneNumber}</p>
                    <p className="text-start">Email-Id : {foodDetails.emailId}</p>
                    <p className="text-start">Address : {foodDetails.street}, {foodDetails.city}, {foodDetails.pinCode}</p>
                </div>
                <hr/>
                <div className="text-danger fs-4">
                    Price : {foodDetails.price}/-
                </div>
                <div className="lg-rg mx-2 mt-5">
                    <a href="mycart.html"><button type="button"
                            className="btn btn-outline-primary mx-2 px-3">ADD TO CART</button></a>
                    <a href="mycart.html"><button type="button"
                            className="btn btn-outline-success mx-2 px-4">GO TO CART</button></a>
                </div>
            </form>
        </div>

        <div className="container border rounded my-5 mx-1 py-5 shadow text-center col">
            <form className="px-2 ">
                <div className="header fs-2 text-center mb-5 bg-primary text-light rounded-top">
                    Reviews
                </div>
                
        <table className="table text-start">
            <thead>
              <tr>
                <th scope="col">Reviews</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer-1 5/5 * <br/> Very tasty</td>
              </tr>
              <tr>
                <td>Customer-2 4.5/5* <br/> It's good and worth for money</td>
              </tr>
              <tr>
                <td>Customer-3 4.2/5* <br/> Very nice</td>
              </tr>
            </tbody>
          </table>
            </form>
        </div>
    </div>
    </div>
    )
}
export default ViewFoodInfo;