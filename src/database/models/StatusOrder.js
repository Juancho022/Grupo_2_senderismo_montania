module.exports = (sequelize, DataTypes) => {
    let alias = 'StatusOrder'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
          }
    };
    let config = {
        tableName: 'statuses_orders',
        timestamps: true
    }
    const StatusOrder = sequelize.define(alias, cols, config);

    return StatusOrder
};