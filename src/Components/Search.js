import { useState, useEffect } from 'react';

import { Select } from 'antd';
import Cookie from "js.cookie";


const Search = ({ department, setDepartment, departmentList }) => {
  const { Option } = Select;

  const onChange = (value) => {
    setDepartment(value);
    Cookie.set("department", value)
  }

  return (
    <Select
      showSearch
      style={{ width: 180, marginLeft: "20px" }}
      placeholder={"選擇系所"}
      optionFilterProp="children"
      onChange={onChange}
      className="search textarea"
      key = {department}
      defaultValue={department}
    >
      {
        departmentList.length
          ?
          departmentList.map(dep => (
            <Option value={dep.dep_id}>{dep.dep_name}</Option>
          ))
          :
          <Option value={"none"}></Option>
      }
    </Select>
  )
}
export default Search;

