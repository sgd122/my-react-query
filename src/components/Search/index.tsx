import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from 'components/base/TextInput';

const Search = () => {
  return (
    <TextInput
      placeholder="Explore NFTs"
      icon={<AiOutlineSearch size="30" color="rgba(48,118,234,1)" />}
    />
  );
};

export default Search;
