export interface AreaTodoType {
    success: boolean;
    data: {
        area_id: number;
        name: string;
        icon: string;
        created_at: string;
    }[]
}


export interface StatusType {
    success: boolean;
    data: {
        name: string;
        status_id: number;
        status_color: string;
        actual_status: string;
        order: number;
    }[]
}