import { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer />
    </Fragment>
  );
}

export default App;
