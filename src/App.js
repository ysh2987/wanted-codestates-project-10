import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Search from './components/Search';
import Title from './components/Title';
import fetchSearchKeword from './store/reducers/searchThunk';

function App() {
  const { data, error, isLoading } = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchKeword('종양'));
  }, []);
  console.log(data, error, isLoading);
  return (
    <StyledWrap>
      <Title />
      <Search />
    </StyledWrap>
  );
}

export default App;

const StyledWrap = styled.main`
  height: auto;
  min-height: 100vh;
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
