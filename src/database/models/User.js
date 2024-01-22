module.exports = (sequelize, DataTypes) => {
    let alias = 'User'; // esto debería estar en singular
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        document_number: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        roles_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) { // un usuario pertenece o tiene un rol
        User.belongsTo(models.Rol, {
            foreignKey: 'id',
            as: 'roles'
        });
        User.hasMany(models.Order, { //un usuario puede tener muchas ordenes asociadas
            foreignKey: 'id',
            as: 'orders'
        });
        User.hasMany(models.Favorit, { //un usuario puede tener muchos productos favoritos
            foreignKey: 'id',
            as: 'favorites'
        });
        User.hasMany(models.Cart, { //un usuario puede tener muchos carritos
            foreignKey: 'id',
            as: 'carts'
        });
    };

    return User
};