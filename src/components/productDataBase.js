import Item1 from '../images/Hoodie1.jpg'
import Item3 from '../images/Hoodie3.jpg'
import Item4 from '../images/Hoodie4.jpg'
import Item5 from '../images/Hoodie5.jpg'
import Item6 from '../images/Hoodie6.jpg'
import blueHoodie1 from '../images/blueHoodie1.jpg'
import blueHoodie2 from '../images/blueHoodie2.jpg'
import blueHoodie3 from '../images/blueHoodie3.jpg'
import greyHoodie1 from '../images/greyHoodie1.jpg'
import greyHoodie2 from '../images/greyHoodie2.jpg'
import greyHoodie3 from '../images/greyHoodie3.jpg'
import blackHoodie1 from '../images/blackHoodie1.jpg'
import blackHoodie2 from '../images/blackHoodie2.jpg'
import blackHoodie3 from '../images/blackHoodie3.jpg'

export const products =
    [
        {
            id: 1,
            title: 'Hoodie',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 100,
            thumbnails: [blackHoodie1, blackHoodie2, blackHoodie3],
            blueThumbnails: [blueHoodie1, blueHoodie2, blueHoodie3], 
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
            
        },

        {
            id: 2,
            title: 'Adidas',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            thumbnails: [Item1, Item4],
            blueThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3], 
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
            
        },

        {
            id: 3,
            title: 'Volcom',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            thumbnails: [Item3, Item4, Item5],
            blueThumbnails: [blueHoodie1, blueHoodie2, blueHoodie3],
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
            
        },

        {
            id: 4,
            title: 'Fila',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
            thumbnails: [Item4, Item5, Item6],
            blueThumbnails: [blueHoodie1, blueHoodie2, blueHoodie3],
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
            
        },

        {
            id: 5,
            title: 'Element',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
            thumbnails: [Item5, Item6, Item1],
            blueThumbnails: [blueHoodie1, blueHoodie2, blueHoodie3],
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
            
        },

        {
            id: 6,
            title: 'Blues',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
            thumbnails: [Item6, Item1],
            blueThumbnails: [blueHoodie1, blueHoodie2, blueHoodie3],
            greyThumbnails: [greyHoodie1, greyHoodie2, greyHoodie3]
           
        }
    ]

export const getProduct = (id) => {
    return products.find(product => product.id == id);
}