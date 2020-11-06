import './App.css';
import React from 'react';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1, 
        "name": "Adi Nugraha Putra",
        "review": "Harganya Murah dan nyaman dinaiki",
        "photo" : "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        "id": 2,
        "name": "Masashi Kishimoto",
        "review" : "cepat kencang dan berkulitas",
        "photo" : "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      {
        "id": 3,
        "name": "Kurokiba Akane",
        "review": "Terdepan dalam masalah kecepatan",
        "photo" : "https://images.pexels.com/photos/4620816/pexels-photo-4620816.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
    ];
    const listReview = users.map((itemReview) => 
      <div key={itemReview.id} className="Item">
        <img src={itemReview.photo}/>
          <div className="User">
            <h3>{itemReview.name}</h3>
              <p>{itemReview.review}</p>
          </div>
    </div>
    );
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
  </div> )
  }
  
  export default Reviews;
