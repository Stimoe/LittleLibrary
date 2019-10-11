module.exports = function(sequelize, DataTypes) {
    var Library = sequelize.define("library", {
        // Giving the Author model a name of type STRING
        longitude: {
            type: DataTypes.FLOAT(100, 8),
            allowNull: false
        },
        lattitude: {
            type: DataTypes.FLOAT(100, 8),
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        },
        user: {
            type: DataTypes.INTEGER
        }
    });

    // library.associate = function(models) {
    //     library.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     // library.hasMany(models.Book, {
    //     //     onDelete: "cascade"
    //     // });




    // };

    return Library;
};