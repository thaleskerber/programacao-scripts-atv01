import { loteriaProps } from "../types";
import api from "./api";

class Loteria{
    async get():Promise<loteriaProps> {
        const {data} = await api.get(`/`)
        return data;
    }
}

const loteria = new Loteria()
export default loteria