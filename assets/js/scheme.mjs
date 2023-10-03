import { BSON } from './bson.mjs'; 

export async function getKey(password) {
    const enc = new TextEncoder();
    const passwordBuffer = enc.encode(password);

    const saltBuffer = await crypto.subtle.digest("SHA-256", passwordBuffer);
    const salt = new Uint8Array(saltBuffer.slice(0, 16));

    const derivedKey = await crypto.subtle.importKey(
        "raw",
        passwordBuffer,
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );
    const key = await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 480000,
            hash: "SHA-256",
        },
        derivedKey,
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
    return key
}

export async function encrypt(key, obj) {
    const nonce = crypto.getRandomValues(new Uint8Array(16));
    const encryptedData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: nonce,
        },
        key,
        BSON.serialize(obj)
    );

    const combined = new Uint8Array(nonce.byteLength + encryptedData.byteLength);
    combined.set(nonce, 0);
    combined.set(new Uint8Array(encryptedData), nonce.byteLength);
    return combined;
}

export async function decrypt(key, combinedBuffer) {
    const nonce = combinedBuffer.slice(0, 16);
    const data = combinedBuffer.slice(16);
    const decryptedData = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: nonce,
        },
        key,
        data
    );
    return BSON.deserialize(decryptedData);
}