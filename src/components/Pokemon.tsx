import { Spinner } from 'react-bootstrap';
import useQuery from '../hooks/useQuery';
import Pagination from './Pagination';

interface PropsPokemon {
  name: string;
  url: string;
}
const Pokemon = ({ name, url }: PropsPokemon) => {
  const [data, loading, error] = useQuery(`pokemon/${name}`);

  return (
    <div>
      <div>{name}</div>
      <img src={(data as any)?.sprites?.back_default} />
    </div>
  );
};

export default Pokemon;
