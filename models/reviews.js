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
        }

    });

    Review.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Review.belongsTo(models.book, {
            foreignKey: {
                allowNull: false
            }
        });
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Review.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Review;


};