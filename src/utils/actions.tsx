'use server'
import { fetchMonth } from "../utils/fetchMonth";

 
export async function getMonth(date: Date) {

    const data = await fetchMonth(date);

    return data;
}