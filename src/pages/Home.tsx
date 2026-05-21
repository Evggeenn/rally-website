export function Home() {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-content">
          <h1>Ралли: <span>история</span>, машины, легенды</h1>
          <p>Погрузитесь в мир Чемпионата мира по ралли — от первых гонок 1973 года до гибридных болидов Rally1.</p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-card">
            <span className="year">1973</span>
            <h3>Рождение WRC</h3>
            <p>FIA основала Чемпионат мира по ралли. Первым чемпионом стала Renault с Alpine A110.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-card">
            <span className="year">1982-1986</span>
            <h3>Эра Group B</h3>
            <p>Полный привод, 500+ л.с., легендарные Audi Quattro, Peugeot 205 T16. Эра завершилась трагедией на Корсике.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-card">
            <span className="year">2004-2012</span>
            <h3>Доминирование Лёба</h3>
            <p>Себастьен Лёб выиграл 9 титулов подряд — рекорд, который вряд ли кто-то побьёт.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-card">
            <span className="year">2022-сейчас</span>
            <h3>Гибридная эра</h3>
            <p>Rally1 с гибридными двигателями 380 + 136 л.с. Калле Рованперя — самый молодой чемпион.</p>
          </div>
        </div>
      </div>

      <div className="cards-grid" style={{ marginTop: '3rem' }}>
        <div className="card">
          <div className="card-img">
            <img src="/images/cars/audi-quattro.jpg" alt="Audi Quattro" />
          </div>
          <div className="card-content">
            <span className="card-badge">Group B</span>
            <h3>Audi Quattro</h3>
            <p>Первый полноприводный раллийный автомобиль, изменивший историю.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/images/drivers/Loeb.jpg" alt="Себастьен Лёб" />
          </div>
          <div className="card-content">
            <span className="card-badge">Легенда</span>
            <h3>Себастьен Лёб</h3>
            <p>9-кратный чемпион WRC. Величайший пилот в истории ралли.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/images/cars/Toyota-GR-Yaris-Rally1.jpg" alt="Toyota GR Yaris Rally1" />
          </div>
          <div className="card-content">
            <span className="card-badge">Rally1</span>
            <h3>Toyota GR Yaris</h3>
            <p>Гибридный болид, доминирующий в современном WRC.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
