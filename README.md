# converter-zl-usd-json-local--ajax
RU -------
Самый простой конвертор валют из Zł(PLN) в USD и Euro с помощью AJAX и локального сервера JSON
1)intrex.html 
2)js.js
3)current.json (наш локальный сервер) - указаны текущие данные курса валюты (не забывайте самостоятельно их менять)
Все файлы должны находиться в общей папке. Иначе следует исправить пути к файлам
 1. <script src="js.js"></script> (index.html)
 2. request.open("GET", "current.json"); (js.js)

 promise-версия в js не работает (дорабатываю)

EN -------
The largest currency converter from Zl to USD and Euro with help AJAX and local server JSON
1)intrex.html 
2)js.js
3)current.json (local server) - current data of rate (don't forget to change them yourself)
All files are in the common folder.
 1. <script src="js.js"></script> (index.html)
 2. request.open("GET", "current.json"); (js.js)

PL -------
Najprostrzy przelicznik walut Zł -> USD i Euro z pomocą AJAX i lokalnego serweru JSON
1)intrex.html 
2)js.js
3)current.json (lokalny serwer) - aktualne dane dotyczące kursu walutowego (nie zapomnij ich zmienić samodzielnie)
Wszystkie pliki muszą znajdować się w folderze współdzielonym. W przeciwnym razie ścieżki plików powinny zostać poprawione.
 1. <script src="js.js"></script> (index.html)
 2. request.open("GET", "current.json"); (js.js)