export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      login: 'string',
      name: 'string',
      fullName: 'string',
      description: 'string',
      avatarUrl: 'string',
      stars: 'int',
      forks: 'int',
      watchersCount: 'int',
    },
  };
}
