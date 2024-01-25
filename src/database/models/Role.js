module.exports = (sequelize, DataTypes) => {
    let alias = 'Rol'; 
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
        tableName: 'roles',
        timestamps: false
    }
    const Rol = sequelize.define(alias, cols, config);

    return Rol
};