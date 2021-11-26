const clearHistory = () => {
  document.querySelector('.clear-history').addEventListener('click', () => {
    document.querySelector('ul').innerHTML = '';
    localStorage.clear();
  })
}

export default clearHistory;