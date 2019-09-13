class Storage {
  static get(key: string) {
    return window.localStorage.getItem(key);
  };

  static set(key: string, value: string) {
    return window.localStorage.setItem(key, value);
  };

  static remove(key: string) {
    return window.localStorage.removeItem(key);
  };

  static clear() {
    return window.localStorage.clear();
  };
};

export default Storage;
