const Subtitle = ({ children }) => (
  <h2 className="text-xl mt-20 mb-10 lg:mb-60 font-regular">{children}</h2>
);

// To simulate behavior of prop-types
Subtitle.propTypes = {
  children: () => {},
};

export default Subtitle;
