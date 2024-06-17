import React from "react";
import { Link } from "react-router-dom";

const ViewAllMyResOrders = () => {
    return(
        <>
        <div className="container-fluid border rounded py-5 shadow text-center ">
        <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
            ALL MY RESTAURANT ORDERS 
            <div className="float-end fs-4  text-light my-3">
                <Link to="/restaurant/home" className="btn btn-outline-light mx-2 px-3">BACK</Link>
            </div>
        </div>
        
        <div className="container search-bar my-5">
            <form className="d-flex">
                <input className="form-control me-2 px-5 shadow" list="" type="search" placeholder="Search"
                    aria-label="Search"/>
                <button className="btn btn-outline-primary shadow" type="submit">Search</button>
            </form>
        </div>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Food</th>
                <th scope="col">Food Name</th>
                <th scope="col">Category </th>
                <th scope="col">Restaurant </th>
                <th scope="col">Price </th>
                <th scope="col">Quantity </th>
                <th scope="col">Customer</th>
                <th scope="col">Order Time </th>
                <th scope="col">Order Status </th>
                <th scope="col">Delivery Person </th>
                <th scope="col">Delivery Contact </th>
                <th scope="col">Delivery Time </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Los2657214</td>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Chicken</td>
                <td>Restaurant-1</td>
                <td>299</td>
                <td>2</td>
                <td>customer-1</td>
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>processing</td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <a href="assigndeliveryper.html"><button type="button" className="btn btn-outline-danger mx-2 px-4">ASSIGN DELIVERY</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td>Los2657214</td>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Chicken</td>
                <td>Restaurant-1</td>
                <td>299</td>
                <td>2</td>
                <td>customer-1</td>
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>processing</td>
                <td>
                   Delivery Assigned
                </td>
              </tr>
              <tr>
                <td>Los2657214</td>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Chicken</td>
                <td>Restaurant-1</td>
                <td>299</td>
                <td>2</td>
                <td>customer-1</td>
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>processing</td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <Link to="" className="btn btn-outline-danger mx-2 px-4">ASSIGN DELIVERY</Link>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
        </>
    )
}

export default ViewAllMyResOrders;