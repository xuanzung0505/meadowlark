var nonsenses = ['bla bla bla', 'ble ble ble', 'hihihi'];

exports.getNonsense = function(){
    var i = Math.floor(Math.random() * nonsenses.length);
    var randomNonsenses = nonsenses[i]

    return randomNonsenses;
};