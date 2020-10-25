import { Button, Space, Typography } from 'antd'
import React from 'react'
import Layout from '../components/base/Layout'
import { GoogleOutlined } from "@ant-design/icons"
import { authService, firebaseInstance } from '../server/fbase'
import { useRecoilState } from 'recoil'
import { UserState } from '../store/userState'

const { Title } = Typography

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(UserState)

    const GoogleLogin = async () => {
        const google = new firebaseInstance.auth.GoogleAuthProvider();
        
        try {
            const data = await authService.signInWithPopup(google)
            if (data) {
                setIsLoggedIn(true)            
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Layout>
            <Space align="center" direction="vertical" style={{ width: "100%" }}>
                <Title level={2}>Login</Title>
                <Button 
                    type="primary" 
                    size="large" 
                    icon={<GoogleOutlined />}
                    onClick={() => GoogleLogin()}>
                        Login with Google
                </Button>
            </Space>
        </Layout>
    )
}

export default Login