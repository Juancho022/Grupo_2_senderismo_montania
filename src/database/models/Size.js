module.exports = (sequelize, dataTypes) => {
    let alias = 'Size'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sizes_type: {
            type: DataTypes.STRING(2),
            allowNull: false,
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) { 
        Size.hasMany(models.ProductSize, { //un talle pertenece a muchos productos
            foreignKey: 'sizes_id',
            as: 'sizes'
        });
    };

    return Size
};