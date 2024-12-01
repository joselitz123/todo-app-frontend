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
export interface StatusAPIRedsponseType {
    success: boolean;
    data: StatusType[]
};