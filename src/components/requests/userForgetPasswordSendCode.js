// lib/api/login.js
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { toast } from 'sonner';

export async function userForgetPasswordSendCode({ data, setLoading, setStep, setFormData }) {
    setLoading(true)
    const url = `${API_BASE_URL}/provider/forget-password-send-code`;
    const formData = new FormData();
    formData.append('phone', data.phone);

    try {
        const response = await axios.post(
            url,
            formData,
        );
        setLoading(false);
        const message = response?.data?.msg;
        if (response?.data?.key === "success") {
            toast(message, {
                style: {
                    borderColor: '#28a745',
                    boxShadow: '0px 0px 10px rgba(40, 167, 69, .5)',
                },
            });
            setStep("verify")
            setFormData(data)
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
