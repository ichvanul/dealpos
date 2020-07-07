export interface Book {
    id: number;
    name: string;
    year: string;
    review: Array<{
        email: string;
        note: string;
        star: number; 
    }>;
}