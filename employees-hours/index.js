const getEmployeesData = () =>
  [
    { name: 'A', value: 30, hours: 140 },
    { name: 'B', value: 45, hours: 100 },
    { name: 'C', value: 23, hours: 180 },
  ]

const calculateValueByHour = ({ value, hours }) =>
    value * hours

const mapEmployeeInformation = employee => ({
    name: employee.name,
    total: calculateValueByHour({ value: employee.value, hours: employee.hours })
})

const calculateEmployeesSalary = () => {
    const employees = getEmployeesData()

    return employees.map(mapEmployeeInformation)
}

const employeesSalary = calculateEmployeesSalary()

console.log(employeesSalary)