export const encrypt = (data: string) => {
  return encodeURIComponent(
    Buffer.from(Buffer.from(data.toString()).toString('base64')).toString(
      'hex',
    ),
  )
}

export const decrypt = (data: string) => {
  return Buffer.from(
    Buffer.from(decodeURIComponent(data.toString()), 'hex').toString(),
    'base64',
  ).toString()
}
