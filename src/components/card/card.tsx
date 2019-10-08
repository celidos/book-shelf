import React, { Component } from 'react';
import { IOverviewList, IBook } from "types/overview";
import "./card.scss";

interface IProps {
    data: IBook;
}
class Card extends React.Component<IProps> {

    render() {
        const { title, description, book_image, contributor, publisher } = this.props.data;
        return <div className="card card__wrapper">
            <img className="card card__img" src={book_image} alt={title} width={200}/>
            <div className="card card__content">
            <div>{title}</div>
            <div>{contributor}</div>
            <div>{publisher}</div>          
            
            <div>{description}</div>
</div>


        </div>
    }
}
export default Card;