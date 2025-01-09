"""
TDD example for my_round() function.

1. my_round() should round a number to the nearest integer if ndigits is None.
2. If ndigits is specified, it should round to that many decimal places.
3. Negative ndigits means rounding to a larger place (e.g., tens, hundreds).
4. If the input is invalid (not a number or ndigits not an integer/None), raise ValueError.
"""

# ---------------------------------------------------
# PRODUCTION CODE
# ---------------------------------------------------
def my_round(number, ndigits=None):
    """
    Rounds the given number using the built-in round() function.

    :param number: A numeric value (int or float).
    :param ndigits: An integer specifying the number of decimal places,
                    or None for rounding to the nearest integer,
                    or a negative integer for rounding to larger place values.
    :return: The rounded numeric result.
    :raises ValueError: If 'number' is not numeric or 'ndigits' is neither None nor an integer.
    """
    if not isinstance(number, (int, float)):
        raise ValueError("number must be an int or float")

    if ndigits is not None and not isinstance(ndigits, int):
        raise ValueError("ndigits must be an integer or None")

    return round(number, ndigits)

# ---------------------------------------------------
# TESTS (pytest)
# ---------------------------------------------------
def test_my_round_no_decimals():
    """
    Should round to the nearest integer when ndigits is not specified.
    """
    assert my_round(5) == 5
    assert my_round(5.6) == 6
    assert my_round(-2.3) == -2

def test_my_round_with_decimals():
    """
    Should round to the specified number of decimal places.
    """
    assert my_round(3.14159, 2) == 3.14
    assert my_round(3.14159, 3) == 3.142

def test_my_round_negative_ndigits():
    """
    Should round to tens, hundreds, etc., when ndigits is negative.
    """
    assert my_round(1234, -1) == 1230
    assert my_round(1234, -2) == 1200
    assert my_round(1234.56, -2) == 1200

def test_my_round_non_numeric_input():
    """
    Should raise ValueError if 'number' is not int or float.
    """
    try:
        my_round("hello")
        assert False, "Expected ValueError for non-numeric input"
    except ValueError as e:
        assert "number must be an int or float" in str(e)

def test_my_round_invalid_ndigits():
    """
    Should raise ValueError if ndigits is not None and not an integer.
    """
    try:
        my_round(3.14, ndigits="hello")
        assert False, "Expected ValueError for invalid ndigits"
    except ValueError as e:
        assert "ndigits must be an integer or None" in str(e)
