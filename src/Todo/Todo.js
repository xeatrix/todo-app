import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import List from './List';
import NoPage from '../NoPage';

function Todo() {
  return (<div className='max-w-2xl mx-auto'>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<List type="all" />} />
        <Route path="active" element={<List type="active" />} />
        <Route path="completed" element={<List type="completed" />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </div>);
}

export default Todo;