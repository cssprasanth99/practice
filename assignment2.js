function isPrime(N) {
    for (let i = 1; i < N / 2; i++) {
        if (N % i !== 0) {
            isPrime = false;
            console.log(isPrime);
        }
    }

    if (isPrime === true) {
        console.log(`${N} is a prime number`);
    } else {
        console.log(`${N} is a not prime number`);
    }
}
isPrime(7);