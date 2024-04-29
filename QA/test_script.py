"""
Module docstring: This module contains a test case for hovering over user cards and clicking on view profile links.
"""

import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException

@pytest.fixture
def browser():
    """
    Fixture for initializing and quitting the browser.
    """
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_hover(browser):
    """
    Test case to hover over user cards and click on view profile links.
    """
    browser.get("https://the-internet.herokuapp.com/hovers")

    try:
        user_cards = browser.find_elements(By.CLASS_NAME, "figure")

        for card in user_cards:
            ActionChains(browser).move_to_element(card).perform()

            view_profile_link = card.find_element(By.PARTIAL_LINK_TEXT, "View profile")
            view_profile_link.click()
            
            time.sleep(2)
            
            browser.back()
            time.sleep(2)
            
    except NoSuchElementException as e:
        pytest.fail(f"Test failed: {str(e)}")
