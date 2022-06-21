import React from 'react';

import { Button, Modal, Row, Typography } from 'antd';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (flag: boolean) => void;
}

const { Text, } = Typography;

const ModalOwn = ({ isModalVisible, setIsModalVisible }: Props) => {

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title='Восстановить доступ'
      visible={isModalVisible}
      width={408}
      footer={[
        <Row>
          <Button key='submit' type='primary' onClick={handleOk}>
            Отправить
          </Button>
          ,
          <Button key='back' onClick={handleCancel}>
            Отменить
          </Button>
        </Row>,
      ]}
      okText={'Отправить'}
      cancelText={'Отменить'}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Text >Форма контакта с админом с обратной связью</Text>
    </Modal>
  );
};

export default ModalOwn;
