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

// Slice Models
export interface ProductSliceProps {
    loading: boolean;
    error: boolean;
    timestamp: Date;
    products: ItemProps[];
}

export interface CartItemProps {
    itemId: number;
    count: number;
}