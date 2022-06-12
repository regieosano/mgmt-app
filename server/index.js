import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db';

import { graphQLHTTPAsFunction } from './graphql/graphql';

dotenv.config();

const PORT = process.env.PORT || 6500;

const app = express();

// Connect to Database
connectDB();

app.use('/graphql', graphQLHTTPAsFunction);

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));