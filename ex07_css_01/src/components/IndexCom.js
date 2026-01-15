import imageFile from "../styles/images/장어.jpg"
import { StyleContentBlock, StyleContentWrap } from "./common/styleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

const products =[
    {id:1, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:2, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:3, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:4, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:5, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:6, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:7, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:8, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
    {id:9, name:"장어 잡이", context : "화려하고 멋있고 아름답고...등등", price : "5000원", 
        url : imageFile },
]

const IndexCom = () => {
    return(<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>상품 제목~</ProductTitle>
                <ProductList>
                    {products.map( pro => (
                        <ProductListBox key={pro.id}>
                            <ProductImg src={pro.url} alt="" />
                            <ProductName>{pro.name}</ProductName>
                            <ProductContext>{pro.context}</ProductContext>
                            <ProductPrice>{pro.price}</ProductPrice>
                        </ProductListBox>
                    ) )}
                </ProductList>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default IndexCom;