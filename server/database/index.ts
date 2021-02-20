import { Sequelize } from 'sequelize';
import config from 'config'

const sequelize = new Sequelize(
    config.get('database.name'), 
    config.get('database.username'), 
    config.get('database.password'), {
        host: config.get('database.host'),
        dialect: 'mariadb'
    })

export default sequelize;
