/* 
  basic design of the app
 ---navbar (logo , (home, about us , contact us , cart))
 ---body (searchbar(for food items) , cards(of food))
 ---footer(links and all that stuff)

*/
import "./style.css";

const Logo = () =>(
  <img 
    className = "logo"
    alt = "logo"
    src = "https://logos.flamingtext.com/Name-Logos/Ziggy-design-fluffy-name.png"
  />
)
const Navbar = () =>{
  return(
    <div className = "Header">
      <Logo />
      <div className = "nav-items">
          <ul >
            <li>Home</li>
            <li>About us</li>
            <li>contacts</li>
            <li>cart</li>
          </ul>
      </div>
    </div>
  )
};

const restaurantList = [
     {
      "id": "37969",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Orion mall",
      "areaName": "Panvel",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "37969",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4600
      },
      "parentId": "166",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "48 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-03 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
  },

];


const RestaurantCard = () =>{
  return(
    <div className = "restaurant-list">
        <img 
        src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurantList[0].cloudinaryImageId}
        />
        <h2>{restaurantList[0].name}</h2>
        <h2>{restaurantList[0].locality}</h2>
        <h2>{restaurantList[0].cuisines.join(",")}</h2>
    </div>
  )
}

const Body = () =>{
    return(
      <div className="restaurant-card">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
      
    )
}

const Footer = () =>{
    return <h3>footer</h3>
}

function App() {
  return(
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
