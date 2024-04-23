from flask import Flask
from service import PrimesCalculatorService

app = Flask(__name__)

number_by_primes_len = {}
service = PrimesCalculatorService(number_by_primes_len)

@app.route("/primes/<number>")
def find_primes_by_number(number):
    return service.find_primes_by_integer(int(number))


@app.route("/primes/historic")
def get_historic():
    return number_by_primes_len


if __name__ == "__main__":
    app.run(debug=True)