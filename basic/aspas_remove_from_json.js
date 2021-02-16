var data = `"{"label":"AE","input_name":"ae"}"`;

//removar aspas simples do inicio e do fim
console.log(data.replace(/^"|"$/g, ''))


//remover todas as aspas simples
console.log(data.replace(/['"]+/g, ''))