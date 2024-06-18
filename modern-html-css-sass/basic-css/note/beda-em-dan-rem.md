## Rem

Saat menggunakan unit rem, ukuran piksel yang mereka terjemahkan tergantung pada ukuran
font dari elemen utama pada halaman, yaitu element html.
Ukuran font utama dikalikan dengan angka apapun yang anda gunakan dengan unit rem anda

Misalnya dengan ukuran elemen font utama sebesar 16px,
10rem akan menyamai 160px, yaitu 10 x 16 = 160.

## Em

Saat menggunakan unit em, nilai piksel yang anda dapatkan adalah
penggandaan ukuran font pada elemen yang dilakukan penataan (styling)

Misalnya, jika sebuah div memiliki ukuran font 18px,
10em akan menyamai 180px, yaitu 10 x 18 = 180.

em relatif terhadap ukuran font induk, tapi bila itu terjadi, itu semata-mata
karena pewarisan.

`Contoh em Inheritance (Pewarisan)`

Jika kita memiliki halaman dengan ukuran font utama 16px (biasanya default) dan
child-div di dalamnya dengan padding 1.5em, div itu akan mewarisi ukuran
font 16px dari elemen utama. Oleh karena itu paddingnya akan diterjemahkan
menjadi 24px, yaitu 1,5 x 16 = 24.
