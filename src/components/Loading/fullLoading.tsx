// 此封装在插件中不适用!!!!  会造成页面卡顿

import { createRoot } from 'react-dom/client';
import { Spin } from '@douyinfe/semi-ui';
import './index.less'


const CONTAINER_ID = 'full-loading-container';
// 创建容器
function createContainer() {
    let container = document.getElementById(CONTAINER_ID);
    if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', CONTAINER_ID);
        container.setAttribute('class', 'full-loading-container');
        document.body.appendChild(container);
    }
    return container;
}



// 挂载Dom
function renderLoading() {
    const container = createContainer();
    if (container) {
        const root = createRoot(container)
        root.render(<Spin spinning={true} fullscreen />)
    }
}



let requestCount = 0;
const fullLoading = {
    show: () => {
        if (requestCount === 0) {
            renderLoading();
        }
        requestCount++;
    },
    hide: () => {
        requestCount--;
        if (requestCount === 0) {
            const container = document.getElementById(CONTAINER_ID);
            container && document.body.removeChild(container);
        }
    }
}

export default fullLoading;