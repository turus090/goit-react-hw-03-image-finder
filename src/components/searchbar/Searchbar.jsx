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
        <button onClick={searchAPI} className={s.searchBtn}>
          <svg
            className={s.icon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M17.5556 3C19.4579 3 21 4.54213 21 6.44444V17.5556C21 19.4579 19.4579 21 17.5556 21H6.44444C4.54213 21 3 19.4579 3 17.5556V6.44444C3 4.54213 4.54213 3 6.44444 3H17.5556Z"
                stroke="#000000"
                strokeWidth="2"
              ></path>{' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5067 7.01392C9.02527 7.01392 7.01367 9.02551 7.01367 11.5069C7.01367 13.9884 9.02527 16 11.5067 16C12.3853 16 13.205 15.7478 13.8973 15.3119L15.1658 16.5803C15.5563 16.9709 16.1895 16.9709 16.58 16.5803C16.9705 16.1898 16.9705 15.5566 16.58 15.1661L15.3116 13.8977C15.7475 13.2053 15.9997 12.3856 15.9997 11.5069C15.9997 9.02551 13.9881 7.01392 11.5067 7.01392ZM9.01367 11.5069C9.01367 10.1301 10.1298 9.01392 11.5067 9.01392C12.8836 9.01392 13.9997 10.1301 13.9997 11.5069C13.9997 12.8838 12.8836 14 11.5067 14C10.1298 14 9.01367 12.8838 9.01367 11.5069Z"
                fill="#000000"
              ></path>{' '}
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

Searchbar.propTypes = {
  updateSearch: propTypes.func,
  searchAPI: propTypes.string
}

export default Searchbar;
