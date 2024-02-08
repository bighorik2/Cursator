import './index.scss';

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Routing } from 'pages';
import { withProviders } from './providers';

const App = () => {

  return <>
    <Header />
    <Routing />
    <Footer />
  </>;
}


export default withProviders(App) 