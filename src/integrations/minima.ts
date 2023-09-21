import { Integration } from ".";

export class Minima extends Integration {
    constructor(instance: string, apiKey: string) {
        super('minima', instance, apiKey);
    }

    async storeContent(content: string, title: string): Promise<string> {
        console.log("Minima Integration: Storing content...");
        console.log(content);

        const response = await fetch(`https://${this.instance}/api/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Space-App-Key": this.apiKey,
            },
            body: JSON.stringify({
                title, content
            })
        });

        if (!response.ok) {
            throw new Error("Minima Integration: Failed to store content.");
        }

        console.log("Minima Integration: Content stored.");

        const json = await response.json();
        return `https://${this.instance}/notes/${json.data.key}`
    }
}
