export interface RatingProps {
    rate: number;
    count: number;
}

export interface ItemProps {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    image: string;
    rating: RatingProps;
}

export interface ProductCardComponentProps {
    data: ItemProps;
}