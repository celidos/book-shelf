import React, { Component } from 'react';
import Card from "../card/card";
import './product-list.scss';
import { IBookForCard } from 'src/services/services';

interface IProps {
    data: Array<IBookForCard>;
}
class ProductList extends React.Component<IProps> {

    render() {
        const { data } = this.props;
        return <div>
            <h1 className="products__title">Список книг</h1>
            <ul className="products__list">
                {data && data.map((item : IBookForCard, index:number) => <Card key={index} data={item} />)}
            </ul>
        </div>
    }
}
export default ProductList;