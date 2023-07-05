import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.styles.jsx"
import { Component } from "react"
import { useNavigate } from "react-router-dom"

const DirectoryItem = ({category})=>{
    const {imageUrl, route, title} = category
    const navigate = useNavigate();

    function onNavigateHandler(){
        console.log(route)
        return navigate(route)
    }

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            {/* <BackgroundImage style={{
                backgroundImage: `url(${category.imageUrl})`
                }}/> */}
            <BackgroundImage imageUrl = {imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
      )
}

export default DirectoryItem
    