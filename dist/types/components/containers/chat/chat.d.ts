export declare class Chat {
    pubnub: any;
    state: any;
    userProfile: any;
    uuid: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUnmount(): void;
    subscribe(): void;
    hereNow(): void;
    leaveChat(): void;
    scrollToBottom(): void;
    render(): any;
}
