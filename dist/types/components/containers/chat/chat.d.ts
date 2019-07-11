export declare class ChatContainer {
    pubnub: any;
    state: any;
    userProfile: any;
    uuid: any;
    componentWillLoad(): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    subscribe(): void;
    hereNow(): void;
    leaveChat(): void;
    getTime(timetoken: any): string;
    getWeekday(timetoken: any): string;
    getDate(timetoken: any, messageType: any, index?: number): string;
    scrollToBottom(): void;
    render(): any;
}
