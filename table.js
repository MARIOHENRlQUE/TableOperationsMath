
//Listenig inputEvent´s table
const inputNumber = () =>{
    const inputNumberDom = (document.querySelector("#inputNumber").addEventListener("change", x =>{
        const inputDom = parseInt(document.querySelector("#inputNumber").value);
        createTable(inputDom)
}));
}
//Creating loop for generete table
const createTable = (inputNumberDom) => {
    const inputNumber = parseInt(inputNumberDom);
    const tabuada = document.querySelector("#tabuada tbody");
    tabuada.innerHTML = "";
    for(let i=0;i<=10;i++){
        let template = `  <tr>
                                <td>${inputNumberDom}</td>
                                <td>x</td>
                                <td>${i}</td>
                                <td>=</td>
                                <td>${(inputNumberDom * i)}</td>
                            </tr>`;
        let tr = document.createElement("tr");
        tr.innerHTML = template;
        tabuada.append(tr);
    }
}
inputNumber();