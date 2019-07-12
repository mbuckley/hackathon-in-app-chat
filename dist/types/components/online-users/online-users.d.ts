export declare class Header {
    /**
     * The logged in user uuid
     */
    loggedInUser: string;
    /**
     * Online Users array
     */
    onlineUsers: any;
    putLoggedInUserFirst(arr: any): void;
    componentWillLoad(): void;
    render(): any;
}
