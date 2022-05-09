import PropTypes from 'prop-types';

const Subtitle = ({ children }) => (
  <h2 className="text-xl mt-20 mb-10 lg:mb-60 font-regular">{children}</h2>
);

Subtitle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Subtitle;
