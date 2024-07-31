const getFormData = (event) => {
  event.preventDefault();
  const donorName = document.getElementById("donorname").value;
  const bloodGroup = document.getElementById("bloodgroup").value;
  const donoerAge = document.getElementById("age").value;

  const radioButton = document.querySelector(
    'input[name="disease"]:checked'
  );
  const radioButtonValue = radioButton ? radioButton.value : null;
  console.log("Radio Button Value = ", radioButtonValue);
  //const disease = document.getElementById("disease").value;
  const city = document.getElementById("city").value;

  console.log("Name = ", donorName);
  console.log("Blood Group = ", bloodGroup);
  console.log("Age = ", donoerAge);
  console.log("Disease = ", radioButtonValue);
  console.log("City = ", city);
};
