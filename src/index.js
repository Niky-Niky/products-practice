const BASE_URL =  ' http://localhost:3000'
 const ulCardEl = document.querySelector('#products-list')



 async  function getProdutcts() {
    try{
        const  res = await fetch(`${BASE_URL}/products`)
        const products =  await res.json()
        console.log(products);
        return products
    } catch(error){
console.log(error);
    }
    
}


function makeMarkup (products) {
  return  products.map(({image, name})=>{
        return `    <li>
        <img src="${image}" alt="${name}">
        <p>${name}</p>
        <button type="button ">Додати в кошик</button>
    </li> `
    })
}

getProdutcts().then(produtcts=> {
    const markup = makeMarkup(produtcts)
    console.log(markup);
    ulCardEl.insertAdjacentHTML("beforeend",  ...markup)

})

/* 
3. Додайте обробники подій до кожного товару, щоб при кліку на нього 
відкривалася сторінка з детальною інформацією про товар. 
На цій сторінці ви можете відобразити всю додаткову інформацію 
про товар, таку як опис, ціна, зображення тощо.
4. Для реалізації функціональності додавання товарів до кошика 
використовуйте JavaScript. Додайте кнопку "Додати до кошика" 
на сторінці детальної інформації про товар. При кліку на цю 
кнопку ви можете зберігати вибраний товар у змінній або масиві, 
які представляють кошик. Відображайте вибрані товари кошика разом з 
їхніми назвами та цінами на сторінці кошика. 
5. Додайте форму оформлення замовлення на сторінку кошика. 
Ця форма повинна містити поля для введення інформації про 
замовлення, такої як ім'я, електронна адреса, адреса доставки тощо. 
Додайте кнопку "Оформити замовлення", яка буде відправляти дані з форми на сервер для обробки.
*/