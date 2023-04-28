// 将枚举转换为对象
export function enum2Obj(Enum) {
  return Object.fromEntries(
    Object.keys(Enum)
      .filter((key) => isNaN(+key))
      .map((key) => [key, Enum[key]]),
  )
}

// 将枚举转换为指定的数组对象
export function enum2ArrayFormat(Enum, name = 'label', value = 'value', stringify = false) {
  return Object.entries(enum2Obj(Enum)).map(([_name, _value]) => ({
    [name]: _name,
    [value]: stringify ? String(_value) : _value,
  }))
}

