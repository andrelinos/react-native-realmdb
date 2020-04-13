import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import getRealm from '~/services/realm';

import {
  Container,
  Header,
  LinkAction,
  Avatar,
  Author,
  Name,
  Delete,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
} from './styles';

async function handleDeleteRepository(repository) {
  const realm = await getRealm();
  realm.write(() => {
    realm.delete(repository);
  });
}

export default function Repository({ data, onRefresh }) {
  return (
    <Container>
      <Header>
        <LinkAction onPress={() => {}}>
          <Avatar source={{ uri: data.avatarUrl }} />

          <Author>{data.login}</Author>
        </LinkAction>
        <Delete onPress={() => handleDeleteRepository(data.id)}>
          <Icon name="remove" size={28} color="#ff7272" />
        </Delete>
      </Header>

      <TouchableOpacity onPress={() => {}}>
        <Name>{data.name}</Name>
      </TouchableOpacity>

      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
        <Stat>
          <Icon name="eye" size={16} color="#333" />
          <StatCount>{data.watchersCount}</StatCount>
        </Stat>
      </Stats>

      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh>
    </Container>
  );
}
