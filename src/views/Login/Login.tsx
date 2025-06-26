import { useEffect, useRef, useState } from "react";
import { Form, Button, Empty } from "@douyinfe/semi-ui";
import { IllustrationIdle, IllustrationIdleDark } from '@douyinfe/semi-illustrations';
import { useNavigate } from "react-router-dom";
import './index.less';
const Login = () => {
    const emptyStyle = {
        marginRight: 120,
    }

    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        sessionStorage.setItem('user', JSON.stringify(values));
        // 模拟登录成功
        navigate('/home');

    }
    const titleCard = useRef(null);
    const onCardMouseMove = (e) => {
        const card = titleCard.current;
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const maxTilt = 18
        const rotateY = ((x - centerX) / centerX) * maxTilt
        const rotateX = -((y - centerY) / centerY) * maxTilt
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    }
    const onCardMouseLeave = (e) => {
        const card = titleCard.current;
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            navigate('/home');
        }
    }, [])
    return (
        <>
            <div className="login_container">
                {/* <div className="login_bg">
                    <Empty
                        image={<IllustrationIdle style={{ width: 350, height: 350 }} />}
                        darkModeImage={<IllustrationIdleDark style={{ width: 350, height: 350 }} />}
                        style={emptyStyle}
                    />
                </div> */}
                <svg style={{ display: 'none' }}>
                    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                        <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
                        <feComponentTransfer in="turbulence" result="mapped">
                            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                        </feComponentTransfer>
                        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
                        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
                            <fePointLight x="-200" y="-200" z="300" />
                        </feSpecularLighting>
                        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
                        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </svg>
                <div className="glass-component login-card" ref={titleCard} onMouseMove={(e) => onCardMouseMove(e)} onMouseLeave={(e) => onCardMouseLeave(e)}>
                    <div className="glass-effect"></div>
                    <div className="glass-tint"></div>
                    <div className="glass-shine"></div>
                    <div className="glass-content">
                        <h2 className="login-title">欢迎登录</h2>
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
            </div>
        </>
    )
}


export default Login;