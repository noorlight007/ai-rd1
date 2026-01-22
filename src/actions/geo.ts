"use server";

import axios from "axios";

export async function getCountryCode() {
    try {
        // Try primary provider
        const response = await axios.get("https://ipapi.co/json/");
        if (response.data && response.data.country_code) {
            return response.data.country_code;
        }
    } catch (error) {
        console.error("Primary geo-IP service failed, trying fallback...", error);
    }

    try {
        // Fallback provider
        const response = await axios.get("https://ipwho.is/");
        if (response.data && response.data.country_code) {
            return response.data.country_code;
        }
    } catch (error) {
        console.error("All geo-IP services failed:", error);
    }

    return null;
}
