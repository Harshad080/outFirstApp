


export interface cricketers {
    name: string,
    country: string,
    odiDebut: string,
    matches: number,
    runs: number,
    highestScore: number,
    centuries?: number,
    fifties?: number,
    battingAverage: number,
    wickets: number
}

export interface intrcricketers {
    name: string,
    country: string,
    odiDebut: string,
    matches: number,
    runs: number,
    highestScore: number,
    centuries?: number,
    fifties?: number,
    battingAverage: number,
    wickets: number
}

export interface users {
    id: number,
    name: string, 
    email: string, 
    role: string
}

export interface product {
    id: number, 
    name: string, 
    price: number, 
    category: string
}

export interface employee {
    id: number, 
    name: string, 
    department: string, 
    salary: number
}

export interface books {
    id: number,
    title: string, 
    author: string, 
    year: number
}


export interface students {
    id: number,
    name: string, 
    grade: string, 
    age: number
}