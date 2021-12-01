import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ICompany } from '../../types/company';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';


interface IProps {
    item: ICompany;
}

export const CardItem: React.FC<IProps> = ({item}) => {
  return (
    <Card className="cardItem">
        <CardContent>
            <Typography sx={{ mb: 0.6 }} color="text.secondary">
                Кампания
            </Typography>
            
            <Typography variant="h5" component="div" paragraph>
                <div className="CardTitle">
                    <Link to={`/companies/${item._id}`}>{item.name}</Link>
                    {/* <Link to={`/companies/${item.name}`}>{item.name}</Link> */}
                </div>
            </Typography>

    {/*     <Typography variant="h6" gutterBottom>Потоки </Typography> */}

            <Divider />
            
            <Box mt={2}>
                {item?.threads && item?.threads.map((t: any) => (
                    <Typography  key={t._id} sx={{ mb: 1.5 }} color="text.secondary">
                        {t.name} - {t.payload} %
                    </Typography>
                ))}
            </Box>
            
            </CardContent>
  </Card>
  );
}