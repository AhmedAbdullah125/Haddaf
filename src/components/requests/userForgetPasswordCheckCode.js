// lib/api/login.js
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { toast } from 'sonner';

export async function userForgetPasswordCheckCode({ data, setLoading, formData, setStep }) {
    console.log(formData);
    console.log(data);
    setLoading(true)
    const url = `${API_BASE_URL}/provider/forget-password-check-code`;
    const formData2 = new FormData();
    formData2.append('phone', Number(formData.phone));
    formData2.append('code', Number(data.otp));

    try {
        const response = await axios.post(
            url,
            formData2,
            //   { headers: { 'accept-language': lang } }
        );
        setLoading(false);
        const message = response?.data?.msg;
        console.log(response);

        if (response.data.key === "success") {
            toast(message, {
                style: {
                    borderColor: '#28a745',
                    boxShadow: '0px 0px 10px rgba(40, 167, 69, .5)',
                },
            });
            setStep("reset");

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
