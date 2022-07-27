import usePagination from '@/hooks/usePagination';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface PaginProps {
  offset: number;
  totalPage: number;
}
const Pagination = ({ offset, totalPage }: PaginProps) => {
  const { previous, nextPage, jump, isActive, firstArray, lastArray } = usePagination({
    totalPage,
    offset
  });

  console.log(totalPage)
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <Button onClick={previous} variant="primary" style={{ marginRight: '5px' }}>
        &laquo;
      </Button>
      {firstArray.map((item) => {
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
      {lastArray.map((item) => {
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
      <Button onClick={nextPage} variant="primary" style={{ marginLeft: '5px' }}>
        &raquo;
      </Button>
    </div>
  );
};

export default Pagination;
