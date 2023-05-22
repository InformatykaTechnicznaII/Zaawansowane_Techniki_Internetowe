import requests
from bs4 import BeautifulSoup

# Pobieranie zawartości strony
url = "https://www.example.com"
response = requests.get(url)
content = response.content

# Analiza struktury HTML
soup = BeautifulSoup(content, "html.parser")

# Wydobycie danych
title = soup.find("h1").text
paragraphs = soup.find_all("p")

# Wyświetlanie wyników
print("Tytuł strony:", title)
print("Paragrafy:")
for paragraph in paragraphs:
    print(paragraph.text)