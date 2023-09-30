import PropTypes from 'prop-types';

export function Person({ name, hairColor, eyeColor }) {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired
};