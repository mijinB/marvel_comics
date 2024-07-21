import { QueryFunctionContext } from "@tanstack/react-query";
import { CharacterDetailResponse, CharactersResponse, ComicDetailResponse, ComicsResponse } from "./types";
import md5 from "md5";

const API_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public";
const API_KEY = "057059055a025c91b9e4a38a224f317e";
const SECRET_KEY = "deb726458581d1cc43baba040fdc8273b223465c";
const currentTime = new Date().getTime();
const MD5_KEY = md5(currentTime + SECRET_KEY + API_KEY);
const PARAMS = `?apikey=${API_KEY}&ts=${currentTime}&hash=${MD5_KEY}`;

export const listComics = (): Promise<ComicsResponse> => fetch(`${API_URL}/comics`).then((r) => r.json());

export const listCharacters = (): Promise<CharactersResponse> => fetch(`${API_URL}/characters`).then((r) => r.json());

export const comicDetail = ({ queryKey }: QueryFunctionContext): Promise<ComicDetailResponse> => {
    const [_, comicId] = queryKey;
    return fetch(`${API_URL}/comics/${comicId}${PARAMS}`).then((r) => r.json());
};

export const characterDetail = ({ queryKey }: QueryFunctionContext): Promise<CharacterDetailResponse> => {
    const [_, characterId] = queryKey;
    return fetch(`${API_URL}/characters/${characterId}`).then((r) => r.json());
};

export const listComicCharacters = ({ queryKey }: QueryFunctionContext): Promise<CharactersResponse> => {
    const [_, comicId] = queryKey;
    return fetch(`${API_URL}/comics/${comicId}/characters`).then((r) => r.json());
};
