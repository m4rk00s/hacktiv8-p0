// Week 04 - Exercises 01
// Angka Prima

function angkaPrima(angka) {
    // this is a naive solution, forgive me
    if (angka <= 1) { return false; }

    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) { return false; }
    }

    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false