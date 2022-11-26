// import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map(element => (
          <li key={element.id}>
            <span>{element.label}</span>
            <span>{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
