import { useEffect, useState } from "react";
import { GET, getAuthenticatedHeaders } from "../fetching/http.fetching";
import { useNavigate } from "react-router-dom";
import ENVIROMENT from "../enviroment";


const useMessageDetail = (message_id) => {
    const [messageDetailState, setMessageDetailState] = useState(null);
    const [messageDetailLoading, setMessageDetailLoading] = useState(true);
    const [messageDetailError, setMessageDetailError] = useState(null);
    const navigate = useNavigate();

    const getMessageDetail = async () => {
        try {
            const response = await GET(
                `${ENVIROMENT.URL_BACKEND}/api/messages/${message_id}`,
                {
                    headers: getAuthenticatedHeaders(),
                }
            );
            setMessageDetailLoading(false);
            if (response.ok) {
                setMessageDetailState(response.payload.message); 
            } else {
                setMessageDetailError(response.payload.detail);
                navigate("/error");  
            }
        } catch (error) {
            setMessageDetailLoading(false);
            setMessageDetailError("An unexpected error occurred");
            navigate("/error");
        }
    };

    useEffect(() => {
        getMessageDetail();
    }, [message_id]);

    return {
        messageDetailState,
        messageDetailLoading,
        messageDetailError,
    };
};

export default useMessageDetail;
