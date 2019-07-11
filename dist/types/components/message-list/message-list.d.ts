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
    /**
     * Network error status
     */
    networkErrorStatus: any;
    /**
     * Network error image
     */
    networkErrorImage: any;
    /**
     * Message Send Date
     */
    messageSentDate: any;
    componentWillLoad(): void;
    render(): any;
}
