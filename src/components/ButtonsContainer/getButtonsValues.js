function getButtonsValues(btnsCount) {
    const btnValues = [];
    let i = 0;
    do {
        btnValues.push(i)
        i +=1;
    } while(i <= (btnsCount))
    return btnValues;
}

export default getButtonsValues