export const About = () => {
  return (
    <div className="min-h-full py-12 px-4">
      <div className="sm:px-4 md:px-10">

        <h2 className="font-bold">Описание</h2>

        <ol className="list-decimal list-inside">
          <li>Header с курсом валют
            <ul className="list-disc list-inside ml-4">
              <li>В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH)</li>
              <li>Актуальный курс валют должен приходить с любого публичного API</li>
            </ul>
          </li>
          <li>Компонент с конвертацией
            <ul className="list-disc list-inside ml-4">
              <li>Для одной валюты должен быть свой input и select.</li>
              <li>отдельный input + select для первой валюты, и отдельный input + select для второй валюты</li>
              <li>в input задается число, чтобы указать кол-во единиц для конвертирования</li>
              <li>в select должно быть не менее трех валют - UAH, USD, EUR.</li>
              <li>конвертация должна происходить в обоих направлениях
                <ul className="list-disc list-inside ml-8">
                  <li>при изменении значения в первой валюте, должно пересчитываться значение во второй, и наоборот</li>
                  <li>при изменении валюты в каждом select-е, конвертация обеих валют должна пересчитываться корректно</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <h2 className="font-bold">Плюсом будет:</h2>
        
        <ul className="list-disc list-inside ml-4">
          <li>Хорошо продуманный интерфейс и внешний вид</li>
          <li>Чистый код</li>
        </ul>

        <h2 className="font-bold">Для реализации используйте:&nbsp;
          <span className="font-normal">React JS либо Angular 2+</span>
        </h2>
      
      </div>
    </div>
  )
}