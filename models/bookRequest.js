module.exports = function(sequelize, DataTypes) {
    var BookRequest = sequelize.define("bookRequest", {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    BookRequest.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint 
        BookRequest.belongsTo(models.library, {
            foreignKey: {
                allowNull: false
            }
        });

        BookRequest.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });


    };

    return BookRequest;
};