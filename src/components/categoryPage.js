import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { products } from './productDataBase'

 class CategoryPage extends Component{
    render(){
        let itemList = products.map(item=>{
            return(
                <div className="card hoverable responsive-img" key={item.id}>
                        <div className="card-image">
                            <Link to={{
                                pathname: "./itemPage/" + item.id
                            }}><img src={item.thumbnails[0]} alt={item.title} /></Link>
                            <span className="card-title">{item.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box center">
                    {itemList}
                </div>
            </div>
        )
    }
}

export default CategoryPage