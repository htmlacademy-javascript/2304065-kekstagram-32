Задача
  После завершения загрузки изображений с сервера покажите блок .img-filters, убрав у него скрывающий класс.

  Добавьте обработчики изменения фильтров, которые будут управлять порядком отрисовки элементов на странице:

    5.1. Доступные фильтры:

      «По умолчанию» — фотографии в изначальном порядке с сервера;
      «Случайные» — 10 случайных, не повторяющихся фотографий;
      «Обсуждаемые» — фотографии, отсортированные в порядке убывания количества комментариев.

      5.2. Блок, с помощью которого производится фильтрация фотографий, скрыт изначально и показывается только после получения от сервера данных об изображениях других пользователей.

      5.3. При переключении фильтров, отрисовка изображений, подходящих под новый фильтр, должна производиться не чаще, чем один раз 500 мс (устранение дребезга).
      Случайные — 10 случайных, не повторяющихся фотографий.
      Обсуждаемые — фотографии, отсортированные в порядке убывания количества комментариев.
      При переключении фильтра все фотографии, отрисованные ранее, нужно убрать и вместо них показать те, которые подходят под новые условия.

