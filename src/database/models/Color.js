module.exports = (sequelize, dataTypes) => {
    let alias = 'Color'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        color_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config);

    return Color
};