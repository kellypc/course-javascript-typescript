function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth();
  const mes = data.getFullYear();
  const mes = data.getHours();
  const mes = data.getMinutes();
  const mes = data.getSeconds();
}


const data = Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);