import { SpinnerWrapper } from './Loader.styled';
import { CircularProgress } from '@mui/material';

const Loader = () => (
  <SpinnerWrapper>
    <CircularProgress />       
  </SpinnerWrapper>
);

export default Loader;


