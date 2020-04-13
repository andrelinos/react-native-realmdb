import Realm from 'realm';
export const TODOREPO_SCHEMA = 'TodoRepo'; // TodoList
export const TODO_SCHEMA = 'Todo'; // Todo

import RespositorySchema from '../schemas/RepositorySchema';

export const deleteRepository = (repository) =>
  new Promise((resolve, reject) => {
    Realm.open({
      schema: [RespositorySchema],
    })
      .then((realm) => {
        realm.write(() => {
          let deleteRepo = realm.objectFroPrimaryKey(
            TODOREPO_SCHEMA,
            repository,
          );
          realm.delete(deleteRepo);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });
