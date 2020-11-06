import PropTypes from 'prop-types';

const jokeShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
});

export default jokeShape;
