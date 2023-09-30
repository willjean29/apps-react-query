import PropTypes from 'prop-types';

export function Species({ name, language, averageLifespan }) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}

Species.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  averageLifespan: PropTypes.number.isRequired
};