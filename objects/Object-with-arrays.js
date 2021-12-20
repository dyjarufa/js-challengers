const json = {
  errors: [
    { Invalid_library_selected: "FOO" },
    { Invalid_java_version_selected: 12}
  ]
};

const {
  errors
} = json;


console.log(errors);

errors.map(error => {
  console.log(error);
})

var msg = "";

errors.forEach((obj) => {
    for(var key in obj){
        msg += key + ": " + obj[key] + "\n";
    }
})
console.log(msg);



for (let [key, value] of Object.entries(errors)) {
  console.log(key, value);
}

