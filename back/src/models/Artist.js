const Sequelize = require("sequelize");
const SequelizeConnexion = require("../../Sequelize/SequelizeConnexion");

const Artist = SequelizeConnexion.define(
  "Artist",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Artist's name are required !",
        },
      },
    },
  },
  { timestamps: false }
);

module.exports = Artist;
