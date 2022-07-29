import usePagination from '@/hooks/usePagination';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface PaginProps {
  offset: number;
  totalPage: number;
}
const Pagination = ({ offset, totalPage }: PaginProps) => {
  const { firstArr, lastArr, navigate, isActive, prev, next, jump } = usePagination({
    totalPage,
    offset
  });
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <Button onClick={prev} variant="primary" style={{ marginRight: '5px' }}>
        &laquo;
      </Button>
      {firstArr.map((item: number) => {
        return (
          <Button
            variant={isActive(item)}
            style={{ marginRight: '2px' }}
            key={item}
            onClick={() => jump(item)}>
            {item}
          </Button>
        );
      })}
      {lastArr.length > 0 && <Button>...</Button>}
      {lastArr.map((item: number) => {
        return (
          <Button
            variant={isActive(item)}
            style={{ marginRight: '2px' }}
            key={item}
            onClick={() => jump(item)}>
            {item}
          </Button>
        );
      })}
      <Button onClick={next} variant="primary" style={{ marginLeft: '5px' }}>
        &raquo;
      </Button>
    </div>
  );
};

export default Pagination;
