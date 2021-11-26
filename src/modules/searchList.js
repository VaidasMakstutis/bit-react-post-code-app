import clearHistory from "./clearHistory";

const searchList = () => {
document.querySelector('.history').addEventListener('click', ()=> {
    document.querySelector('ul').innerHTML = '';
    console.log(document.querySelector('ul'));
    console.log('testas');

    if (!document.querySelector('.clear-history')) {
        let button = document.createElement('button');
        button.className = "clear-history btn btn-danger";
        button.textContent = "Valyti istorija";
        document.querySelector('section .card-body').appendChild(button);
    }
    
    clearHistory();
    
    for (let key in localStorage) {
        if (localStorage.getItem(key) !== null) {
            let result = JSON.parse(localStorage.getItem(key));
            console.log(result);
            let li = document.createElement('li');
            li.className = "list-group-item";
            li.textContent = `Adresas: ${result.address}, pašto kodas: ${result.post_code}`;
            document.querySelector('ul').appendChild(li);
        }
    }
    
})

}
export default searchList;