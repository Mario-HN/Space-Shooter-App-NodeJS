const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();

const hasError = (errors, path) => {
    if (errors){
        for( let i=0; i<errors.length; i++){
            if (errors[i].path === path) return errors[i];
        }
    }
}
return "";

const isChecked = (curso, areaId) => {
    if(curso && curso.areaId==areaId) return  "Checked";}
return "";

module.exports = {toUpper, toLower, isChecked}