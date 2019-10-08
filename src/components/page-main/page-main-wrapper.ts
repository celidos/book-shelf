import { connect } from 'react-redux';
import { REQUEST_BOOKS } from '../../actions/actions';
import { getTops } from '../../services/services';
import  PageMain  from './page-main';

const mapStateToProps = (state: {booksReceiver:any, filtersSetter:any}) => {
    let current = state.booksReceiver &&  state.booksReceiver.items;
    let filters = state.filtersSetter && state.filtersSetter.items.filter((item: any) => item.isSelected).map((item:any)=>item.value);
      return {
          data: current,
          filters: filters,
      }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
     onLoadBooks: (filters: any) => {dispatch(getTops(filters))}
   }
}

export const PageMainWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageMain)