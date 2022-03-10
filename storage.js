const loadlocalSession = () => {
    const inputId = document.getElementById('input-id');
    const Id = inputId.value;
    const inputValues = document.getElementById('input-values');
    const values = inputValues.value;

    //
    if (Id, values) {
        localStorage.setItem(Id, values);
    }
    // clear data
    inputId.value = '';
    inputValues.value = '';
}