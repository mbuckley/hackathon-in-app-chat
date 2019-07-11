export declare class Chat {
    el: HTMLElement;
    private messageList?;
    pubnub: any;
    state: any;
    userProfile: any;
    uuid: any;
    sendersInfo: Array<any>;
    lastMessageWeekday: any;
    messageSentDate: any;
    historyLoaded: any;
    historyMessages: any;
    onlineUsers: any;
    onlineUsersCount: any;
    networkErrorStatus: any;
    networkErrorImg: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUnmount(): void;
    subscribe(): void;
    hereNow(): void;
    leaveChat(): void;
    scrollToBottom(): void;
    render(): any;
}
