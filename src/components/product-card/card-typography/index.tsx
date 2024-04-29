import React from 'react';
import Typography from '@mui/material/Typography';

interface CardTypographyComponentProps {
    variant: 'title' | 'subtitle' | 'body';
    children: React.ReactNode;
}

export const CardTypography: React.FC<CardTypographyComponentProps> = ({ variant, children})=> {
    return(
        <React.Fragment>
            <Typography
                variant={variant==='body'? 'body1': 'h6'}
                sx={{
                    color: variant === 'title'? '#1e1c1c': '#999999',
                    fontWeight: variant === 'body'? 400: variant==='subtitle'? 500: 600,
                    fontSize: variant === 'body'? "12px": variant==='subtitle'? "14px": "16px",
                    textAlign: 'left',
                    overflowWrap: 'break-word', // Ensure that long words are broken and wrap to avoid horizontal overflow
                    textOverflow: 'ellipsis',
                }}
            >
                {children}
            </Typography>
        </React.Fragment>
    )
}