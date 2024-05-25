const btn = document.getElementById('btn');


btn.addEventListener('click', ()=> {
    setTimeout(()=> {
        document.getElementById('text').innerHTML = 'ボタンがクリックされました';
    }, 2000);
})








