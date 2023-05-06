import { publicApi, privateApi } from ".";




export const createType = async (type) => {
  const {data} = await privateApi.post("/api/type", type)
  return data
}

export const createBrand = async (type) => {
  const {data} = await privateApi.post("/api/brand", type)
  return data
}

export const createDevice = async (device) => {
  const {data} = await privateApi.post("/api/device", device)
  return data
}

export const getTypes = async () => {
  const {data} = await publicApi.get("/api/type")
  return data
}


export const getBrands = async (brand) => {
  const {data} = await publicApi.get("/api/brand", brand)
  return data
}

export const getDevices = async (typeId, brandId, page, limit) => {
  const {data} = await publicApi.get("/api/device", {
    params: {
      typeId, brandId, page, limit
    }
  })
  return data
}

export const getDevice = async (id) => {
  const {data} = await publicApi.get("/api/device/" + id)
  return data
}