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

    StatusOrder.associate = function (models) { 
      StatusOrder.hasMany(models.Status, { 
          foreignKey: 'status_id',
          as: 'status'
      });
      StatusOrder.hasMany(models.Order, { 
        foreignKey: 'orders_id',
        as: 'orders'
    });
    
    };

    return StatusOrder
};