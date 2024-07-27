Покажите блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, убрав у них класс hidden.

В модуле, который отвечает за отрисовку окна с полноразмерным изображением, доработайте код по выводу списка комментариев таким образом, чтобы список показывался не полностью, а по 5 элементов, и следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё». Не забудьте реализовать обновление числа показанных комментариев в блоке .social__comment-count.

4.6. Все комментарии к изображению выводятся в блок .social__comments. Сразу после открытия изображения в полноэкранном режиме отображается не более 5 комментариев. Количество показанных комментариев и общее число комментариев отображается в блоке .social__comment-count. Пример разметки списка комментариев приведён в блоке .social__comments. Комментарий оформляется отдельным элементом списка li с классом social__comment. Аватарка автора комментария отображается в блоке .social__picture. Имя автора комментария отображается в атрибуте alt его аватарки. Текст комментария выводится в блоке .social__text.

4.7. Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader. При нажатии на кнопку отображается не более 5 новых комментариев. При изменении количества показанных комментариев число показанных комментариев в блоке .social__comment-count также изменяется.

4.8. Если все комментарии показаны, кнопку .comments-loader следует скрыть, добавив класс hidden.

Как буду делать?

1. Убрать класс hidden .social__comment-count и загрузки новых комментариев .comments-loader +

2. Завести переменную для шагов комментов +

3. Завести переменную для отображения текущего количества комментов, равной нулю +

4. Создать массив для отображения комметов +

5. При открытии окна прибавить 5 комментов к текущему количеству комментов +

6. Отрендерить текущее количество комментов +

6. При нажатии Загрузить еще прибавить 5 комментов к текущему количеству комментов

8. Отрендерить еще комменты

Проверки

1. Если длина сгенерированных комментов <=5 - показать только общее количество комментов и скрыть кнопку Загрузить еще +

2. Если длина массива показанных коменнтов >= длине массива сгенерированных комментов - скрыть кнопку Загрузить еще
