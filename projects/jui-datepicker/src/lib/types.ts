export interface MonthData
{
    0: number[];
    1: number[];
    2: number[];
    3: number[];
    4: number[];
    5: number[];
}

export interface NepaliDate
{
    day: string;
    month: string;
    year: string;
}

export type DateFormatter = (date: NepaliDate) => string;