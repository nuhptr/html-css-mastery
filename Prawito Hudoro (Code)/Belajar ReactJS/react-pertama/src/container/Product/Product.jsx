import React, { Component, Fragment } from 'react';
import "./Product.css"

class Product extends Component {
    state = {
        order: 4,
        name:"Adi Nugraha Putra"
    }

    handlePlus= () => {
        this.setState({
            order: this.state.order + 1
        })
    }
    
    handleMinus = () => {
        if (this.state.order > 0) {            
            this.setState({
                order: this.state.order - 1
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://michaelbliss92.files.wordpress.com/2017/01/fire-rooster-20171.jpg" alt="logo_ayam"/>
                    </div>
                    <div className="troley">
                        <img src="https://i.pinimg.com/originals/4b/a7/d8/4ba7d8d3c62e961494a50de2f61b2cc8.jpg" alt="troley" />
                        <div className="count">{this.state.order}</div>
                    </div>
            </div>
            <div className="card">
                <div className="img-thum-prod">
                    <img
                        src="https://cdn1-production-images-kly.akamaized.net/mFauHKVhQxZ6i_JRLqSI1OqVhVw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3195924/original/010340200_1596205956-Ilustrasi_ayam_1.jpg"
                        alt="product_image" />
                </div>
                    <p className="product-tittle"> Daging Ayam Berbumbu</p>
                    <p className="product-price">Rp. 34.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
            </div>
            </Fragment>
        )
    }
}

export default Product