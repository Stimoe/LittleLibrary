module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        email: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    User.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint 
        User.hasMany(models.library, {
            onDelete: "cascade"
        });

        User.hasMany(models.book, {
            onDelete: "cascade"
        });

        User.hasMany(models.review, {
            onDelete: "cascade"
        });
        User.hasMany(models.bookRequest, {
            onDelete: "cascade"
        });



    };

    return User;
};