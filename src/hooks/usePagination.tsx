import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  totalPage: number;
  offset: number;
}
interface ArrProps {
  firstArray: number[];
  lastArray: number[];
}
const usePagination = ({ totalPage, offset }: PaginationProps) => {
  const navigate = useNavigate();
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
  const isActive = (index: number) => {
    if (index === offset) return 'danger';
  };
  const { firstArray, lastArray }: ArrProps = useMemo(() => {
    const newArr = [...Array(totalPage).map((_, i) => i + 1)];
    if (totalPage <= 4) {
      return {
        firstArray: newArr,
        lastArray: []
      };
    }
    if (totalPage - offset >= 3) {
      return {
        firstArray: newArr.slice(offset - 1, offset + 2),
        lastArray: newArr.slice(totalPage - 1)
      };
    } else {
      return {
        firstArray: newArr.slice(totalPage - 4, totalPage),
        lastArray: []
      };
    }
  }, [totalPage, offset]);
  return { firstArray, lastArray, previous, nextPage, jump, isActive };
};

export default usePagination;
