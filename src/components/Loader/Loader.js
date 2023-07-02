import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height="80"
      width="1100"
      radius="9"
      color="blue"
      ariaLabel="loading"
      // wrapperStyle
      // wrapperClass
    />
  );
};
export default Loader;
