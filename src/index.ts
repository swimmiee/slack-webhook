import axios from "axios";

export default class SlackBot<T extends {[key: string]: string}> {
    private _aliases:T;
    private disabled:boolean = false;

    constructor(aliases:T, disabled?: boolean){
        this._aliases = aliases;
        if(disabled)    
            this.disabled = disabled;
    }

    async send<M>(alias: keyof T, object:M){
        return axios.post(this._aliases[alias], object)
    }

    async sendText(alias: keyof T, text:string){
        return axios.post(this._aliases[alias], {text})
    }

    createBot = (alias: keyof T) => {
        const send = async<M extends unknown>(object:M) => {
            if(!this.disabled)
                this.send(this._aliases[alias], object)
        } 
        
        const sendText = async(text:string) => {
            if(!this.disabled)
                this.sendText(this._aliases[alias], text)
        }

        const sendForce = async<M extends unknown>(object:M) => {
            this.send(this._aliases[alias], object)
        } 
        
        const sendTextForce = async(text:string) => {
            this.sendText(this._aliases[alias], text)
        }
        
        return {
            send,
            sendText,
            sendForce,
            sendTextForce
        }
    }

}