import { Typography } from '@material-ui/core';

export const PostView = (props) => {
    const {children, ...rest} = props

    return <Typography {...rest}>{children}</Typography>
}

