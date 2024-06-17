import React from "react";
import { Link } from "react-router-dom";

export const CustomerHeader = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-primary ">
        <div className="container-fluid">
          <span className=" title navbar-brand fs-2 text-primary border shadow px-5">Food ADDA</span>
            <div className="btn-group ">
                <Link to="/customer/mycart" className="btn btn-primary" aria-expanded="false">
                    MY CART
                </Link>
            </div>
              <div className="btn-group">
              <Link to="/customer/myorders" className="btn btn-primary" aria-expanded="false">
                    MY ORDERS
                </Link>
              </div>
            <div className="lg-rg bg-primary mx-2 px-2">
               <Link to="/welcome/home" className="btn btn-danger mx-2">Logout</Link>
            </div>
        </div>
    </nav>
        </>
    )
}

// -----------------------------------------------------------------My Cart-----------------------------------------------------------------------

export const MyCart = () => {
    return(
        <>
    <div className="container border rounded my-5 py-5 shadow text-center ">
        <div className="header fs-1 text-center py-3 mb-5 bg-primary text-light rounded-top">
            MY CART
            <div className="float-end fs-4  text-light my-3">
                <Link to="/customer/home" className="btn btn-outline-light mx-2 px-3">BACK</Link>
            </div>
        </div>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Food Name</th>
                <th scope="col">Category</th>
                <th scope="col">Restaurant </th>
                <th scope="col">Price </th>
                <th scope="col">Quantity </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Biryani</td>
                <td>Restaurant-1</td>
                <td>299/-</td>
                <td>
                    <input type="number" className="form-control" id="quantity" placeholder="1"  value="1" min="1" max="20"/></td>
                 <td>
                    <div className="lg-rg mx-2 ">
                        <button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Biryani</td>
                <td>Restaurant-1</td>
                <td>299/-</td>
                <td>    
                    <input type="number" className="form-control" id="quantity" placeholder="1"  value="1" min="1" max="20"/>
                </td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Biryani</td>
                <td>Restaurant-1</td>
                <td>299/-</td>
                <td><input type="number" className="form-control" id="quantity" placeholder="1"  value="1" min="1" max="20"     /></td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <div className="footer text-end bg-dark text-light rounded">
                <p className="my-2 px-5 p-2 fs-4">Total Price : 2039/-</p>
                <Link to="/customer/paymentportal" className="btn btn-success fs-4 mx-5 m-2 mb-3 px-4">Check Out</Link>
        </div>
    </div>
        </>
    )
}

// -----------------------------------------------------------------Payment Portal-----------------------------------------------------------------------

export const PaymentPortal = () => {
    return(
    <div style={{display: 'flex',justifyContent: 'center'}}>
    <div className="payment border rounded mx-5 my-5 py-5 shadow text-center " style="height: auto; width: 400px;" >
        <form className="px-5">
            <div className="header fs-4 text-center mb-5 bg-primary text-light rounded-top">
                PAYMENT DETAILS
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" id="nameofcard" placeholder="Enter Your Card Name" aria-describedby="textHelp"/>
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" id="cardno" placeholder="Enter Your Card Number" aria-describedby="textHelp"/>
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" id="expirydate" placeholder="Enter Your Card Expiry Date" aria-describedby="textHelp"/>
            </div>
            <div className="mb-4">
                <input type="password" className="form-control" placeholder="Enter Your CVV" id="cvv"/>
            </div>
            <div className="lg-rg mx-2 mt-5">
                <Link to="/customer/orderplaced" className="btn btn-primary mx-2 px-5">PAY  Rs. 2035 </Link>
            </div>
        </form>
    </div>
</div>
    )
}

// -----------------------------------------------------------Payment successful and order placed-----------------------------------------------------------
export const OrderPlaced = () => {
    return(
    <div className="container border rounded my-5 py-5 shadow text-center ">
        <div className="header fs-1 text-center mb-5 text-success rounded-top">
             Payment Successfully !!!!
        </div>
        <div className="footer text-center text-light rounded">
            <Link to="/customer/home" className="btn btn-secondary mx-5 m-2 mb-3 px-4">Click Here to go home page</Link>
        </div>
    </div>
    )
}
// -----------------------------------------------------------------My Orders-------------------------------------------------------------------

export const MyOrders = () => {
    return(
        <>
        <div className="container-fluid border rounded py-5 shadow text-center ">
        <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
            MY ORDERS 
            <div className="float-end fs-4  text-light my-3">
                <Link to="/customer/home" className="btn btn-outline-light mx-2 px-3">BACK</Link>
            </div>
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
                <th scope="col">Order Time </th>
                <th scope="col">Order Status </th>
                <th scope="col">Delivery Person </th>
                <th scope="col">Delivery Contact </th>
                <th scope="col">Delivery Time </th>
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
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>10/20/20</td>
              </tr>
              <tr>
                <td>Los2657214</td>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Chicken</td>
                <td>Restaurant-1</td>
                <td>299</td>
                <td>2</td>
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>10/20/20</td>
              </tr>
              <tr>
                <td>Los2657214</td>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="100px" width="120px"/></td>
                <td>Pot Biryani</td>
                <td>Chicken</td>
                <td>Restaurant-1</td>
                <td>299</td>
                <td>2</td>
                <td>10/20/20 5:30:45 pm</td>
                <td>Delivered</td>
                <td>deliveryperson1</td>
                <td>8472498</td>
                <td>10/20/20</td>
              </tr>
            </tbody>
          </table>
    </div>
        </>
    )
}