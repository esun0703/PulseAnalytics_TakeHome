import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import ResultDisplay from './ResultDisplay';

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 20,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState();
  // setting numerical values to priorities so that it can be sorted in sort method.
  // we need a way to handle re-rendering based on search;
  useEffect(() => {
    const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values
    const filteredData = filterBy(uniqueData, search, [
      'indicationCategory',
      'affiliation',
      'affiliationPosition',
    ]);
    setResults(filteredData);
  }, [search])
  

  const sortData = () => {
    const priorities = {Low: 1, Medium: 2, High: 3};
    const sortedData = [...results].sort((a, b) => { // need to make a copy state value
      const itemOne = priorities[a.priority];
      const itemTwo = priorities[b.priority];
      return itemTwo - itemOne;
    });

    setResults(sortedData);
  }



  // this is where I would add sortByPriority
  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button style={{margin: "10px 0"}} onClick={sortData}>Sort by Priority</button>
      <ResultDisplay data={results}/>
    </Container>
  )
}

export default Influencers
