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

// import React from 'react';
// import { TextField } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../store/quizes/actions';

// const SearchBar = () => {
//   const { filter } = useSelector((state) => state.quizesReducer);
//   const dispatch = useDispatch();

//   const handleChangeFilter = (e) => {
//     if (typeof actions === 'object' && typeof actions.filterAction === 'function') {
//       console.log('Dispatching actions');
//       dispatch(actions.filterAction(e.target.value));
//     } else {
//       console.error('actions is not a valid object:', actions);
//     }
//   };

//   return (
//     <>
//       <TextField
//         placeholder="Filter quizzes"
//         value={filter}
//         onChange={handleChangeFilter}
//       />
//     </>
//   );
// };

// export default SearchBar;

// import React from 'react';
// import { TextField } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../store/quizes/actions';

// const SearchBar = () => {
//   const { filter } = useSelector((state) => state.quizesReducer);
//   const dispatch = useDispatch();

//   const handleChangeFilter = (e) => {
//     dispatch(actions.filterAction(e.target.value));
//   };

//   return (
//     <>
//       <TextField
//         placeholder='Filter quizzes'
//         value={filter}
//         onChange={handleChangeFilter}
//       />
//     </>
//   );
// };

// export default SearchBar;

// import React from 'react';
// import { TextField } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import actions from '../../store/quizes/actions';

// const SearchBar = () => {
//   const dispatch = useDispatch();

//   const handleChangeFilter = (event) => {
//     const { value } = event.target;
//     dispatch(quizesActions.filterAction(value)); // Correct usage
//   };

//   return (
//     <TextField
//       placeholder="Filter quizzes"
//       value={filter}
//       onChange={handleChangeFilter}
//     />
//   );
// };

// export default SearchBar;
