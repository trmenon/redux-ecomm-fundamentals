// Data Models
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

export interface CheckoutItemProps {
    itemId: number;
    title: string;
    quantity: number;
    unitPrice: number;
    netPrice: number;
    image: string;
    category: string;
}

// Component Models
export interface BillCardComponentProps {
    net: number;
}

export interface ProductCardComponentProps {
    data: ItemProps;
}

export interface CheckoutItemCardComponentProps {
    itemId: number;
    title: string;
    category: string;
    image: string;
    netPrice: number;
    quantity: number;
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