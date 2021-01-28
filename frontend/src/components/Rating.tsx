import React from 'react';

interface Props {
  value: number;
  text: string;
  color?: string;
}

const Rating: React.FC<Props> = (props: Props) => {
  const { value, text, color } = props;

  const ratingIcon = (ratingValue: number) => {
    if (ratingValue >= 1) {
      return 'fas fa-star';
    }
    if (ratingValue >= 0.5) {
      return 'fas fa-star-half-alt';
    }
    return 'far fa-star';
  };

  return (
    <div className="rating">
      <span>
        <i style={{ color }} className={ratingIcon(value)} />
        <i style={{ color }} className={ratingIcon(value - 1)} />
        <i style={{ color }} className={ratingIcon(value - 2)} />
        <i style={{ color }} className={ratingIcon(value - 3)} />
        <i style={{ color }} className={ratingIcon(value - 4)} />
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
