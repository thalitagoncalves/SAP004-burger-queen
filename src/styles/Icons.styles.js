import { withStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';

export const StyledAddIcon = withStyles({
  root: {
    color: '#DC4626'
  },
  label: {
    textTransform: 'capitalize',
  },
})(AddCircle);

export const StyledRemoveIcon = withStyles({
  root: {
    color: '#DC4626'
  },
  label: {
    textTransform: 'capitalize',
  },
})(RemoveCircle);