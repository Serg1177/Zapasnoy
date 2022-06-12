import React, {
  //  useState 
} from 'react';

import { Button, Modal, Row } from 'antd';

const ModalOwn = ({ isModalVisible,setIsModalVisible }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title='Восстановить доступ'
             visible={isModalVisible}
             width={408}
             footer={[
         <Row>
          <Button key='submit' type='primary' onClick={handleOk}>
            Отправить
          </Button>,
          <Button key='back' onClick={handleCancel}>
            Отменить
          </Button>
         </Row>
        ]}
             okText={'Отправить'}
             cancelText={'Отменить'}
             onOk={handleOk}
             onCancel={handleCancel}>
        <p>Форма контакта с админом с обратной связью</p>
      </Modal>
    </>
  );
};

export default ModalOwn;
