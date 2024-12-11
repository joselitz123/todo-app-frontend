export interface AreaTodoAPIResponseType {
    success: boolean;
    data: {
        area_id: number;
        name: string;
        icon: string;
        created_at: string;
    }[]
}

export type StatusType = {
        name: string;
        status_id: number;
        status_color: string;
        actual_status: string;
        order: number;
    };
export interface StatusAPIResponseType {
    success: boolean;
    data: StatusType[];
};

export type LabelType = {
    label_id: string;
    name: string;
    color: string;
}[]
export interface LabelAPIResponseType{
    success: boolean;
    data: LabelType;
}

export interface LabelPostAPIPayloadType {
    area_id: number;
    label_name: string;
    label_color: string;
}