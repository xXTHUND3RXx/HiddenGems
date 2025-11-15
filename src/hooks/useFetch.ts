'use client';

import { useState, useEffect } from "react";
import { Game } from "@/types/game";
import { ApiGamesResponse } from "@/types/apiGamesResponse";

export function useFetch(url: string) {
    const [data, setData] = useState<Game[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        async function loadData() {
        try {
            setLoading(true);

            const res = await fetch(url);

            if(!res.ok) {
                throw new Error(`Erro ao buscar: ${res.statusText}`);
            }
        
            const json: ApiGamesResponse = await res.json();
            setData(json.games);
        } catch (err: unknown) {
            if(err instanceof Error) {
                setError(err);
            } else {
                setError(new Error('Erro desconhecido'));
            }
        } finally {
            setLoading(false);
        }
    }

    loadData();
    }, [url]);
    
    return {data, loading, error};
}