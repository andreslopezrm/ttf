export function getQueryIntParameter(request: Request, name: string, defaultValue: number): number {
    const url = new URL(request.url);
    const param  = parseInt(url.searchParams.get(name) ?? "", 10);
    if(!isNaN(param)){
        return param;
    }
    return defaultValue;
}

export function getQueryStringParameter(request: Request, name: string): string | null {
    const url = new URL(request.url);
    return url.searchParams.get(name);
}