import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface PaginProps {
  offset: number;
  totalPage?: number;
}
const Pagination = ({ offset, totalPage }: PaginProps) => {
  const newArr = [...Array(5)].map((_, i) => i + 1);
  const navigate = useNavigate();
  const isActive = (index: number) => {
    if (index === offset) {
      return 'danger';
    }
  };

  const jump = (index: number) => {
    navigate(`?page=${index}`);
  };
  const nextPage = () => {
    const newPage = Math.min(offset + 1, 5);
    navigate(`?page=${newPage}`);
  };
  const previous = () => {
    const newPage = Math.max(offset - 1, 1);
    navigate(`?page=${newPage}`);
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <Button onClick={previous} variant="primary" style={{ marginRight: '5px' }}>
        &laquo;
      </Button>
      {newArr.map((item) => {
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
