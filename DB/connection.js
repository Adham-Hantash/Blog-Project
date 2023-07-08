import { Sequelize }from 'sequelize';
export const sequelize = new Sequelize('blogs', 'root', '', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export const conneectDB = async ()=>{
    return await sequelize.sync({alter:false})
    .then(result=>{
        console.log("Database connected successfully");
    }).catch(error=>{
        console.log("Error connecting to database");
    });
  }

 