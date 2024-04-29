"""
Module provides a test case for hovering over elements and clicking 'View profile' on the website.
"""

import os
import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import WebDriverException

class ProfileViewTest(unittest.TestCase):
    """
    A test for viewing profiles by hovering over user images and clicking on 'View profile' links.
    """

    def setUp(self):
        """
        Setup the webdriver and open the test webpage before each test method.
        """
        self.driver = webdriver.Chrome()
        self.driver.get("https://the-internet.herokuapp.com/hovers")

    def _screenshot(self, name):
        """
        Capture a screenshot of the current state, with error handling for WebDriver exceptions.
        """
        if not os.path.exists('screenshots'):
            os.makedirs('screenshots')
        try:
            self.driver.save_screenshot(f'screenshots/{name}.png')
        except WebDriverException:
            print("Failed to capture a screenshot.")


    def test_view_profile(self):
        """
        Tests whether the 'View profile' link works correctly for each user.
        Navigate back after each click and wait for a moment.
        """
        driver = self.driver
        users = driver.find_elements(By.CSS_SELECTOR, ".figure")
        action = ActionChains(driver)

        for index, user in enumerate(users):
            action.move_to_element(user).perform()
            self._screenshot(f'before_click_{index}')
            link = user.find_element(By.PARTIAL_LINK_TEXT, "View profile")
            link.click()
            time.sleep(1)
            self._screenshot(f'after_click_{index}')
            driver.back()

    def tearDown(self):
        """
        Close the browser window after each test method.
        """
        self.driver.quit()

if name == "main":
    unittest.main()
