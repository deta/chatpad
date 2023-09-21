export abstract class Integration {
    key: string
    instance: string
    apiKey: string

    constructor(key: string, instance: string, apiKey: string) {
        this.key = key;
        this.instance = instance;
        this.apiKey = apiKey;
    }

    abstract storeContent(content: string, title?: string): Promise<string>
}