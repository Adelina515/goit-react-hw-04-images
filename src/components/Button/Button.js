import Style from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className={Style.button} onClick={onClick} type="button">
      load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
