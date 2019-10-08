import React, { Component } from 'react';

import { getBestsellersList, getGenres, getTops   } from '../../services/services';

import './page-header.scss';
import Logo from 'src/ui-controls/logo/logo';
import Search from 'src/ui-controls/search/search';

class PageHeader extends Component {
    componentDidMount() {
       //getTops();
        //getTops1();
        getGenres();
    }

    render() {
        return (
            <header className='page-header'>
                <div className='page-header__container'>
                    <div className='page-header__logo'>
                <Logo />
                    </div>
                    <div className="page-header__search">
                        <Search/>
                        
                {/* Search.search
                    FieldSearch.field-search
                    Button.btn
                    Filters.filters
                        Button.filters__btn
                        FilterPopup */}
                    </div>
                </div>
                {/* 
        

                    
        */}
            </header>
        );
    }
}

export default PageHeader;
