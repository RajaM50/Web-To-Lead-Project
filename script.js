function beforesubmit() {
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log('inputdate.value', inputdate.value);
    // the value of inputdate is in String, but to use it in salesforce we have to convert
    // the String to Date i.e user's locale Date.

    let formattedDate = new Date(input.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
}