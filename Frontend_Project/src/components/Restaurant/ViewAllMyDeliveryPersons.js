import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewAllMyDeliveryPersons = () => {
  
  const [listOfDeliveryPersons, setListOfDeliveryPersons] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadDeliveryPersons();
  }, []);

  const loadDeliveryPersons = async () => {
    try {
      const result = await fetch("http://localhost:8080/alldeliverypersons");
      const jsonObj = await result.json();
      // console.log(jsonObj);
      setListOfDeliveryPersons(jsonObj);
    } catch (error) {
      console.error("Error loading Delivery Persons:", error);
    }
  };

  const deleteDeliveryPerson = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/deldeliveryperson/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(listOfDeliveryPersons),
      });
      if (response.ok) {
        console.log("Delivery Person deleted successfully");
      } else {
        console.error("Failed to delete delivery person:", response.statusText);
      }

      loadDeliveryPersons();
    } catch (error) {
      console.error("Error deleting delivery person:", error.message);
    }
  };

    return(
        <div class="container border rounded my-5 py-5 shadow text-center ">
        <div class="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
            ALL DELIVERY PERSONS 
            <div class="float-end fs-4  text-light my-3">
                <Link to="/restaurant/home" class="btn btn-outline-light mx-2 px-3">BACK</Link>
            </div>
        </div>
        {listOfDeliveryPersons.length === 0 ? (
          <p>No Food Is Added</p>
        ) : (
        <table class="table">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Phone No </th>
                <th scope="col">Address </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
            {listOfDeliveryPersons.map((deliveryPerson) => (
              <tr>
                <td>{deliveryPerson.firstName}</td>
                <td>{deliveryPerson.lastName}</td>
                <td>{deliveryPerson.emailId}</td>
                <td>{deliveryPerson.phoneNumber}</td>
                <td>{deliveryPerson.street}, {deliveryPerson.city}, {deliveryPerson.pinCode}</td>
                <td>
                    <div class="lg-rg mx-2 ">
                      <button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button>
                    </div>
                </td>
              </tr>
            ))}
              <tr>
                <td>Delivery Person-2</td>
                <td>Delivery Person-2</td>
                <td>deliveryperson2@gmail.com</td>
                <td>8794278</td>
                <td>Street, City, Pincode</td>
                <td>
                    <div class="lg-rg mx-2 ">
                        <a href="viewallresdeliveryper.html"><button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td>Delivery Person-3</td>
                <td>Delivery Person-3</td>
                <td>deliveryperson3@gmail.com</td>
                <td>8794278</td>
                <td>Street, City, Pincode</td>
                <td>
                    <div class="lg-rg mx-2 ">
                        <button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
    </div>
    )
}

export default ViewAllMyDeliveryPersons;