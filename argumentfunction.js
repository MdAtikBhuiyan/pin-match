function getFullName(firstName,lastName){
    let fullName = ' ';
    console.log(arguments);
    for(let i=0; i<arguments.length; i++){
        const name = arguments[i];
        fullName = fullName + " " + name;
    }
    return fullName;
}
const name = getFullName('hanif',"sonket","paribahan","jonodorodi","bokta");
console.log(name);