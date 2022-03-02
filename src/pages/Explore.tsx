import CardList from 'components/CardList';
import Header from 'layouts/Header';
import Search from 'components/Search';

const Explore = () => {
  return (
    <div id="explore">
      <Header />
      <Search />
      <div id="list-container">
        <CardList />
      </div>
    </div>
  );
};

export default Explore;
