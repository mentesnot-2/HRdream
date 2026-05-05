const API_BASE = process.env.NEXT_PUBLIC_API_URL??'http://127.:8000';



export async function apiGet<T>(path:string, token?: string) : Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: {
            "Content-Type":"application/json",
            ...(token ? { Authorization: `Bearer ${token}`} : {}),
        },
        cache:"no-store",
    });

    if (!res.ok) {
        throw new Error(`API GET failed: ${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<T>;
}