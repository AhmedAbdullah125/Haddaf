// lib/api/login.js
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { toast } from 'sonner';

// Generate a random device ID with 20 characters (numbers and letters)
const generateDeviceId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let deviceId = '';
    for (let i = 0; i < 20; i++) {
        deviceId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return deviceId;
};
// Get or create device ID from localStorage
const getDeviceId = () => {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
        deviceId = generateDeviceId();
        localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
};
export async function userLogin({ data, setLoading, navigate }) {
    console.log(data);

    setLoading(true)
    const url = `${API_BASE_URL}/provider/login`;
    const formData = new FormData();
    formData.append('device_id', getDeviceId());
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('lang', "ar");
    formData.append('device_type', "web");

    try {
        const response = await axios.post(
            url,
            formData,
            //   { headers: { 'accept-language': lang } }
        );
        setLoading(false);
        const message = response?.data?.msg;
        console.log(response);

        if (response?.data?.key === "success") {
            toast(message, {
                style: {
                    borderColor: '#28a745',
                    boxShadow: '0px 0px 10px rgba(40, 167, 69, .5)',
                },
            });
            // setFormData({
            //     username: data.username,
            //     password: data.password,
            // })
            // setStep("verify");
            navigate("/")
            localStorage.setItem("token", response?.data?.data?.token);
        } else {
            toast(message, {
                style: {
                    borderColor: '#dc3545',
                    boxShadow: '0px 0px 10px rgba(220, 53, 69, .5)',
                },
                description: 'استجابة غير متوقعة',
            });
        }
    } catch (error) {
        setLoading(false);

        const errorMessage = error?.response?.data?.msg || error.msg;

        toast(errorMessage, {
            style: {
                borderColor: '#dc3545',
                boxShadow: '0px 0px 10px rgba(220, 53, 69, .5)',
            },
        });
    }
}
