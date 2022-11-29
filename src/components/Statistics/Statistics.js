import PropTypes from 'prop-types';

import {
  StatList,
  StatItem,
  Section,
  StatTitle,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatTitle className="title">{title}</StatTitle>
      <StatList>
        {stats.map(element => (
          <StatItem key={element.id}>
            <StatLabel>{element.label}</StatLabel>
            <StatPercentage>{element.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
