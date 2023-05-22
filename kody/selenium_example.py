from selenium import webdriver

# Inicjalizacja przeglądarki Chrome
driver = webdriver.Chrome()

# Otwórz stronę do scrapingu
driver.get("https://example.com")

# Pobierz elementy strony
header_element = driver.find_element("xpath", "//h1")
paragraph_elements = driver.find_elements("xpath", "//p")

# Wydrukuj tekst nagłówka
print("Nagłówek:", header_element.text)

# Wydrukuj tekst wszystkich paragrafów
print("Paragrafy:")
for paragraph in paragraph_elements:
    print(paragraph.text)

# Zamknij przeglądarkę
driver.quit()