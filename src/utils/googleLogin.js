/* eslint-disable no-undef */
import {config} from "@/envConfig/envConfig";

export const getTokens = (tokenCode) => {
    return new Promise((resolve, reject) => {
        fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                grant_type: "authorization_code",
                code: tokenCode,
                client_id: `${config.google_client_id}`,
                client_secret: `${config.google_client_secret}`,
                redirect_uri: "http://localhost:3000",
                // redirect_uri: "https://snugstaff-eight.vercel.app",
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch access token");
                return res.json();
            })
            .then((data) => {
                return fetch(`${config.base_url}/api/convert-token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        grant_type: "convert_token",
                        client_id: `${config.auth_client_id}`,
                        client_secret: `${config.auth_client_secret}`,
                        backend: "google-oauth2",
                        token: data.access_token,
                    }),
                });
            })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to convert token");
                return res.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                reject(error);
            });
    });
};
