import Button from './button';
import { compose } from 'react-compose';

export default compose({}, ({title, children}) => ({ title: (title || children).toUpperCase() }))(Button);
