import React, { Component } from 'react';
import { getProduct } from './productDataBase';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

const availableSizes = ['XL', 'L', 'M', 'S', 'XS']; // might be moved to each product if desired

class itemPage extends Component {
    constructor(props) {
        super(props);
        const product = getProduct(props.match.params.productId);
        this.state = {
            product: product,
            mainImgSrc: product.thumbnails[0],
            thumbnails: product.thumbnails,
            selectedSize: availableSizes[0],
            selectedColor: 'black', // for lack of better structure atm
            cartImgSrc: product.thumbnails[0]
        }
    }

    handleClick = (cartId, cartImgSrc) => {
        this.props.addToCart(cartId, cartImgSrc);
    }

    changeImg = (mouseClickEvent) => {
        const clickedThumbnail = mouseClickEvent.target;
        this.setState({
            mainImgSrc: clickedThumbnail.src
        });
    }

    changeColorBlack = () => {
        this.setState(state => ({
            thumbnails: state.product.thumbnails,
            mainImgSrc: state.product.thumbnails[0],
            selectedColor: 'black',
            cartImgSrc: state.product.thumbnails[0]
        }))
    }

    changeColorBlue = () => {
        this.setState(state => ({
            thumbnails: state.product.blueThumbnails,
            mainImgSrc: state.product.blueThumbnails[0],
            selectedColor: 'blue',
            cartImgSrc: state.product.blueThumbnails[0]
        }));
    }

    changeColorGrey = () => {
        this.setState(state => ({
            thumbnails: state.product.greyThumbnails,
            mainImgSrc: state.product.greyThumbnails[0],
            selectedColor: 'gray',
            cartImgSrc: state.product.greyThumbnails[0]
        }));
    }

    changeSize = (e) => {
        this.setState({
            selectedSize: e.target.innerHTML
        });
    }

    render() {
        const product = this.state.product;

        const thumbnails = this.state.thumbnails?.map((thumbnailImg) =>
            <div className="outerThumb">
                <img className="responsive-img thumbnail-img hoverable" onClick={this.changeImg} src={thumbnailImg} alt="" />
            </div>
        )

        return (
            <div className="product-div">
                <div className="product-thumbnails">
                    {thumbnails}
                </div>
                <div className="product-img-div">
                    <img className="product-img" src={this.state.mainImgSrc} alt={product.title} />
                </div>
                <div className="desc-opt">
                    <div className="product-desc">
                        <span className="title">{product.title}</span>
                        <p>{product.desc}</p>
                        <p><b>Price: {product.price}$</b></p>
                    </div>
                    <div className="color-options">
                        <div className="color-box black hoverable" onClick={this.changeColorBlack}></div>
                        <div className="color-box grey lighten-3 hoverable" onClick={this.changeColorGrey}></div>
                        <div className="color-box light-blue darken-4 hoverable" onClick={this.changeColorBlue}></div>
                    </div>
                    <div id="size-options">
                        {
                            availableSizes.map(size => {
                                return <div className={`size-option ${size == this.state.selectedSize ? 'selected-size' : ''}`} onClick={this.changeSize}>{size}</div>
                            })
                        }
                    </div>
                    <button to="/" className="waves-effect waves-light btn-large cart-button" onClick={() => {
                        let cartId = {
                            productId: product.id,
                            size: this.state.selectedSize,
                            color: this.state.selectedColor
                        };
                        this.handleClick(cartId, this.state.cartImgSrc)
                    }}><i className="material-icons">shopping_cart</i></button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        items: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cartId, cartImgSrc) => { dispatch(addToCart(cartId, cartImgSrc)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemPage)