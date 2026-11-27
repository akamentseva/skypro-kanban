import { Column } from "../Column/Column";

export default function Main() {
  const dummyCards = [
    { category: "_orange", title: "Название задачи", date: "30.10.23" },
    { category: "_green", title: "Название задачи", date: "30.10.23" },
    { category: "_purple", title: "Название задачи", date: "30.10.23" },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса" cards={dummyCards} />
            <Column title="Нужно сделать" cards={[dummyCards[1]]} />
            <Column title="В работе" cards={[dummyCards[0], dummyCards[2]]} />
            <Column title="Тестирование" cards={[dummyCards[1]]} />
            <Column title="Готово" cards={[dummyCards[0]]} />
          </div>
        </div>
      </div>
    </main>
  );
}
