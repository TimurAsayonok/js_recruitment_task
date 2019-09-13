import Storage from '../storage/storage';
// interfaces
import { NewsType } from '../../interfaces/news';

const READ_LATER_KEY = 'READ_LATER_KEY';

const getAllReadLaterNews = () => {
  const items = Storage.get(READ_LATER_KEY);
  if (items === null) return [];
  try {
    const itemsParsed = JSON.parse(items);
    return itemsParsed;
  } catch (err) {
    return [];
  }
};

const addItemToStorage = (newItem: NewsType) => {
  if (!newItem.id) {
    return false;
  }
  const savedItems = getAllReadLaterNews();
  // if we have same item we will return false
  if (savedItems.some((item: NewsType) => item.id === newItem.id)) {
    return false;
  }
  // else we add new item to storage
  savedItems.push(newItem);
  Storage.set(READ_LATER_KEY, JSON.stringify(savedItems));
  return true;
};

const removeItemFromStorage = (itemId: string) => {
  if (!itemId) {
    return false;
  }
  const savedItems = getAllReadLaterNews();
  // filter saved items
  const newItems = savedItems.filter((item: NewsType) => item.id !== itemId);
  // update storage
  Storage.set(READ_LATER_KEY, JSON.stringify(newItems));
  return true;
};

export {
  getAllReadLaterNews,
  addItemToStorage,
  removeItemFromStorage
};
