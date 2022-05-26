import axios from "axios";

export default class SlackBot<T extends {[key: string]: string}> {
    private _aliases:T;

    constructor(aliases:T){
        this._aliases = aliases;
    }

    async send(alias: keyof T, object:Object){
        return axios.post(this._aliases[alias], object)
    }

    async sendText(alias: keyof T, text:string){
        return axios.post(this._aliases[alias], {text})
    }

}