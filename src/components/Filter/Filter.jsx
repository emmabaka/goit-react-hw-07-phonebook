import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterSelector } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
