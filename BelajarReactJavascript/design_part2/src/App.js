import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Kereta Listrik" category="Lebaran"/>
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
        <img src="pic02.jpg" alt="#"/>
    </div>
  );
}

function CheckDiskon(props) {

  const {isDiscount, discount} = props;

  if (isDiscount == "yes") {
    return (
      <p> Diskon {discount}% off</p>
      );
  }
  else if (isDiscount == "coming") {
    return (
      <p> Akan Ada Discount!</p>
    );
  }
  else {
    return (
      <p> Belum Ada Diskon!</p>
    );
  }
}

function ProdukInfo(props) {

  const {category, name, isDiscount} = props;
  const price = 74_000;
  const benefits = ["Ramah Lingkungan", "Fast Movement", "Cool"];
  const listBenefits = benefits.map((itemBenefit) => 
    <li>{itemBenefit}</li>
  );

  return (
      <div className="Deskripsi">
        <p className="Cate"> {category} </p>
        <h1 className="Tittle"> {name} </h1>
        <p className="Price"> IDR {price}</p>
        <CheckDiskon isDiscount={isDiscount} discount={50}/>
        <p className="Info">
          One of the most recognizeable shoes in the AJ collection, the Air Jordan 3 Retro features
          lightweigth, visible cushioning just like the original from '88. Signature details and
          materials celebrate the game-changing icon.
        </p>
        <ul>
          <li> {listBenefits} </li>
        </ul>
        <a onClick={(e) => TambahTrip (name, e)} href="#"> Join the trip</a>
      </div>
  );
}

function TambahTrip(e) {
  return console.log("Membeli produk " + e);
}

export default App;
