import { useState } from "react";
import { Form, Button, Empty } from "@douyinfe/semi-ui";
import { IllustrationIdle, IllustrationIdleDark } from '@douyinfe/semi-illustrations';
import './index.less';
const Login = () => {
    const emptyStyle = {
        marginRight:120,
    }

    const handleSubmit = async (values)=>{
        console.log('submit', values);
    }
    return (
        <>
            <div className="common_flex login_container">
                <div className="login_bg">
                    <Empty
                        image={<IllustrationIdle style={{ width: 350, height: 350 }} />}
                        darkModeImage={<IllustrationIdleDark style={{ width: 350, height: 350 }} />}
                        style={emptyStyle}
                    />
                </div>
                <div className="login_box">
                    <h2 style={{textAlign:'center'}}>登录</h2>
                    <Form onSubmit={values => handleSubmit(values)} style={{ width: 320, padding: 20 }} labelPosition='inset'>
                        {({ formState, values, formApi }) => (
                            <>
                                <Form.Input field='phone' label='用户名' placeholder='请输入用户名'></Form.Input>
                                <Form.Input field='password' label='密码' placeholder='请输入密码'></Form.Input>
                                <Form.Checkbox field='agree' noLabel>记住密码</Form.Checkbox>
                                <div className="login_btn">
                                    <Button htmlType='submit' type="primary" theme="solid" block>登录</Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    )
}


export default Login;