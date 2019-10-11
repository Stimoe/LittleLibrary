module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("book", {
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        author: {
            type: DataTypes.TEXT
        },
        genre: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.TEXT
        },
        availability: {
            type: DataTypes.BOOLEAN
        },
        library_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Book.associate = function(models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint 
    //     Book.belongsTo(models.library, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Book.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Book.hasMany(models.review, {
    //         onDelete: "cascade"
    //     });

    // };

    return Book;
};