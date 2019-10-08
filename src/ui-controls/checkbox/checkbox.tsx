import React, { Component } from 'react';

import './checkbox.scss';
interface IProps {
    label?: string;
    onChange: (label: string) => void;
}
class Checkbox extends React.Component<IProps> {

    render() {
        const { label, onChange } = this.props;
        return (<div>
            <input type="checkbox" id="checkbox" onChange={() => onChange(label && label.toLowerCase() || "")} />
            <label htmlFor="checkbox">{label}</label></div>
        );
    }
}

export default Checkbox;
