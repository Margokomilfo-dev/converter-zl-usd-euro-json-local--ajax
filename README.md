# converter-zl-usd-json-local--ajax
Самый простой конвертор из Zł(PLN) в USD и Euro

intrex.html 
js.js
current.json (наш локальный сервер)
- указаны текущие данные курса валюты (не забывайте самостоятельно их менять)


Все файлы должны находиться в общей папке. Иначе следует исправить пути к файлам
 1. <script src="js.js"></script> (index.html)
 2. request.open("GET", "current.json"); (js.js)


ДОРАБАТЫВАЕТСЯ!
 - стили (интерфейс)
 - при введении символов(не чисел) в поле Zł - в полях usd/euro выдаетя NaN 