const { Device, DeviceInfo } = require("../models/models")
const ApiError = require("../error/apiError")
const path = require("path")
const uid = require("uuid")

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files

            const fileName = uid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))

            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(element => {
                    Device.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.deviceId
                    })
                });
            }

            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async get(req, res) {
        let { brandId, typeId, page, limit } = req.query
        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit
        let devices

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({
                limit,
                offset
            })
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: {
                    brandId,
                    typeId
                },
                limit,
                offset
            })
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({
                where: {
                    typeId
                },
                limit,
                offset
            })
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({
                where: {
                    brandId
                },
                limit,
                offset
            })
        }

        return res.json(devices)
    }


    async getBy(req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {
                id
            },
            include: [{ model: DeviceInfo, as: "info" }]
        })

        return res.json(device)
    }
}




module.exports = new DeviceController()