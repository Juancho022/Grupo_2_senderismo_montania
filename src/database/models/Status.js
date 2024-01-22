module.exports = (sequelize, DataTypes) => {
    let alias = 'Status'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
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

    return Status
};