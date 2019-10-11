module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("review", {
        // Giving the Author model a name of type STRING
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        book: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    // review.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     review.belongsTo(models.Book, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     review.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Review;


};