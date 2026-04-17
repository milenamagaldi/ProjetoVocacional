// src/components/AgendaEventos.jsx
function AgendaEventos() {
  // Seu ID do calendário
  const calendarId = "a4c8e385330a7d3518b475d067ade2f5cab022195867cc0214ea268d5c463b0b%40group.calendar.google.com"
  
  // Calendário mensal (modo mês)
  const calendarMesUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo&mode=MONTH`
  
  // Lista de eventos (modo AGENDA - mostra só a lista)
  const calendarListaUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo&mode=AGENDA`

  return (
    <div style={{ 
      background: '#f0f4f8', 
      padding: '20px', 
      borderRadius: '12px',
      margin: '40px 0'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>
        📅 Calendário de Eventos
      </h3>
      
      {/* Calendário mensal em cima */}
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        overflow: 'hidden',
        marginBottom: '30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <iframe 
          src={calendarMesUrl}
          style={{ 
            border: 'none', 
            width: '100%', 
            height: '450px', 
            display: 'block'
          }}
          frameBorder="0"
          scrolling="no"
          title="Calendário Mensal"
        ></iframe>
      </div>
      
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>
        📝 Próximos Eventos
      </h3>
      
      {/* Lista de eventos (iframe em modo AGENDA) */}
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <iframe 
          src={calendarListaUrl}
          style={{ 
            border: 'none', 
            width: '100%', 
            height: '350px', 
            display: 'block'
          }}
          frameBorder="0"
          scrolling="yes"
          title="Lista de Eventos"
        ></iframe>
      </div>
      
      <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '15px', color: '#666' }}>
        📌 Adicione eventos no Google Calendar que eles aparecerão aqui instantaneamente!
      </p>
    </div>
  )
}

export default AgendaEventos