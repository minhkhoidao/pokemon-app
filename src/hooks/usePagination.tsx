import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  totalPage: number;
  offset: number;
}
interface ArrProps {
  firstArr: number[];
  lastArr: number[];
}

const usePagination = (props: PaginationProps) => {
  const { totalPage, offset } = props;
  const navigate = useNavigate();

  const { firstArr, lastArr }: ArrProps = useMemo(() => {
    const newArr = [...Array(totalPage)].map((_, i) => i + 1);

    if (totalPage < 4)
      return {
        firstArr: newArr,
        lastArr: []
      };

    if (totalPage - offset >= 4) {
      return {
        firstArr: newArr.slice(offset - 1, offset + 2),
        lastArr: newArr.slice(totalPage - 1)
      };
    } else {
      return {
        firstArr: newArr.slice(totalPage - 4, totalPage),
        lastArr: []
      };
    }
  }, [totalPage, offset]);

  const isActive = (index: number) => {
    if (index === offset) return 'danger';
  };

  const prev = () => {
    const newPage = Math.max(offset - 1, 1);
    navigate(`?page=${newPage} `);
  };

  const next = () => {
    const newPage = Math.min(offset + 1, totalPage);
    navigate(`?page=${newPage} `);
  };

  const jump = (index: number) => {
    navigate(`?page=${index} `);
  };

  return { firstArr, lastArr, navigate, isActive, prev, next, jump };
};

export default usePagination;
