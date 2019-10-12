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
        }
    });

    Library.associate = function(models) {
        Library.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });

        Library.hasMany(models.book, {
            onDelete: "cascade"
        });

        Library.hasMany(models.bookRequest, {
            onDelete: "cascade"
        });



    };

    return Library;
};