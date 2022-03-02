import Banner from 'components/Banner';
import Button from './Button';
import { Container } from './styles';
import List from './List';
import Suspense from 'components/base/Suspense';

const Home = () => {
  return (
    <Suspense>
      <Container>
        {/* SECTION: Banner */}
        <Banner />

        {/* SECTION: button */}
        <Suspense>
          <Button />
        </Suspense>

        {/* SECTION: List */}
        <Suspense>
          <List />
        </Suspense>
      </Container>
    </Suspense>
  );
};

export default Home;
