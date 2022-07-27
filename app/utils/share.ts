export function shareTwitterUrl(text: string, url: string | null = null, hashtags: string | null = null): string {
    const params = new URLSearchParams();
    params.append("text", text);

    if(url) {
        params.append("url", url);
    }

    if(hashtags) {
        params.append("hashtags", hashtags);
    }
    
    return `http://twitter.com/share?${params.toString()}`;
}