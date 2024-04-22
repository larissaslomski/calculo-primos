from flask import Flask

app = Flask(__name__)


@app.route("/primes/<number>")
def find_primes_by_integer(number):
    teste = []
    integer_number = int(number)
    numeros_primos = []
    for numero_atual in range(2, integer_number):
        if is_prime(numero_atual):
            numeros_primos.append(numero_atual)
    teste.append(len(numeros_primos))
    return teste


def is_prime(numero_atual):
    divisor = 1
    primos = 0
    while divisor <= numero_atual:
        if numero_atual % divisor == 0:
            primos += 1
        divisor += 1

    if primos == 2:
        return True
    return False


if __name__ == "__main__":
    app.run(debug=True)