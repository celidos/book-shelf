import React, { Component } from 'react';

import './filters.scss';

import Checkbox from 'src/ui-controls/checkbox/checkbox';
interface IProps {
    items: { value: string, isSelected: boolean }[];
    onInit: () => void;
    onCheck: (label: string) => Promise<void>;
}
interface IState {
}
class Filters extends React.Component<IProps, IState> {
    componentDidMount() {
        this.props.onInit();
    }

    render() {
        const { items, onCheck } = this.props;
        return (
            <div className="filters">
                {
                    items && items.map(item => 
                    <Checkbox 
                    onChange={onCheck} label={item && item.value} />)
                }
            </div>
        );
    }
}

export default Filters;
