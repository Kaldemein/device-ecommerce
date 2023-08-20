const { Device } = require("../models/models");
const { Op } = require("sequelize");

class fetchDevicesQuery {
  constructor(devicesRepo) {
    this.devicesRepo = devicesRepo || Device
  }

  all({ typeId, brandId, limit, page, search }) {
    page = page || 1;
    limit = limit || 9;

    let queryParams = [
      { method: this._buildPaginationQuery, params: { page, limit } },
      { method: this._buildBrandQuery, params: brandId },
      { method: this._buildTypeQuery, params: typeId },
      { method: this._buildSearchQuery, params: search }
    ].reduce((query, currentFilter) => {
      return currentFilter.method(query, currentFilter.params);
    }, {})
    return this.devicesRepo.findAndCountAll(queryParams);
  }

  _buildPaginationQuery(currentQuery, { page, limit }) {
    let offset = page * limit - limit;
    return { ...currentQuery, limit: limit, offset: offset }
  }

  _buildBrandQuery(currentQuery, brandId) {
    if (brandId) {
      return { ...currentQuery, where: { ...currentQuery.where, brandId: brandId } }
    } else {
      return currentQuery
    }
  }

  _buildTypeQuery(currentQuery, typeId) {
    if (typeId) {
      return { ...currentQuery, where: { ...currentQuery.where, typeId: typeId } }
    } else {
      return currentQuery
    }
  }

  _buildSearchQuery(currentQuery, search) {
    if (search) {
      return { ...currentQuery, where: { ...currentQuery.where, name: { [Op.iLike]: `%${search}%` } } }
    } else {
      return currentQuery
    }
  }
}

module.exports = new fetchDevicesQuery();
