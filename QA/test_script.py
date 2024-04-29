from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://the-internet.herokuapp.com/hovers")

try:
    user_cards = driver.find_elements(By.CLASS_NAME, "figure")

    for card in user_cards:
        webdriver.ActionChains(driver).move_to_element(card).perform()

        view_profile_link = card.find_element(By.PARTIAL_LINK_TEXT, "View profile")
        view_profile_link.click()
        
        time.sleep(2)
        
        driver.back()
        time.sleep(2)
        
finally:
    driver.quit()
