import Realm from 'realm';

import RespositorySchema from '../schemas/RepositorySchema';

export default function getRealm() {
  return Realm.open({
    schema: [RespositorySchema],
  });
}
