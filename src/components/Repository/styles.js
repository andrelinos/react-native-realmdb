import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Header = styled.View`
  width: 100%;

  border-bottom-color: #dfe6e9;
  border-bottom-width: 2px;
  margin-bottom: 2px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LinkAction = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Author = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 22px;
  margin-left: 6px;
  font-weight: bold;
  color: #222;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 19px;
  border-width: 1px;
  border-color: #999;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Delete = styled.TouchableOpacity`
  color: red;
  margin: 3px;
  border-radius: 8px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #2ecc71;
  margin-left: 5px;
`;
