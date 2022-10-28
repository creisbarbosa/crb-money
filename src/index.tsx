import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Design de site',
          type: 'deposit',
          category: 'Dev',
          amount: 12000,
          createdAt: new Date('2021-12-04 09:00:00'),
        },
        {
          id: 2,
          title: 'Shawarma Pai e Filho',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 52.5,
          createdAt: new Date('2021-10-04 19:00:00'),
        },
        {
          id: 3,
          title: 'Aluguel do apartamento',
          type: 'withdraw',
          category: 'Casa',
          amount: 2465.8,
          createdAt: new Date('2021-01-12 10:00:00'),
        },
        {
          id: 4,
          title: 'MacBook Air antigo',
          type: 'deposit',
          category: 'Vedas',
          amount: 4200,
          createdAt: new Date('2021-01-12 08:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

