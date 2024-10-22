import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, Menu, useTheme} from 'react-native-paper';
import {useStyle} from './style';

interface InputMenuProps {
  selectedItem: string;
  onSelect: (item: {title: string; value?: string}) => void;
  items: {title: string; value?: string}[];
  width: any;
}

const InputMenu = ({selectedItem, onSelect, width, items}: InputMenuProps) => {
  const theme = useTheme();
  const styles = useStyle(width);

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      contentStyle={{
        marginTop: 54,
        minWidth: width,
      }}
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button
          onPress={openMenu}
          contentStyle={{
            backgroundColor: theme.colors.outlineVariant,
            padding: 4,
          }}
          labelStyle={{
            fontSize: 18,
            color: theme.colors.onBackground,
          }}>
          {selectedItem}
        </Button>
      }>
      <ScrollView style={styles.scrollView}>
        {items?.map(item => (
          <Menu.Item
            key={item.title}
            onPress={() => {
              onSelect(item);
              closeMenu();
            }}
            title={item.title}
          />
        ))}
      </ScrollView>
    </Menu>
  );
};

export default InputMenu;
