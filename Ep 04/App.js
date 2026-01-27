import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlUPhdYRLORg_Su_UWfJ26H2T8VFPVx132g&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        data: {
            name,
            cuisines,
            avgRating,
            costForTwo,
            cloudinaryImageId,
        },
        sla: { deliveryTime }
    } = resData;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
              alt="res-logo"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100} for two</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const resList = [
  {
    data: {
      id: "402599",
      name: "Haldiram's Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/904d4c36-3aca-404a-a236-21c61d669f11_402599.JPG",
      cuisines: ["North Indian", "Chaat", "Chinese"],
      avgRating: 4.2,
      costForTwo: 40000
    },
    sla: { deliveryTime: 33 }
  },
  {
    data: {
      id: "123456",
      name: "Mehfil",
      cloudinaryImageId: "bk26jkkqpg55veii0aj9",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.4,
      costForTwo: 35000
    },
    sla: { deliveryTime: 28 }
  },
  {
    data: {
      id: "789012",
      name: "Paradise Biryani",
      cloudinaryImageId: "wjzaz1c6bnznukvqlq5q",
      cuisines: ["Biryani", "Kebabs"],
      avgRating: 4.1,
      costForTwo: 45000
    },
    sla: { deliveryTime: 30 }
  },
  {
    data: {
      id: "345678",
      name: "Burger King",
      cloudinaryImageId: "deaxbsuvngs4xpifoisn",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.0,
      costForTwo: 30000
    },
    sla: { deliveryTime: 25 }
  },
  {
    data: {
      id: "901234",
      name: "Domino's Pizza",
      cloudinaryImageId: "313774ada0dc4f878df143b7d7a095f0",
      cuisines: ["Pizza", "Italian"],
      avgRating: 4.3,
      costForTwo: 40000
    },
    sla: { deliveryTime: 22 }
  },
  {
    data: {
      id: "567890",
      name: "KFC",
      cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
      cuisines: ["Fried Chicken", "Fast Food"],
      avgRating: 4.1,
      costForTwo: 35000
    },
    sla: { deliveryTime: 24 }
  },
  {
    data: {
      id: "246810",
      name: "Subway",
      cloudinaryImageId: "91ea8b0b364d7806c33cca233ae7c2b7",
      cuisines: ["Healthy Food", "Sandwiches"],
      avgRating: 4.0,
      costForTwo: 25000
    },
    sla: { deliveryTime: 20 }
  },
  {
    data: {
      id: "135791",
      name: "Pizza Hut",
      cloudinaryImageId: "0e3a3759e96908950541febe9e218cb4",
      cuisines: ["Pizza", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 45000
    },
    sla: { deliveryTime: 26 }
  },
  {
    data: {
      id: "112233",
      name: "Barbeque Nation",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/5976cb97-2d12-45d3-b5a3-af7348277889_297010 (1).jpg",
      cuisines: ["BBQ", "North Indian"],
      avgRating: 4.5,
      costForTwo: 60000
    },
    sla: { deliveryTime: 35 }
  },
  {
    data: {
      id: "445566",
      name: "Cream Stone",
      cloudinaryImageId: "r5ayymu2bfkse9yt3w3b",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      costForTwo: 30000
    },
    sla: { deliveryTime: 18 }
  }
];



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);

// not using keys <<<<< index as keys <<<<< unique ids

