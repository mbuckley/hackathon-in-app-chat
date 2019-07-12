import { User } from "../../global/types";
export declare class MessageList {
    /**
     * User uuid
     */
    uuid: string;
    /**
     * Senders Info
     */
    sendersInfo: any;
    /**
     * Is History Loaded?
     */
    historyLoaded: boolean;
    /**
     * History Messages
     */
    historyMessages: any;
    /**
     * user
     */
    user: User;
    users: any;
    /**
     * Message Send Date
     */
    messageSentDate: any;
    private styleForMessageSender;
    render(): any;
}
