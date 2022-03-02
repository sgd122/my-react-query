import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { Container } from './styles';
import Create from 'pages/Create';
import Explore from 'pages/Explore';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import Home from 'pages/Home';
import Product from 'pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/product/:productId" element={<Product />} />
        </ReactRoutes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default Routes;
