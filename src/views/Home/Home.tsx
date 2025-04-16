import React, { useEffect } from 'react';
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Modal } from '@douyinfe/semi-ui';
import useToggle from '../../hooks/useToggle';
import { getHomeData } from '../../api/index';
import  fullLoading from '@/components/Loading/fullLoading';
import './Home.less'

const Home = () => {
  const [count, setCount] = useState(0);
  const [toggleState, toggleAction] = useToggle(false);
  const onHandleClick = (msg) => {
    alert(msg)
  }

  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    console.log('Ok button clicked');
  };
  const handleCancel = () => {
    setVisible(false);
    console.log('Cancel button clicked');
  };
  const handleAfterClose = () => {
    console.log('After Close callback executed');
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <Button type="primary" onClick={() => onHandleClick('this is inner')}>Button</Button>

      <div>
        <p>当前状态: {toggleState ? '开启' : '关闭'}</p>
        <button onClick={toggleAction}>切换状态</button>
      </div>
      {/*  富文本使用方式需要添加__html:<富文本内容或者文字内容> */}
      <div dangerouslySetInnerHTML={{ __html: '<p>获取数据</p>' }}></div>

      <Button onClick={showDialog}>打开弹窗</Button>
      <Modal
        title="基本对话框"
        visible={visible}
        onOk={handleOk}
        afterClose={handleAfterClose} //>=1.16.0
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        This is the content of a basic modal.
        <br />
        More content...
      </Modal>
    </>
  )
}


export default Home

