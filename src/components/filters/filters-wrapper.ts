import { connect } from 'react-redux';
import { getTops, getGenres, chooseGenre } from '../../services/services';
import Filters from './filters';
import { CHOOSE_FILTER } from 'src/actions/actions';

const mapStateToProps = (state: { filtersSetter: { items: any } }) => {
    let current = state.filtersSetter && state.filtersSetter.items;
    return {
        items: current
    }
}

const mapDispatchToProps = (dispatch: Function, state: any) => {
    return {
        onInit: () => dispatch(getGenres()),
        onCheck: (label: string) => Promise.resolve(dispatch(chooseGenre(label))),
       
    }
}


export const FiltersWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters)