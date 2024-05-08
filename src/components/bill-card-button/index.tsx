import React from "react";
import { BillCardComponentProps} from "../../models";
import styles from './BillCardButton.module.scss';

// MUI Imports
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const BillCardButton: React.FC<BillCardComponentProps> = ({ net})=> {
    // Renderer
    return (
        <React.Fragment>
            <div className={styles["bill-card-wrapper"]}>
                    <Button 
                        variant={"contained"} 
                        color={'success'} 
                        fullWidth
                    >
                        {`Pay Rs. ${net}`}
                    </Button>
            </div>
        </React.Fragment>
    )
}