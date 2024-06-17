import React from "react";

const AssignDeliveryPerson = () =>{
    return(
        <>
        <div className="container border rounded my-5 py-5 shadow text-center ">
            <form className="px-5">
                <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
                    ASSIGN DELIVERY PERSON 
                </div>

                <div className="mb-3">
                    <label for="orderId" className="form-label">Order ID address</label>
                    <input type="email" className="form-control" id="orderId" placeholder="Enter Order Id" aria-describedby="textHelp"/>
                </div>
                <div className="mb-3">
                    <label for="orderId" className="form-label">Delivery Person</label>
                    <select className="form-select form-select-md mb-3" aria-label="Large select example">
                        <option selected>Select Delivery Person</option>
                        <option value="1">deliveryperson1</option>
                        <option value="2">deliveryperson2</option>
                      </select>
                </div>
                <div className="lg-rg mx-2 mt-5">
                    <a href="assigndeliveryper.html"><button type="button" className="btn btn-outline-primary mx-2 px-3">ASSIGN</button></a>
                    <a href="viewallrestaurantorders.html"><button type="button" className="btn btn-outline-danger mx-2 px-4">BACK</button></a>
                </div>
            </form>
        </div>
        </>
    )
}

export default AssignDeliveryPerson;