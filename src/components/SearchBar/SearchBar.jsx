import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import actions from '../../store/quizes/actions';

const SearchBar = () => {
  const { filter } = useSelector((state) => state.quizesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeFilter = (e) => {
    const filter = e.target.value;
    dispatch(actions.filterAction(e.target.value));

    if (filter.length > 0) {
      navigate('/select');
    }
  };

  return (
    <>
      <InputField
        sx={{
          backgroundColor: '#ffd60a',
          border: '3px solid #001d3d',
        }}
        placeholder="Search"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};

export default SearchBar;
