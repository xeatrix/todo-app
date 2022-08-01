import React, { useState, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { listItemsReducer } from './listItemsReducer.js';
 
function List({type}) {
  const [listItems, setListItems] = useState(() => {
    const _listItems = JSON.parse(localStorage.getItem('listItems'));
    if (_listItems) {
      return _listItems
    } else {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [reducedListItems, dispatchReducedListItems] = useReducer(listItemsReducer, []);

  useEffect(() => {
    dispatchReducedListItems({
      type: type,
      listItems: listItems
    });
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }, [listItems, type]);

  const toggleFinished = (item) => {
    let _listItems = [...listItems];

    _listItems.forEach((_item, index) => {
      if (_item.id === item.id) {
        _listItems[index].finished = !_item.finished;
      }
    });
    setListItems(_listItems);
  }
  
  const handleItemSubmit = event => {
    event.preventDefault();
    if (!input.trim()) return;

    let _listItems = [...listItems];
    _listItems.push({
      id: uuidv4(),
      description: input,
      finished: false
    });
    setListItems(_listItems);
    setInput('');
  }
  
  const deleteItem = item => {
    let _listItems = [...listItems];
    
    _listItems.forEach((_item, index) => {
      if (_item.id === item.id) {
        _listItems.splice(index, 1);
      }
    });
    setListItems(_listItems);
  }

  return (<>
    <form onSubmit={handleItemSubmit} className='flex items-center space-x-4 mx-4'>
      <input value={input} onChange={e => setInput(e.target.value)} id="input" type='text' autoComplete='off' className='tool my-6 border outline-none px-4 border-slate-400 h-12 w-full rounded-xl' placeholder='What do you have to do?'/>
      <button type='submit' className='shadow-md h-12 w-32 text-white font-medium bg-blue-500 rounded-xl hover:bg-blue-600'>Add</button>
    </form>
    <ul>
      {reducedListItems.map(item => {
        return (
        <li className='flex items-baseline space-x-2 py-4 px-4 hover:bg-slate-50 hover:rounded-xl' key={item.id}>
          <input type='checkbox' className='h-5 w-5 cursor-pointer translate-y-1' checked={item.finished} onChange={() => toggleFinished(item)} />
          <p className={`text-lg break-words whitespace-normal w-[80%]  ${item.finished ? 'line-through' : ''}`}>{item.description}</p>
          <button className='flex-grow flex justify-end'>
            <MdOutlineDeleteOutline className='text-slate-500 text-xl mr-2 hover:text-red-500' onClick={() => deleteItem(item)} />
          </button>
        </li>
        );
      })}
    </ul>
  </>);
}

export default List;