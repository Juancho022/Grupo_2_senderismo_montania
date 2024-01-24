module.exports = (sequelize, dataTypes) => {
    let alias = 'Status'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'statuses',
        timestamps: false
    }
    const Status = sequelize.define(alias, cols, config);

    Status.associate = function (models) { //un producto pertenece a una categoria
        Status.belongsTo(models.StatusOrder, {
            foreignKey: 'id',
            as: 'statusOrder'
        });
    };

    return Status
};