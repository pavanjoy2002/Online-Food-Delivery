import React, { useEffect, useState } from "react";
import { CategorySlideShimmer } from "../ShimmerEffect/ShimmerEffect";



// -----------------------------------------------------------------------Carousel-------------------------------------------------------------

export const Carousel = () => {

    return(
    <div className="body my-3">
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
                        <img src="https://www.baltana.com/files/wallpapers-2/Food-HD-Pictures-04863.jpg" className="d-block w-100" alt="image-1" height="500" width="400"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                     </div>
                     <div className="carousel-item" data-bs-interval="2000">

                        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="image-2" height="500" width="400"/>
                        <div class="carousel-caption d-none d-md-block text-light">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://th-i.thgim.com/public/incoming/vricut/article65937264.ece/alternates/LANDSCAPE_1200/Spicy%20Venue-apricot%20delight.jpg" className="d-block w-100" alt="image-3" height="500" width="400"/>
                        <div className="carousel-caption d-none d-md-block bg-light rounded-pill mx-5 my-3">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>
        </div>
    </div>
    )
}

// ---------------------------------------------------------------------Category Slide-------------------------------------------------------------

export const CategorySlide = () => {

    const [listOfCategories, setListOfCategories] = useState([]);

    useEffect(() => {
      loadCategories();
    }, []);
  
    const loadCategories = async () => {
      try {
        const result = await fetch("http://localhost:8080/viewcategories");
        const jsonObj = await result.json();
        // console.log(jsonObj);
        setListOfCategories(jsonObj);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    return (
      <>
        <hr className="border border-primary border-1 opacity-75 mx-5 mt-3" />
        <div className="category-slide-container">
          <div className="contain d-flex mx-3">
            {listOfCategories.length === 0 ? (
              <p><CategorySlideShimmer/></p>
            ) : (
              <>
                {listOfCategories.map((category) => (
                  <div
                    className="card text-center border border-0 px-2"
                    style={{ width: "18rem " }}
                  >
                    <img
                      src={category.categoryImg}
                      className="card-img-top categoryimg"
                      alt="..."
                      height="200px"
                      width="180px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category.name}</h5>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {/* <hr className="border border-primary border-1 opacity-75 mx-5 mt-3" /> */}
      </>
    );
  };

// -----------------------------------------------------------------------Search Box-------------------------------------------------------------

// export const SearchBox = ({setFilteredCategories}) => {

//     const [searchText, setSearchText] = useState("");
//     const [listOfCategories, setListOfCategories] = useState([]);
//     const [filteredCategories,setFilteredCategories] = useState([])
  
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//       try {
//         const result = await fetch("http://localhost:8080/viewcategories");
//         const data = await result.json();
//         // console.log(jsonObj);
//         setListOfCategories(data);
  
//       } catch (error) {
//         console.error("Error loading users:", error);
//       }
//     };

//     const handleSearch = () => {
//         const filteredCategories = listOfCategories.filter((category) =>
//             category.name.toLowerCase().includes(searchText.toLowerCase())
//         );
//         if (typeof setFilteredCategories === 'function') {
//             setFilteredCategories(filteredCategories);
//           }
//     };
  
//     return (
//       <>
//         <div className="container search-bar mt-5">
//           <form className="d-flex"
//             onSubmit={(e) => {
//             e.preventDefault();
//             handleSearch();
//           }}>
//             <input
//               className="form-control me-2 px-5 shadow"
//               list="datalistOptions"
//               type="search"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-primary shadow" 
//               type="submit" 
//               >
//               Search
//             </button>
//             {/* <datalist id="datalistOptions">
//                       <option value="Biryani">
//                       <option value="Veg Biryani">
//                       <option value="Pot Biryani">
//                       <option value="Desert">
//                       <option value="Ice cream">
//                   </datalist> */}
//           </form>
//           <div className="res-container">
//             {filteredCategories.map((category) => (
//                 <CategorySlide key={category.name} resInfo={category} />
//              ))}
//             </div>
//         </div>
//         <hr className="border border-dark border-1 opacity-75 mx-5 mt-4" />
//       </>
//     );
//   };