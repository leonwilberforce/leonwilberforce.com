const {DataTypes,Model} = require('sequelize');

class Article extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            title: {
                type: DataTypes.STRING
            },
            publishedDate: {
                type: DataTypes.DATE
            },
            author: {
                type: DataTypes.STRING
            },
            content: {
                type: DataTypes.TEXT
            },
            url: {
                type: DataTypes.STRING,
                unique: true
            }
        }, {
            sequelize,
            modelName: 'article',
            tableName: 'article',
            underscored: true,
            timestamps: true
        });
    }
}

module.exports = Article;