import { useState } from 'react';
import Style from 'components/Searchbar/Searchbar.module.css';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
const Searchbar = ({ onSubmit }) => {
  const [searchJmg, setSearchJmg] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchJmg(inputValue.trim());
    onSubmit(searchJmg);
    e.target.reset();
  };

  return (
    <header className={Style.searchbar}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <button type="submit" className={Style.button}>
          <IoMdSearch values={{ style: { size: '200px' } }} />
          <span className={Style.buttonLabel}>Search</span>
        </button>

        <input
          className={Style.input}
          type="text"
          name="searchJmg"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
