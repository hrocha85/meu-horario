import React, {useState} from 'react';
import {Button, Menu, useTheme} from 'react-native-paper';

interface InputMenuProps {
  selectedItem: string;
  setSelectedItem: any;
  items: {title: string}[];
  width: any;
}

const InputMenu = ({
  selectedItem,
  setSelectedItem,
  width,
  items,
}: InputMenuProps) => {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      contentStyle={{
        marginTop: 54,
        minWidth: width,
        borderRadius: 24,
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
      {items?.map(({title}) => (
        <Menu.Item
          key={title}
          onPress={() => {
            setSelectedItem(title);
            closeMenu();
          }}
          title={title}
        />
      ))}
    </Menu>
  );
};

export default InputMenu;
