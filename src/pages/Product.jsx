import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({padding: "10px",flexDirection: "column"})};    
`
const ImgContainer = styled.div`
    flex : 1;
    
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
`
const InfoContainer = styled.div`
    flex : 1;
    padding: 0 50px;
    ${mobile({padding: "0px 10px"})};
`

const Title = styled.h2`
    font-weight : 100;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width: "100%"})};
`

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    background-color : ${(props)=>props.color};
    border-radius : 50%;
    margin : 0px 5px;
    cursor : pointer;
`

const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;
`   

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`

    width : 30px;
    height: 30px;
    border-radius : 10px;
    border : 1px solid teal;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 0px 5px;
`
const Button = styled.button`

    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Color
                        </FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>

                    <Filter>
                        <FilterTitle>
                            Size
                        </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove></Remove>
                        <Amount>1</Amount>
                        <Add></Add>
                    </AmountContainer>
                    <Button>
                        ADD TO CART
                    </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product