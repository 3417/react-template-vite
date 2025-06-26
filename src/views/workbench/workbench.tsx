import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import './workbench.less';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];

const Workbench: React.FC = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);

  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };

  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };


  const onImgMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const flashLight = e.currentTarget; // 直接获取事件绑定的外层元素
  const rect = flashLight.getBoundingClientRect();
  
  // 计算鼠标相对于外层盒子的位置
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const innerLight = flashLight.querySelector('.flash_light_inner') as HTMLDivElement;
  innerLight.style.setProperty('--x', `${x}px`);
  innerLight.style.setProperty('--y', `${y}px`);
  };

  return (
    <>
      <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large" gap={gap}>
        {user}
      </Avatar>
      <Button
        size="small"
        style={{ margin: '0 16px', verticalAlign: 'middle' }}
        onClick={changeUser}
      >
        ChangeUser
      </Button>
      <Button size="small" style={{ verticalAlign: 'middle' }} onClick={changeGap}>
        changeGap
      </Button>

      <div className='btn-box103'>
        <button className='btn103'>
          <span className='btn-text103'>+1</span>
        </button>
      </div>

      {/* 手电筒效果样式 */}
      <div className='flash_light' onMouseMove={(e) => onImgMouseMove(e)} style={{'--x':0, '--y':0}}>
        <div className='flash_light_inner'></div>
      </div>
    </>
  );
};

export default Workbench;