import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('demo.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY NOT NULL, ownerId INTEGER NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL, description TEXT NOT NULL, price REAL NOT NULL;',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertProduct = (ownerId, title, description, imageUrl, price) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO products (ownerId, title, description, imageUrl, price) VALUES (?, ?, ?, ?, ?);`,
            [ownerId, title, description, imageUrl, price],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};

export const fetchProducts = () => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM products',
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};

export const updateProduct = (id, title, description, imageUrl) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE products SET title = ?, description = ?, imageUrl = ? WHERE id = ?;`,
          [title, description, imageUrl, id],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};


export const deleteProduct = (id) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM products WHERE id = ?;`,
          [id],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};