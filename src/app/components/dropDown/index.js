import React,{useContext} from 'react'
import { Select, FormControl, FormHelperText, makeStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { Context } from '../../config/context';

const useStyles = makeStyles(styles, { classNamePrefix: "DropDown" });

function DropDownSelect({ handleChange, items }) {
    const classes = useStyles();
    const [state,dispatch] = useContext(Context);
    const {error} = state;
    const isDisabled = error.errorCode ? true : false;

    return (
        <FormControl className={classes.dropDownContainer} >
            <div className={classes.dropDownArea}>
                <Select native defaultValue={items[0].query}
                    disabled={isDisabled}
                    onChange={handleChange}
                    className={classes.dropDownSelect}>
                    {
                        items.map((item) => {
                            return <option key={item.query} value={item.query}>{item.name}</option>
                        })
                    }
                </Select>
            </div>
            <FormHelperText>Sort</FormHelperText>
        </FormControl>
    )
}

DropDownSelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}

DropDownSelect.defaultValue = {
    items: [],
};

export default DropDownSelect;
