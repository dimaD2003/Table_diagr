  /// трнасп безоп числ тур
  
  countries =[
    {
    "Страна":'Албания',
    "Материк":'Евразия',
    "Численность туристов":123000,
    "Безопасность": 15,
    "Транспорт": 1, 
    "Доступность цен" : 2.35,
    "Уровень сервиса" : 6.36,
},
{
  "Страна":'Албания',
  "Материк":'Евразия',
  "Численность туристов":10000,
  "Безопасность": 18,
  "Транспорт": 3, 
  "Доступность цен" : 0.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Нигерия',
  "Материк":'Африка',
  "Численность туристов":200000,
  "Безопасность": 8,
  "Транспорт": 1, 
  "Доступность цен" : 2.35,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Нигерия',
  "Материк":'Африка',
  "Численность туристов":15000,
  "Безопасность": 15,
  "Транспорт": 10, 
  "Доступность цен" : 2.3,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Канада',
  "Материк":'Северная Америка',
  "Численность туристов":200000,
  "Безопасность": 23,
  "Транспорт": 8, 
  "Доступность цен" : 7.6,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Нигерия',
  "Материк":'Африка',
  "Численность туристов":20000,
  "Безопасность": 20,
  "Транспорт": 2, 
  "Доступность цен" : 3.6,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Аргентина',
  "Материк":'Южная Америка',
  "Численность туристов":150000,
  "Безопасность": 15,
  "Транспорт": 4, 
  "Доступность цен" : 5.6,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'ОАЭ',
  "Материк":'Евразия',
  "Численность туристов":500000,
  "Безопасность": 15,
  "Транспорт": 10, 
  "Доступность цен" : 3.6,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'Австралия',
  "Материк":'Австралия',
  "Численность туристов":150000,
  "Безопасность": 2,
  "Транспорт": 10, 
  "Доступность цен" : 8.6,
  "Уровень сервиса" : 6.36,
},
{
  "Страна":'ОАЭ',
  "Материк":'Евразия',
  "Численность туристов":350000,
  "Безопасность": 15,
  "Транспорт": 8, 
  "Доступность цен" : 4.6,
  "Уровень сервиса" : 6.36,
},

{
  "Страна":'Аргентина',
  "Материк":'Южная Америка',
  "Численность туристов":50000,
  "Безопасность": 15,
  "Транспорт": 3, 
  "Доступность цен" : 3.6,
  "Уровень сервиса" : 6.36,
},

{
  "Страна":'Канада',
  "Материк":'Северная Америка',
  "Численность туристов":200000,
  "Безопасность":10,
  "Транспорт": 10, 
  "Доступность цен" : 7.6,
  "Уровень сервиса" : 6.36,
},

{
  "Страна":'Австралия',
  "Материк":'Австралия',
  "Численность туристов":100000,
  "Безопасность": 20,
  "Транспорт": 2, 
  "Доступность цен" : 8.6,
  "Уровень сервиса" : 6.36,
},

   
    
    ]


    let correspond = {
        "Страна": "country",
        "Численность туристов": ["touristsFrom", "touristsTo"],
        "Безопасность":["safetyFrom", "safetyTo"],
        "Транспорт": ["drivetyFrom", "driveTo"],
        "Доступность цен":["PriceFrom", "PriceTo"],
        "Уровень сервиса": ["ServiceFrom", "ServiceTo"],
        
        
      };


let createTable = (data, idTable) => {
    let table = document.getElementById(idTable);
    var tr = document.createElement("tr");
  
    for (key in data[0]) {
      let th = document.createElement("th");
      th.innerHTML = key;
      tr.append(th);
    }
    table.append(tr);
  
    data.forEach((item) => {
      tr = document.createElement("tr");
  
      for (value in item) {
        let td = document.createElement("td");
        td.innerHTML = item[value];
        tr.append(td);
      }
  
      table.append(tr);
    });
  };





  document.addEventListener("DOMContentLoaded", function () {
    createTable(countries, "list");
    setSortSelects(countries[0], document.getElementById("sort"));
  
    let searchButton = document.getElementById("search");
    searchButton.addEventListener("click", function () {
      let dataForm = document.getElementById("filter");
      filterTable(countries, "list", dataForm);
      resetSort("list")
    });
    let clearfilter = document.getElementById("clearfilter");
    clearfilter.addEventListener("click", function (){
      clearFilter()
      resetSort("list")
    })
  
  
    let SortButton = document.getElementById("btnSort");
  SortButton.addEventListener("click", function () {
    let dataForm = document.getElementById("sort");
    sortTable("list",dataForm)
  });


  let First_Set = document.getElementById("fieldFirst");
  First_Set.addEventListener("change", function () {
    changeNextSelect("fieldSecond", First_Set);
  });

  let Sec_Set = document.getElementById("fieldSecond");
  Sec_Set.addEventListener("change", function () {
    changeNextSelect("fieldThird", Sec_Set);
  });

  let clearsort = document.getElementById("Clear_Sort_btnf")
  clearsort.addEventListener("click", function(){
    resetSort("list")
    clearTable("list");
    createTable(countries, "list");
  })
  
  }) 
    




 


    let dataFilter = (dataForm) => {
 
      let dictFilter = {};
      // перебираем все элементы формы с фильтрами
      
      for(let j = 0; j < dataForm.elements.length; j++) {
      // выделяем очередной элемент формы
      let item = dataForm.elements[j];
      
      // получаем значение элемента
      let valInput = item.value;
      // если поле типа text - приводим его значение к нижнему регистру
      if (item.type == "text") {
      valInput = valInput.toLowerCase();
      }else if(item.type == "number"){
        if (valInput !== "") {
          valInput = parseFloat(valInput);
        } else {
          if (item.id.includes("From")) {
            valInput = Number.NEGATIVE_INFINITY;
          } else if (item.id.includes("To")) {
            valInput = Number.POSITIVE_INFINITY;
          }
        }
      }
     dictFilter[item.id] = valInput;
 } 
 return dictFilter;
}

// фильтрация таблицы
let filterTable = (data, idTable, dataForm) =>{
 
  // получаем данные из полей формы
  let datafilter = dataFilter(dataForm);
  
  // выбираем данные соответствующие фильтру и формируем таблицу из них
  let tableFilter = data.filter(item => {
  
  let result = true;
  
  
  for(let key in item) {
  
  let val = item[key];
  
  // текстовые поля проверяем на вхождение
  if (typeof val == 'string') {
    console.log('string');
    
  val = item[key].toLowerCase()
  result &&= val.indexOf(datafilter[correspond[key]]) !== -1
  }
  else if(typeof val == 'number'){
     // Получаем интервал для текущего числового поля
     result &&=
          datafilter[correspond[key][0]] <= val &&
          val <= datafilter[correspond[key][1]];
}
}
return result;
}); 
clearTable(idTable);
createTable(tableFilter, idTable); 
}
  
let clearFilter = () => {
  document.getElementById("filter").reset();
  clearTable("list");
  createTable(countries, "list");
};

function clearTable(idTable) {
  let table = document.getElementById(idTable);
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

let createOption = (str, val) => {
  let item = document.createElement("option");
  item.text = str;
  item.value = val;
  return item;
};


let setSortSelect = (head, sortSelect) => {
  sortSelect.append(createOption("Нет", 0));
  for (let i in head) {
    sortSelect.append(createOption(head[i], Number(i) + 1));
  }
}



let setSortSelects = (data, dataForm) => {
  let head = Object.keys(data);
  //document.write()
  let allSelect = dataForm.getElementsByTagName("select");
  
  for (let j = 0; j < allSelect.length; j++) {
    console.log(allSelect.length);
    
    setSortSelect(head, allSelect[j]);
    if (j != 0) {
      console.log(j);
      
      // Если это не первый select, делаем его неизменяемым
      allSelect[j].setAttribute("disabled", "disabled");
      //allSelect[allSelect.length-1].setAttribute("disabled", "disabled");
    }
  }
};


let changeNextSelect = (nextSelectId, curSelect) => {
 
  let nextSelect = document.getElementById(nextSelectId);
  
  nextSelect.disabled = false;
  
  // в следующем SELECT выводим те же option, что и в текущем
  nextSelect.innerHTML = curSelect.innerHTML;
  
  // удаляем в следующем SELECT уже выбранную в текущем опцию
  // если это не первая опция - отсутствие сортировки
  if (curSelect.value != 0) {
  nextSelect.remove(curSelect.value);
  console.log(nextSelect);
  
  } else {
  nextSelect.disabled = true;
  document.getElementById('fieldThird').disabled = true
  }
 }

  



let createSortArr = (data) => {
  let sortArr = [];
  let sortSelects = data.getElementsByTagName("select");
  for (let i = 0; i < sortSelects.length; i++) {
    // получаем номер выбранной опции
    let keySort = sortSelects[i].value;
    // в случае, если выбрана опция Нет, заканчиваем формировать массив
    if (keySort == 0) {
      break;
    }
    // получаем номер значение флажка для порядка сортировки
    // имя флажка сформировано как имя поля SELECT и слова Desc
    let desc = document.getElementById(sortSelects[i].id + "Desc").checked;
    sortArr.push({ column: keySort - 1, order: desc });
  }
  
  return sortArr;

}

let sortTable = (idTable, data) => {
  // формируем управляющий массив для сортировки
  let sortArr = createSortArr(data);
  // сортировать таблицу не нужно, во всех полях выбрана опция Нет
  if (sortArr.length === 0) {
    return false;
  }
  let table = document.getElementById(idTable);
  // преобразуем строки таблицы в массив
  let rowData = Array.from(table.rows);
  // удаляем элемент с заголовками таблицы
  rowData.shift();

  rowData.sort((first, second) => {
    let First_Checkbox = (document.getElementById('fieldFirstDesc').checked)? -1 : 1
    let Second_Checkbox =(document.getElementById('fieldSecondDesc').checked)? -1 : 1
    let Third_Checkbox =(document.getElementById('fieldThirdDesc').checked)? -1 : 1

    for (let i in sortArr) {
      let key = sortArr[i].column; 
      if(i == 0){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * First_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * First_Checkbox
      }
      else if (i == 1){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * Second_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * Second_Checkbox
      }
      else if (i == 2){
        if (first.cells[key].innerHTML > second.cells[key].innerHTML) return 1 * Third_Checkbox
        else if (first.cells[key].innerHTML < second.cells[key].innerHTML) return -1 * Third_Checkbox
      }
    }//for
  

return 0;
  });
  table.innerHTML = table.rows[0].innerHTML;
  rowData.forEach((item) => {
    
    table.append(item);
  });
};

let resetSort = (tableid) => {
  //document.write(`<h3>${tableid}</h3>`)
  let table = document.getElementById(tableid)
  document.getElementById("sort").reset();
  
  
  //setSortSelects(buildings[0], document.getElementById("sort"));
}


function What_is(data){
  if(data.oy[0].checked ) return 0
  if(data.oy[1].checked ) return 0
  if(data.oy[2].checked ) return 1
  if(data.oy[3].checked ) return 1
  if(data.oy[4].checked ) return 2
  if(data.oy[5].checked ) return 2

}

function createArrGraph(data, key,number) {
  let what = number==0?'Численность туристов':number==1?'Транспорт':'Доступность цен'
  groupObj = d3.group(data, (d) => d[key]);
  
  return Array.from(groupObj, ([labelX, values]) => ({
    labelX,
    values: d3.extent(values, d => d[what])
    
  })); 
     
    
}

const marginX = 50;
const marginY = 50;
const height = 400;
const width = 800;
let svg = d3.select("svg").attr("height", height).attr("width", width);




function drawGraph(data) {

  // значения по оси ОХ
  const keyX = data.ox.value;
  
  // значения по оси ОУ
  const number = What_is(data)
  const isMin = data.oy[0].checked || data.oy[3].checked || data.oy[4].checked
  const isMax = data.oy[1].checked || data.oy[2].checked || data.oy[5].checked

  if (!isMin && !isMax) 
    alert("OY надо выбрать");
  else {
    // создаем массив для построения графика
    const arrGraph = createArrGraph(countries, keyX,number);

    svg.selectAll("*").remove();
    // создаем шкалы преобразования и выводим оси
    const [scX, scY]  = createAxis(arrGraph, isMin, isMax);
    // рисуем графики
    
    if (isMax) {
      // alert('fweomfwe')
      createChart(arrGraph, scX, scY, 1, "green");
    }
    if (isMin) {
      createChart(arrGraph, scX, scY, 0, "red");
    }
  }
}

function createAxis(data, isFirst, isSecond) {
  // в зависимости от выбранных пользователем данных по OY
  // находим интервал значений по оси OY

  let firstRange = d3.extent(data.map((d) => d.values[0]));
  console.log(firstRange);
  
  let secondRange = d3.extent(data.map((d) => d.values[1]));
   //alert(secondRange)
  let min = firstRange[0];
  let max = secondRange[1];

  if (!isFirst && isSecond) {
    min = secondRange[0];
    max = secondRange[1];
  } else if (isFirst && !isSecond) {
    min = firstRange[0];
    max = firstRange[1];
    // alert(`${min}, ${max}`)
  }
  // функция интерполяции значений на оси
  let scaleX = d3
    .scaleBand()
    .domain(data.map((d) => d.labelX))
    .range([0, width - 2 * marginX]);
  let scaleY = d3
    .scaleLinear()
    .domain([min * 0.85, max * 1.1])
    .range([height - 2 * marginY, 0]);
  // создание осей
  let axisX = d3.axisBottom(scaleX);
  // горизонтальная
  let axisY = d3.axisLeft(scaleY);
  // вертикальная
  // отрисовка осей в SVG-элементе
  svg
    .append("g")
    .attr("transform", `translate(${marginX}, ${height - marginY})`)
    .call(axisX)
    .selectAll("text")
    // подписи на оси - наклонные
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", (d) => "rotate(-45)");
  svg
    .append("g")

    .attr("transform", `translate(${marginX}, ${marginY})`)
    .call(axisY);
  return [scaleX, scaleY];
}

function createChart(data, scaleX, scaleY, index, color) {
  const r = 4;
  // чтобы точки не накладывались, сдвинем их по вертикали
  // let ident = index == 0 ? -r / 2 : r / 2;
  // let select_option = d3.select('#select_type').property('value');
  // if(select_option == 1)
    // svg.selectAll(".dot").data(data).enter().append("circle")
    //     .attr("r", r)
    //     .attr("cx", (d) => scaleX(d.labelX) + scaleX.bandwidth() / 2)
    //     .attr("cy", (d) => scaleY(d.values[index]) + ident)
    //     .attr("transform", `translate(${marginX}, ${marginY})`)
    //     .style("fill", color);
  // else
    svg.selectAll(".dot").data(data).enter().append("rect").attr("class", "rect")

        .attr("x", d => scaleX(d.labelX))
        .attr("y", d => scaleY(d.values[index])-marginY)

        .attr("width", scaleX.bandwidth()-5)
        .attr("height", d => height - scaleY(d.values[index]) - marginY)

        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}
function changeState(form, value){
  // alert(form.oy[0].value)
  for(let i=0;i<6;++i){
    
    if(!form.oy[i].value.includes(value)) form.oy[i].checked=false
  }
}