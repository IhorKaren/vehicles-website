import { IoCart } from 'react-icons/io5';

import Badge from '@mui/material/Badge';
import {Theme} from '@mui/material';
interface StyledDishBadgeProps {
  content: number;
}
export const StyledItemBadge: React.FC<StyledDishBadgeProps> = ({ content }: StyledDishBadgeProps): JSX.Element => {
  const badgeStyle = {
    left: 120,
      top: 5,
    '& .MuiBadge-badge': {
      color: 'white',
      fontSize: 8,
      padding: '0 1px',
      right: -6,
      top: 8,
      backgroundColor: '#3b3b36',
      border: (theme: Theme) => `2px solid ${theme.palette.background.paper}`,
    },
  };

  return (
    <Badge badgeContent={content} sx={badgeStyle}>
      <IoCart style={{ fontSize: '24px' }} />
    </Badge>
  );
};
