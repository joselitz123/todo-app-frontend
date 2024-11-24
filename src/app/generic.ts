export interface AreaTodoType {
    success: boolean;
    data: {
        area_id: number;
        name: string;
        icon: string;
        created_at: string;
    }[]
}