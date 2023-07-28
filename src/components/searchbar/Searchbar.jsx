import propTypes from 'prop-types'
import s from './searchbar.module.css';

const Searchbar = ({updateSearch, searchAPI}) => {
  return (
    <header className={s.header}>
      <div className={s.searchPanel}>
        <input
          className={s.searchInput}
          placeholder="entry text"
          onChange={e => {
            updateSearch(e.target.value);
          }}
        />
      </div>
    </header>
  );
};

Searchbar.propTypes = {
  updateSearch: propTypes.func,
  searchAPI: propTypes.func
}

export default Searchbar;
