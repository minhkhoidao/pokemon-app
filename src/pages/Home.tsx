import Pagination from '@/components/Pagination';
import Pokemon from '@/components/Pokemon';
import useQuery from '@/hooks/useQuery';
import React, { useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const [limit] = useState(30);
  const { search } = useLocation();

  const offset = useMemo(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    return Number(page);
  }, [search]);

  const [data, loading, error] = useQuery(`pokemon?limit=${limit}&offset=${offset}`);
  const { results, count } = data;
  const totalPage = useMemo(() => {
    if (!count) return;
    return Math.ceil(count / limit);
  }, [count]);
  return (
    <>
      <h1>List Pokemon</h1>
      <Row>
        {results?.map((item: any) => {
          return (
            <Col key={item.name}>
              <Pokemon {...item} />
            </Col>
          );
        })}
      </Row>
      <Pagination offset={offset} totalPage={totalPage} />
    </>
  );
};

export default Home;
