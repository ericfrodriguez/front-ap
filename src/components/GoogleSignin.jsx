import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"
import Swal from "sweetalert2";
import apiUrl from "../api";

export const GoogleSignin = () => {

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        // console.info('JWT GOOGLE: ', response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post(`${apiUrl}/auth/google`, data);


        console.log(userResponse)
    }

    useEffect(() => {
        if (window.google) {
                window.google.accounts.id.initialize({
                    client_id: "1048062830252-ckdg0mtlls0i4km5qeorr395jq9cv15l.apps.googleusercontent.com",
                    callback: handleCredentialResponse
                });
                window.google.accounts.id.renderButton(
                    googleButton.current,
                    { type: 'standard', shape: 'pill', theme: "filled_black", size: "medium", text: 'signin_with' }  // customization attributes
                );
        }

    }, [])

    return (
        <div ref={googleButton}></div>
    )
}
