module.exports = function(sequelize, DataTypes) {
    var UserLibrary = sequelize.define("userLibrary", {
        userId: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        libraryId: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });



    return UserLibrary;
};