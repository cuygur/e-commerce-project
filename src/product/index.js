import React from 'react';

const Product = () => {
    const [isLiked, setIsLiked] = React.useState("false")
    const textColor = isLiked? "blue": "black";
    console.log(isLiked)
    const handleLikeClick = () => {
        setIsLiked("true")
    }
    return (
        <>
            <h2>Name of the prodcut</h2>
            <img src= "#"/>
            <p>Description:</p>
            <p>Instock products</p>
            <p>number of likes</p>
            <button onClick ={handleLikeClick} style={{color: {textColor}}}>Like!</button>
            <button>Add to Cart</button>
        </>
    )
}
export default Product