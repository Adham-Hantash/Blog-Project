import  { DataTypes } from 'sequelize';
import {sequelize} from '../connection.js';
const  blogModel = sequelize.define('Blog', {
    // Model attributes are defined here
    title:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    body:{
        type: DataTypes.STRING,
        allowNull: true
    }
  });

  export default blogModel