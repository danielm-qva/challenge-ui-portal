type ICategory = {
    id: number;
    name: string;
}

const categoriesData = [
    {
        "id": 1,
        "name": "Vitaminas"
    },
    {
        "id": 2,
        "name": "Analgésicos y antiinflamatorios"
    },
    {
        "id": 3,
        "name": "Antiinfecciosos"
    },
    {
        "id": 4,
        "name": "Mucolíticos y antitusivos"
    },
    {
        "id": 5,
        "name": "Antiulcerosos y antiácidos"
    },
    {
        "id": 6,
        "name": "Antidiarreicos y laxantes"
    },
    {
        "id": 7,
        "name": "Antipiréticos"
    },
    {
        "id": 8,
        "name": "Antialérgicos"
    }
]


export const fetchCategories = async (): Promise<{ data: ICategory[] }> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {data: categoriesData};
}
