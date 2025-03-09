export function verifyToken(token:string) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (err) {
        return null;
    }
}
