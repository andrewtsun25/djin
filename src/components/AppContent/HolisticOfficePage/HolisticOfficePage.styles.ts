import { createStyles, makeStyles } from '@material-ui/core/styles';

const holisticOfficePageStyles = makeStyles(() =>
    createStyles({
        architecturePaper: {
            padding: 10,
            margin: 10,
        },
        holisticOfficeImg: {
            maxWidth: '80vw',
            padding: 10,
            margin: 10,
            border: '3px solid #2ab573',
            borderRadius: 10,
            objectFit: 'scale-down',
        },
        holisticOfficeImgLink: {
            margin: '30px auto',
        },
        holisticOfficeLinkImg: {
            maxWidth: '90vw',
            objectFit: 'scale-down',
        },
        pageHeading: {
            margin: '30px auto',
        },
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        link: {
            color: '#308575',
        },
    }),
);

export default holisticOfficePageStyles;
