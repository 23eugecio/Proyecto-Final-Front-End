import { useEffect, useState } from "react";
import { getAuthenticatedHeaders, GET } from "../fetching/http.fetching";

const useContact = () => {
    const [contacts, setContacts] = useState([]);  
    const [isLoadingContacts, setIsLoadingContacts] = useState(true);  

    const getContacts = async () => {
        const response = await GET('http://localhost:3000/api/contact', {   
            headers: getAuthenticatedHeaders(),
        });

        console.log({response});
        if(response.ok){
            setContacts(response.payload.contacts);   
            setIsLoadingContacts(false); 
            console.error("Failed to fetch contacts");
            setIsLoadingContacts(false); 
        }
    };

    useEffect(() => {
        getContacts();   
    }, []);  

    return { contacts, isLoadingContacts };
};

export default useContact;
