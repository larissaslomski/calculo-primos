class PrimesCalculatorService:
    def __init__(self, number_by_primes_len):
        self.number_by_primes_len = number_by_primes_len

    def find_primes_by_integer(self, integer):
        primes_by_integer = 0

        if integer in self.number_by_primes_len.keys():
            return [self.number_by_primes_len[integer]]

        if integer == 0 or integer == 1 or integer == 2:
            primes_by_integer = 0
        else:
            primes_by_integer += 1
            for current_input_number in range(3, integer, 2):
                if self.is_prime(current_input_number):
                    primes_by_integer += 1

        self.number_by_primes_len.setdefault(integer, primes_by_integer)
        return [primes_by_integer]

    def is_prime(self, number):
        divider = 1
        number_divisions = 0
        while divider <= number:
            if number % divider == 0:
                number_divisions += 1
            divider += 1
        if number_divisions == 2:
            return True
        return False

