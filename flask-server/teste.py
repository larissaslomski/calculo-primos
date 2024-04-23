number_by_primes_len = {}

def find_primes_by_integer(number):
    primes_by_integer = []
    integer_number = int(number)
    prime_numbers = []
    if integer_number == 0 or integer_number == 1 or integer_number == 2:
        primes_by_integer.append(0)
    else:
        for current_integer_number in range(3, integer_number, 2):
            if is_prime(current_integer_number):
                prime_numbers.append(current_integer_number)
        primes_by_integer.append(len(prime_numbers) + 1)

    number_by_primes_len.setdefault(integer_number, len(primes_by_integer))
    return primes_by_integer


def is_prime(number):
    divider = 1
    number_divisions = 0
    while divider <= number:
        if number % divider == 0:
            number_divisions += 1
        divider += 1
    if number_divisions == 2:
        return True
    return False

find_primes_by_integer(10)