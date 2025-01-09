"""
Example of TDD for the round() function.
This file contains:
1. A wrapper function my_round()
2. Tests (via pytest)
"""

# --------------------------------
# PRODUCTION CODE
# --------------------------------
def my_round(number: float, ndigits: int | None = None) -> float:
    """
    A simple wrapper around Python's built-in round() function.
    Returns the rounded value of the given number.
    """
    return round(number, ndigits)

# --------------------------------
# TESTS (pytest)
# --------------------------------
def test_my_round_no_decimals():
    """
    Test that my_round() correctly handles rounding
    when there are no decimal places.
    """
    assert my_round(5) == 5

def test_my_round_with_decimals():
    """
    Test that my_round() correctly rounds float values
    to the nearest integer when ndigits is not specified.
    """
    assert my_round(5.4) == 5
    assert my_round(5.6) == 6

def test_my_round_ndigits():
    """
    Test that my_round() correctly rounds float values
    when a specific number of decimal places (ndigits) is given.
    """
    assert my_round(3.14159, 2) == 3.14
    assert my_round(3.14159, 3) == 3.142

def test_my_round_negative_ndigits():
    """
    Test that my_round() correctly rounds float values
    when ndigits is negative (e.g., round to tens, hundreds, etc.).
    """
    assert my_round(1234, -1) == 1230
    assert my_round(1234, -2) == 1200
