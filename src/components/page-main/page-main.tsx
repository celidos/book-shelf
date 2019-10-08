import React, { Component } from 'react';
import ProductList from "../product-list/product-list";
import {IBookForCard} from "src/services/services";
import './page-main.scss';
const deepEqual = require('deep-equal')


interface IProps {
    onLoadBooks: (filters?: any) => void;
    data: IBookForCard[];
    filters: any;
}

const isEqual = (array1: any[], array2: any[]) => {
    return array1.length === array2.length && array1.sort().every(function (value, index) { return value === array2.sort()[index] });
}
class PageMain extends React.Component<IProps> {

    componentDidMount() {
        this.props.onLoadBooks();
    }

    componentDidUpdate(prevProps: IProps) {
        const { filters, onLoadBooks } = this.props;
        if (!isEqual(prevProps.filters, filters)) {
            onLoadBooks(filters);
        }
    }
    render() {
        return <div>
            <ProductList data={this.props.data} />
        </div>
    }
}
export default PageMain;